import Loading from './loading';
import Scroll from './scroll';
const pkg = require('../package.json');
const components = [Loading, Scroll];

const install = Vue => {
  components.forEach(component => {
    // Vue.use(Component);
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export { install, Loading, Scroll };

const fsUi = {
  install,
  version: pkg.version
};
export default fsUi;
