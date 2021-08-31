import 'buefy/dist/buefy.css';
import {
  Button,
  Checkbox,
  Dropdown,
  Field,
  Icon,
  Image,
  Input,
  Loading,
  Menu,
  Modal,
  Navbar,
  Numberinput,
  Radio,
  Select,
  Snackbar,
  Steps,
  Table,
  Tooltip
} from 'buefy';
import Layout from '~/layouts/Default.vue';
import { configureVue } from 'pinelab-storefront-client';
import '~/theme.scss';
import '@fontsource/work-sans';
import QuantityInput from 'pinelab-storefront-client/lib/buefy-components/QuantityInput';

export default function(Vue, { router, head, isClient }) {
  if (isClient && process.env.GRIDSOME_ENABLE_MOBILE_CONSOLE) {
    require('outfront').default();
    console.log('OutfrontJS mobile logging enabled');
  }
  [
    Button,
    Checkbox,
    Dropdown,
    Field,
    Icon,
    Image,
    Input,
    Loading,
    Menu,
    Modal,
    Navbar,
    Numberinput,
    Radio,
    Select,
    Snackbar,
    Steps,
    Table,
    Tooltip
  ].forEach((component) => Vue.use(component));
  Vue.component('QuantityInput', QuantityInput);
  Vue.component('Layout', Layout);
  configureVue(Vue, { router, head, isClient });

  // Directus assets, use CMS host for local, otherwise go through netlify
  const assetHost = process.env.NODE_ENV === 'production' ? '' : process.env.GRIDSOME_DIRECTUS_HOST;
  Vue.mixin({
    methods: {
      getDefaultImage: (id) => `${assetHost}/assets/${id}?key=default`,
      getSquareImage: (id) => `${assetHost}/assets/${id}?key=default`
    }
  });
}
