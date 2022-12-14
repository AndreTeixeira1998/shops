const {
  VendureServer,
  SearchUtil,
  deduplicate,
  createLabelFunction,
} = require('pinelab-storefront');
const { GraphQLClient } = require('graphql-request');
const { mapToMinimalCollection } = require('./util');
const { GET_CONTENT } = require('./content.queries');

module.exports = async function (api) {
  const getlabel = createLabelFunction([
    require('./labels/nl.json'),
    require('./labels/en.json'),
  ]);

  api.createPages(async ({ createPage }) => {
    const vendureNL = new VendureServer(
      `${process.env.GRIDSOME_VENDURE_API}?languageCode=nl`,
      process.env.GRIDSOME_VENDURE_TOKEN
    );
    const vendureEN = new VendureServer(
      `${process.env.GRIDSOME_VENDURE_API}?languageCode=en`,
      process.env.GRIDSOME_VENDURE_TOKEN
    );
    const directus = new GraphQLClient(
      `${process.env.GRIDSOME_DIRECTUS_HOST}/graphql`
    );

    let {
      products: productsNL,
      collections: collectionsNL,
      productsPerCollection: productsPerCollectionNL,
      availableCountries,
    } = await vendureNL.getShopData();

    let {
      products: productsEN,
      collections: collectionsEN,
      productsPerCollection: productsPerCollectionEN,
    } = await vendureEN.getShopData();

    const {
      wkw_home: home,
      wkw_algemeen: common,
      wkw_paginas: pages,
      wkw_blogs: blogs,
    } = await directus.request(GET_CONTENT);

    const pages_nl = pages.filter((p) => p.language === 'nl');
    const pages_en = pages.filter((p) => p.language === 'en');

    const blogs_nl = blogs.filter((b) => b.language === 'nl');
    const blogs_en = blogs.filter((b) => b.language === 'en');

    const languages = [
      {
        lang: 'nl',
        products: productsNL,
        collections: collectionsNL,
        productsPerCollection: productsPerCollectionNL,
        pages: pages_nl,
        blogs: blogs_nl,
      },
      {
        lang: 'en',
        products: productsEN,
        collections: collectionsEN,
        productsPerCollection: productsPerCollectionEN,
        pages: pages_en,
        blogs: blogs_en,
      },
    ];

    // Create pages for each language
    for (let {
      products,
      collections: allCollections,
      productsPerCollection,
      lang,
      pages,
      blogs,
    } of languages) {
      const slugPrefix = getlabel('urls.slug-prefix', lang);
      const categoryPrefix = getlabel('urls.category-prefix', lang);
      const productPrefix = getlabel('urls.product-prefix', lang);

      // Set absolute path for product.url and collection.url: product.url = '/product/lavameel/'
      allCollections = allCollections.map((colllection) => ({
        ...colllection,
        url: `${slugPrefix}/${categoryPrefix}/${colllection.slug}/`,
      }));
      products = products.map((product) => ({
        ...product,
        url: `${slugPrefix}/${productPrefix}/${product.slug}/`,
      }));
      productsPerCollection = productsPerCollection.map((collectionMap) => {
        collectionMap.products = collectionMap.products.map((product) => ({
          ...product,
          url: `${slugPrefix}/${productPrefix}/${product.slug}/`,
        }));
        collectionMap.collection = {
          ...collectionMap.collection,
          url: `${slugPrefix}/${categoryPrefix}/${collectionMap.collection.slug}/`,
        };
        return collectionMap;
      });

      const collections = vendureNL.unflatten(allCollections);
      const navbarCollections = collections.map(mapToMinimalCollection);

      // Breadcrumb pages
      const Home = '/';
      const Assortiment = '/assortiment/';
      const Categorie = '/product-categorie/';
      const Product = '/product/';

      const global = {
        navbarCollections,
        lang,
      };

      // -------------------- Home -----------------------------------
      createPage({
        path: '/',
        component: './src/templates/Index.vue',
        context: {
          ...global,
        },
      });

      // -------------------- ProductDetail -----------------------------------
      products.forEach((product) => {
        createPage({
          path: product.url,
          component: './src/templates/ProductDetail.vue',
          context: {
            ...global,
            product,
            breadcrumb: { Home, Assortiment, Categorie, Product },
          },
        });
      });
    }
  });
};
