require('dotenv').config();
module.exports = {
  DB_SOCKET_PATH: process.env.K_SERVICE
    ? '/cloudsql/pinelab-shops:europe-west1:shops-prod'
    : undefined,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  PUBLIC_URL: '/',
  DB_CLIENT: 'mysql',
  DB_PORT: 3306,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_EMAIL,
  STORAGE_LOCATIONS: 'google',
  STORAGE_GOOGLE_DRIVER: 'gcs',
  STORAGE_GOOGLE_KEY_FILENAME: 'directus_key.json',
  STORAGE_GOOGLE_BUCKET: 'pinelab-shops-directus',
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,
  ACCESS_TOKEN_TTL: '15m',
  REFRESH_TOKEN_TTL: '7d',
  REFRESH_TOKEN_COOKIE_SECURE: false,
  REFRESH_TOKEN_COOKIE_SAME_SITE: 'lax',
  REFRESH_TOKEN_COOKIE_NAME: 'directus_refresh_token',
  OAUTH_PROVIDERS: '',
  EXTENSIONS_PATH: './extensions',
  EMAIL_FROM: 'no-reply@directus.io',
  EMAIL_TRANSPORT: 'sendmail',
  EMAIL_SENDMAIL_NEW_LINE: 'unix',
  EMAIL_SENDMAIL_PATH: '/usr/sbin/sendmail',
  ASSETS_TRANSFORM_IMAGE_MAX_DIMENSION: '10000',
  GRAPHQL_INTROSPECTION: true,
  CORS_METHODS: 'GET,POST,PATCH,DELETE,OPTIONS',
  CORS_ENABLED: true,
  RATE_LIMITER_POINTS: 5,
};