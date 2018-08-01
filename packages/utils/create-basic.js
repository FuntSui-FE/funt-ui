const install = function(Vue) {
  Vue.component(this.name, this);
};
export default function(comp) {
  comp.name = `funt-${comp.name}`;
  comp.install = comp.install || install;
  return comp;
}
