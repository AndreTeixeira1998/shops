import 'buefy/dist/buefy.css';
import Buefy from 'buefy';
import Layout from '~/layouts/Default.vue';
import '~/theme.scss';
import '@fontsource/roboto-mono';
import QuantityInput from 'pinelab-storefront/lib/components/QuantityInput';
import PopupImage from 'pinelab-storefront/lib/components/PopupImage';
import {
  formatEuro,
  preconnectLinks,
  setLabelFunction,
  setStore,
} from 'pinelab-storefront';

export default function (Vue, { router, head, isClient }) {
  head.link.push(...preconnectLinks);
  setLabelFunction(Vue, require('../labels.json'));
  Vue.filter('euro', formatEuro);
  if (isClient) {
    setStore(
      Vue,
      process.env.GRIDSOME_VENDURE_API,
      process.env.GRIDSOME_VENDURE_TOKEN
    );
  }
  Vue.use(Buefy);
  Vue.component('QuantityInput', QuantityInput);
  Vue.component('Layout', Layout);
  Vue.component('PopupImage', PopupImage);
}
