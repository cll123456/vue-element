import Row from './row/src/Row.js';
import Col from './col/src/Col.js';
import Main from '@element/main/src/Main';
import Container from '@element/container/src/Container';
import Footer from '@element/footer/src/Footer';
import Header from '@element/header/src/Header';
import Aside from '@element/aside/src/Aside';
import Icon from '@element/icon/src/Icon';
import ElButton from '@element/button/src/ElButton';
import ElButtonGroup from '@element/button/src/ElButtonGroup';
import ElLink from '@element/link/src/ElLink';

const components = [Row, Col, Main, Container, Footer, Header, Header, Aside, Icon, ElButton, ElButtonGroup, ElLink];
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
}
// 这种导出是用于main.js 只要导入element 然后使用 Vue.use(element) 就可以在全局使用了
export default {
  install,
  Row,
  Col,
  Main,
  Container,
  Footer,
  Header,
  Aside,
  Icon,
  ElButton,
  ElButtonGroup,
  ElLink
};
// 这种到处是用于main.js 单个导入 如 { Row } 然后使用 Vue.use(Row), 即可实现局部导入组件
export { Row, Col, Main, Container, Footer, Header, Aside, Icon, ElButton, ElButtonGroup, ElLink }
