// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Here we load different envs for Wholesale or Retail site
process.env.GRIDSOME_VENDURE_API = 'https://api.pinelab.studio/shop-api';
process.env.GRIDSOME_DIRECTUS_HOST = 'https://content.pinelab.studio';
if (process.env.WHOLESALE) {
  // Load wholesale config
  process.env.GRIDSOME_VENDURE_TOKEN = 'cantastic';
  process.env.GRIDSOME_HOST = 'https://cantastic.nl';
  process.env.GRIDSOME_ALLOW_LOGIN = true;
} else {
  // Otherwise load default config
  process.env.GRIDSOME_VENDURE_TOKEN = 'cantastic';
  process.env.GRIDSOME_HOST = 'https://cantastic.nl';
}

if (process.env.VENDURE_ENV === 'local') {
  process.env.GRIDSOME_VENDURE_API = 'http://localhost:3000/shop-api';
}

module.exports = {
  siteName: 'Cantastic.nl',
  siteUrl: process.env.GRIDSOME_HOST,
  configureWebpack: {
    resolve: {
      symlinks: false, //npm link
    },
  },
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],
};
