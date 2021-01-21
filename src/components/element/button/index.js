import ElButton from '@element/button/src/ElButton';
import ElButtonGroup from '@element/button/src/ElButtonGroup';

const buttonArr = [
  ElButton,
  ElButtonGroup
]
buttonArr.forEach(item => {
  ElButton.install = function (vue) {
    vue.component(item.name, item);
  }
})

export default {
  ElButton,
  ElButtonGroup
};
