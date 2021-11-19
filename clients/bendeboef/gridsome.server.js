const { GridsomeService } = require('pinelab-storefront-client');
const { GET_CONTENT } = require('./content.queries');

module.exports = async function(api) {
  api.createPages(async ({ createPage, graphql }) => {
    const gridsome = new GridsomeService(graphql);
    const [shopData, content] = await Promise.all([
      gridsome.getShopData(),
      graphql(GET_CONTENT)
    ]);
    const { products, collections, productsPerCollection, availableCountries } = shopData;
    const {
      data: {
        Directus: {
          bdb_algemeen: global,
          bdb_home: home,
          bdb_news: news,
          bdb_bio: bio,
          bdb_tattoos: tattoos
        }
      }
    } = content;

    // Static pages should never have soldOut products, this is updated when mounted()
    products.forEach((p) => (p.soldOut = false));

    products.reverse();

    const featuredProducts = products.filter((p) =>
      p.facetValues.find((value) => value.code === 'featured')
    );

    // Breadcrumb pages
    const Home = '/';
    const Shop = '/shop/';
    const Cart = '/cart/';
    const Checkout = '/checkout/';
    const Tattoos = '/tattoos/';
    const Bio = '/bio/';
    const Contact = '/contact/';

    // ----------------- Index ---------------------
    createPage({
      path: '/',
      component: './src/templates/Index.vue',
      context: {
        global,
        home,
        news,
        products,
        collections,
        featuredProducts
      }
    });

    // ----------------- Shop ---------------------
    createPage({
      path: '/shop/',
      component: './src/templates/Shop.vue',
      context: {
        global,
        products,
        collections,
        breadcrumb: { Home, Shop }
      }
    });

    // ----------------- Collections ---------------------
    productsPerCollection.forEach(
      ({ products: productsPerCollection, collection }) => {
        createPage({
          path: `/shop/${collection.slug}`,
          component: './src/templates/Shop.vue',
          context: {
            global,
            products: productsPerCollection,
            collection,
            collections,
            breadcrumb: { Home, Shop, [collection.name]: collection.slug }
          }
        });
      }
    );

    // ----------------- ProductDetail ---------------------
    products.forEach((product) => {
      createPage({
        path: `/shop/${product.slug}`,
        component: './src/templates/Product.vue',
        context: {
          global,
          product,
          breadcrumb: { Home, Shop, [product.name]: product.slug }
        }
      });
    });

    // ----------------- Cart ---------------------
    createPage({
      path: '/cart/',
      component: './src/templates/Cart.vue',
      context: {
        global,
        breadcrumb: { Home, Shop, Cart }
      }
    });

    // ----------------- checkout ---------------------
    createPage({
      path: '/checkout/',
      component: './src/templates/Checkout.vue',
      context: {
        global,
        availableCountries
      }
    });

    // ----------------- Order confirmation ------------
    createPage({
      path: '/order/:code',
      component: './src/templates/Order.vue',
      context: { global }
    });

    // ----------------- static pages ---------------------
    createPage({
      path: '/tattoos/',
      component: './src/templates/Tattoos.vue',
      context: {
        global,
        tattoos,
        breadcrumb: { Home, Tattoos }
      }
    });

    createPage({
      path: '/bio/',
      component: './src/templates/Bio.vue',
      context: {
        global,
        bio,
        breadcrumb: { Home, Bio }
      }
    });

    createPage({
      path: '/contact/',
      component: './src/templates/Contact.vue',
      context: {
        global,
        breadcrumb: { Home, Contact }
      }
    });
  });
};
