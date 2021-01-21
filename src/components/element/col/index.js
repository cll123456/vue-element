// 用于单个引入单个组件
import Col from './src/Col.js'
Col.install = function (Vue) {
  Vue.component(Col.name, Col);
}
export default Col;
