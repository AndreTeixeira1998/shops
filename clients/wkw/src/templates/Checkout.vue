<template>
  <DefaultLayout>
    <template #content>
      <CheckoutSteps
        class="checkout-steps"
        :vendure="$vendure"
        :emitter="$emitter"
        :store="$store"
        :available-countries="$context.availableCountries"
      >
        <template #orderSummaryFooter>
          <CartNotification />
          <h5>{{ $l('order-summary.payments') }}</h5>
          <img src="/img/payments.png" :alt="$l('order-summary.payments')" />
        </template>
      </CheckoutSteps>
    </template>
  </DefaultLayout>
</template>
<script>
import CheckoutSteps from 'pinelab-storefront/lib/components/CheckoutSteps';
import CartNotification from '../components/CartNotification';

export default {
  components: {
    CheckoutSteps,
    CartNotification,
  },
};
</script>
<style>
.scrollable-product-overview {
  max-height: 300px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
