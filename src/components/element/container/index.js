import Container from '@element/container/src/Container';

Container.install = function (vue) {
  vue.component(Container.name, Container);
}

export default Container;
