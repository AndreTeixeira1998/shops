import 'buefy/dist/buefy.css';
import Buefy from 'buefy';
import Layout from '~/layouts/Default.vue';
import {
  formatEuro,
  preconnectLinks,
  setLabelFunction,
  setStore,
} from 'pinelab-storefront';
import '@fontsource/roboto';
import '@fontsource/titillium-web';
import '~/theme.scss';
import QuantityInput from 'pinelab-storefront/lib/components/QuantityInput';
import PopupImage from 'pinelab-storefront/lib/components/PopupImage';
import VueGtag from 'vue-gtag';

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
    Vue.use(
      VueGtag,
      {
        config: {
          id: 'G-D68BN3NT9X',
          params: {
            anonymize_ip: true,
          },
        },
        bootstrap: false,
      },
      router
    );
  }
  Vue.use(Buefy);
  Vue.component('QuantityInput', QuantityInput);
  Vue.component('Layout', Layout);
  Vue.component('PopupImage', PopupImage);
}
