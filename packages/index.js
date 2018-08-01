import Loading from './loading';
import Scroll from './scroll';
const pkg = require('../package.json');
const components = [Loading, Scroll];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
    Vue.use(Component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, Loading, Scroll };

const funtUi = {
  version: pkg.version,
  install
};
export default funtUi;
