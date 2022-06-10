import { GraphQLClient } from 'graphql-request';
import {
  ADD_ITEM_TO_ORDER,
  ADJUST_ORDERLINE,
  APPLY_COUPON_CODE,
  CREATE_COINBASE_PAYMENT_INTENT,
  CREATE_MOLLIE_PAYMENT_INTENT,
  GET_ACTIVE_ORDER,
  GET_DROP_OFF_POINTS,
  GET_DUTCH_ADDRESS,
  GET_ELIGIBLESHIPPINGMETHODS,
  GET_NEXT_ORDERSTATES,
  GET_ORDER_BY_CODE,
  GET_PRICE_AND_STOCKLEVEL,
  GET_PRODUCT,
  REMOVE_ALL_ORDER_LINES,
  REMOVE_COUPON_CODE,
  SET_CUSTOMER_FOR_ORDER,
  SET_ORDERSHIPPINGADDRESS,
  SET_ORDERSHIPPINGMETHOD,
  SET_PICKUP_LOCATION_FOR_ORDER,
  TRANSITION_ORDER_TO_STATE,
} from './vendure.queries';
import {
  ActiveOrderQuery,
  AdditemToOrderMutation,
  AdditemToOrderMutationVariables,
  AdjustOrderLineMutation,
  AdjustOrderLineMutationVariables,
  ApplyCouponCodeMutation,
  ApplyCouponCodeMutationVariables,
  CreateAddressInput,
  CreateCoinbasePaymentIntentMutation,
  CreateCustomerInput,
  CreateMolliePaymentIntentMutation,
  CreateMolliePaymentIntentMutationVariables,
  DutchAddressLookupQuery,
  DutchAddressLookupQueryVariables,
  DutchPostalCodeInput,
  EligibleShippingMethodsQuery,
  MolliePaymentIntent,
  MyparcelDropOffPoint,
  MyparcelDropOffPointInput,
  MyparcelDropOffPointsQuery,
  MyparcelDropOffPointsQueryVariables,
  NextOrderStatesQuery,
  OrderByCodeQuery,
  OrderByCodeQueryVariables,
  OrderFieldsFragment,
  ProductQuery,
  ProductQueryVariables,
  RemoveAllOrderLinesMutation,
  RemoveCouponCodeMutation,
  RemoveCouponCodeMutationVariables,
  SetCustomerForOrderMutation,
  SetCustomerForOrderMutationVariables,
  SetOrderCustomFieldsMutation,
  SetOrderCustomFieldsMutationVariables,
  SetOrderShippingAddressMutation,
  SetOrderShippingAddressMutationVariables,
  SetOrderShippingMethodMutation,
  SetOrderShippingMethodMutationVariables,
  StockLevelProductsQuery,
  StockLevelProductsQueryVariables,
  TransitionOrderToStateMutation,
  TransitionOrderToStateMutationVariables,
  UpdateOrderCustomFieldsInput,
} from '../generated/graphql';
import { CalculatedProduct, Store } from './types';
import { setCalculatedFields } from '../util/product.util';

export class VendureClient {
  client: GraphQLClient;
  tokenName = 'vendure-auth-token';

  constructor(
    private store: Store,
    private url: string,
    private token: string
  ) {
    this.client = new GraphQLClient(url, {
      headers: { 'vendure-token': token },
    });
  }

  async getActiveOrder(): Promise<OrderFieldsFragment | undefined> {
    const { activeOrder } = await this.request<ActiveOrderQuery>(
      GET_ACTIVE_ORDER
    );
    this.store.activeOrder = activeOrder;
    return activeOrder;
  }

  /**
   * Get all products, but only ID, slug and variant price and stockLevel
   */
  async getStockForProducts(
    productIds: string[]
  ): Promise<StockLevelProductsQuery['products']['items']> {
    const {
      products: { items },
    } = await this.request<
      StockLevelProductsQuery,
      StockLevelProductsQueryVariables
    >(GET_PRICE_AND_STOCKLEVEL, {
      options: { filter: { id: { in: productIds } } },
    });
    return items;
  }

  async getProduct(
    slug: string
  ): Promise<CalculatedProduct<ProductQuery['product']>> {
    const { product } = await this.request<ProductQuery, ProductQueryVariables>(
      GET_PRODUCT,
      { slug }
    );
    if (!product) {
      throw Error(`No product found for slug ${slug}`);
    }
    return setCalculatedFields(product);
  }

  async addProductToCart(
    productVariantId: string,
    quantity: number
  ): Promise<OrderFieldsFragment> {
    const { addItemToOrder } = await this.request<
      AdditemToOrderMutation,
      AdditemToOrderMutationVariables
    >(ADD_ITEM_TO_ORDER, {
      productVariantId,
      quantity,
    });
    this.validateResult(addItemToOrder);
    this.store.activeOrder = addItemToOrder as OrderFieldsFragment;
    this.setLowestShippingMethod().catch((e) => console.error(e)); // async
    return addItemToOrder as OrderFieldsFragment;
  }

  async setLowestShippingMethod() {
    const methods = await this.getEligibleShippingMethods();
    const [defaultMethod] = methods.sort(
      (a, b) => a.priceWithTax - b.priceWithTax
    );
    if (defaultMethod) {
      await this.setOrderShippingMethod(defaultMethod.id);
      await this.unsetPickupLocation();
    } else {
      console.error(`No default shipping found`);
    }
  }

  async getEligibleShippingMethods(): Promise<
    EligibleShippingMethodsQuery['eligibleShippingMethods']
  > {
    const { eligibleShippingMethods } =
      await this.request<EligibleShippingMethodsQuery>(
        GET_ELIGIBLESHIPPINGMETHODS
      );
    return eligibleShippingMethods;
  }

  async setOrderShippingMethod(
    shippingMethodId: string
  ): Promise<OrderFieldsFragment> {
    const { setOrderShippingMethod } = await this.request<
      SetOrderShippingMethodMutation,
      SetOrderShippingMethodMutationVariables
    >(SET_ORDERSHIPPINGMETHOD, {
      shippingMethodId,
    });
    this.validateResult(setOrderShippingMethod);
    this.store.activeOrder = setOrderShippingMethod as OrderFieldsFragment;
    return setOrderShippingMethod as OrderFieldsFragment;
  }

  async adjustOrderLine(
    orderLineId: string,
    quantity: number
  ): Promise<OrderFieldsFragment> {
    const { adjustOrderLine } = await this.request<
      AdjustOrderLineMutation,
      AdjustOrderLineMutationVariables
    >(ADJUST_ORDERLINE, { orderLineId, quantity });
    this.validateResult(adjustOrderLine);
    this.store.activeOrder = adjustOrderLine as OrderFieldsFragment;
    return adjustOrderLine as OrderFieldsFragment;
  }

  async setCustomerForOrder(
    input: CreateCustomerInput
  ): Promise<OrderFieldsFragment> {
    const { setCustomerForOrder } = await this.request<
      SetCustomerForOrderMutation,
      SetCustomerForOrderMutationVariables
    >(SET_CUSTOMER_FOR_ORDER, { input });
    this.validateResult(setCustomerForOrder);
    this.store.activeOrder = setCustomerForOrder as OrderFieldsFragment;
    return setCustomerForOrder as OrderFieldsFragment;
  }

  async setOrderShippingAddress(
    input: CreateAddressInput
  ): Promise<OrderFieldsFragment> {
    const { setOrderShippingAddress: order } = await this.request<
      SetOrderShippingAddressMutation,
      SetOrderShippingAddressMutationVariables
    >(SET_ORDERSHIPPINGADDRESS, { input });
    this.store.activeOrder = order as OrderFieldsFragment;
    return order as OrderFieldsFragment;
  }

  async getNextOrderStates(): Promise<string[]> {
    const { nextOrderStates } = await this.request<NextOrderStatesQuery>(
      GET_NEXT_ORDERSTATES
    );
    return nextOrderStates;
  }

  async transitionOrderToState(state: string): Promise<OrderFieldsFragment> {
    const { transitionOrderToState } = await this.request<
      TransitionOrderToStateMutation,
      TransitionOrderToStateMutationVariables
    >(TRANSITION_ORDER_TO_STATE, { state });
    this.validateResult(transitionOrderToState);
    this.store.activeOrder = transitionOrderToState as OrderFieldsFragment;
    return transitionOrderToState as OrderFieldsFragment;
  }

  async createMolliePaymentIntent(code: string): Promise<string> {
    const { createMolliePaymentIntent } = await this.request<
      CreateMolliePaymentIntentMutation,
      CreateMolliePaymentIntentMutationVariables
    >(CREATE_MOLLIE_PAYMENT_INTENT, {
      input: { paymentMethodCode: code },
    });
    this.validateResult(createMolliePaymentIntent);
    return (createMolliePaymentIntent as MolliePaymentIntent).url;
  }

  async createCoinbasePaymentIntent(): Promise<string> {
    const { createCoinbasePaymentIntent } =
      await this.request<CreateCoinbasePaymentIntentMutation>(
        CREATE_COINBASE_PAYMENT_INTENT
      );
    this.validateResult(createCoinbasePaymentIntent);
    return createCoinbasePaymentIntent;
  }

  async getOrderByCode(code: string): Promise<OrderFieldsFragment | undefined> {
    const { orderByCode } = await this.request<
      OrderByCodeQuery,
      OrderByCodeQueryVariables
    >(GET_ORDER_BY_CODE, { code });
    return orderByCode;
  }

  async lookupAddress(
    input: DutchPostalCodeInput
  ): Promise<DutchAddressLookupQuery['dutchAddressLookup'] | undefined> {
    const { dutchAddressLookup } = await this.request<
      DutchAddressLookupQuery,
      DutchAddressLookupQueryVariables
    >(GET_DUTCH_ADDRESS, {
      input,
    });
    return dutchAddressLookup;
  }

  async applyCouponCode(couponCode: string): Promise<OrderFieldsFragment> {
    const { applyCouponCode: order } = await this.request<
      ApplyCouponCodeMutation,
      ApplyCouponCodeMutationVariables
    >(APPLY_COUPON_CODE, {
      couponCode,
    });
    this.validateResult(order);
    this.store.activeOrder = order as OrderFieldsFragment;
    return order as OrderFieldsFragment;
  }

  async removeCouponCode(
    couponCode: string
  ): Promise<OrderFieldsFragment | undefined> {
    const { removeCouponCode: order } = await this.request<
      RemoveCouponCodeMutation,
      RemoveCouponCodeMutationVariables
    >(REMOVE_COUPON_CODE, {
      couponCode,
    });
    if (order) {
      this.store.activeOrder = order;
      return order;
    }
  }

  async removeAllOrderLines(): Promise<OrderFieldsFragment> {
    const { removeAllOrderLines: order } =
      await this.request<RemoveAllOrderLinesMutation>(REMOVE_ALL_ORDER_LINES);
    this.validateResult(order);
    this.store.activeOrder = order as OrderFieldsFragment;
    return order as OrderFieldsFragment;
  }

  async getDropOffPoints(
    input: MyparcelDropOffPointInput
  ): Promise<MyparcelDropOffPoint[]> {
    const { myparcelDropOffPoints } = await this.request<
      MyparcelDropOffPointsQuery,
      MyparcelDropOffPointsQueryVariables
    >(GET_DROP_OFF_POINTS, { input });
    return myparcelDropOffPoints;
  }
  async setPickupLocationOnOrder(
    customFields: UpdateOrderCustomFieldsInput
  ): Promise<OrderFieldsFragment> {
    const { setOrderCustomFields: order } = await this.request<
      SetOrderCustomFieldsMutation,
      SetOrderCustomFieldsMutationVariables
    >(SET_PICKUP_LOCATION_FOR_ORDER, { customFields });
    this.validateResult(order);
    this.store.activeOrder = order as OrderFieldsFragment;
    return order as OrderFieldsFragment;
  }

  async unsetPickupLocation(): Promise<OrderFieldsFragment> {
    // null is needed, otherwise it cannot be unset
    return this.setPickupLocationOnOrder({
      // @ts-ignore
      pickupLocationNumber: null, // @ts-ignore
      pickupLocationCarrier: null, // @ts-ignore
      pickupLocationName: null, // @ts-ignore
      pickupLocationStreet: null, // @ts-ignore
      pickupLocationHouseNumber: null, // @ts-ignore
      pickupLocationZipcode: null, // @ts-ignore
      pickupLocationCity: null, // @ts-ignore
      pickupLocationCountry: null, // @ts-ignore
    });
  }

  validateResult(result: any): void {
    if (result && result.errorCode) {
      if (
        result.errorCode === 'ORDER_MODIFICATION_ERROR' ||
        result.errorCode === 'ORDER_PAYMENT_STATE_ERROR'
      ) {
        window.localStorage.removeItem(this.tokenName); // These are unrecoverable states, so remove activeOrder
      }
      throw Error(
        `${this.store.activeOrder?.code} - ${result.errorCode} - ${result.message}`
      );
    }
  }

  async request<T = void, I = void>(
    document: string,
    variables?: I
  ): Promise<T> {
    let token = window.localStorage.getItem(this.tokenName);
    if (token) {
      this.client.setHeader('Authorization', `Bearer ${token}`);
    }
    const { data, headers } = await this.client.rawRequest(document, variables);
    token = headers.get(this.tokenName);
    if (token) {
      window.localStorage.setItem(this.tokenName, token);
    }
    return data;
  }
}
