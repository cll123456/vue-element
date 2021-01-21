import Header from '@element/header/src/Header';

Header.install = function (vue) {
  vue.component(Header.name, Header);
}

export default Header;
