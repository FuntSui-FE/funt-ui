import Loading from './loading';
import Scroll from './scroll';
import Lmarquee from './lmarquee';
import Marquee from './marquee';
import MarqueeItem from './marqueeItem';
const version = require('../package.json').version;
const components = [Loading, Scroll, Lmarquee, Marquee, MarqueeItem];
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { version, install, Loading, Scroll, Lmarquee, Marquee, MarqueeItem };
const funtUi = {
  version,
  install
};
export default funtUi;
