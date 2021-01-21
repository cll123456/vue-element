import ElLink from '@element/link/src/ElLink';

ElLink.install = function (Vue) {
  Vue.component(ElLink.name, ElLink);
}
export default ElLink;
