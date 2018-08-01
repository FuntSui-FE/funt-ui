import Loading from './loading';
import Scroll from './scroll';
const version = require('../package.json').version;
const components = [Loading, Scroll];
const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
export { version, install, Loading, Scroll };
const funtUi = {
  version,
  install
};
export default funtUi;
