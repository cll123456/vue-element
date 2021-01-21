// 测试row 组件的单元测试方法
// 导入row组件和shallowmount
// todo 单元测试需要在看视频， 等先学习好element组件后学习todo
import Row from '@/components/element/row';
import { shallowMount } from '@vue/test-utils';

describe('Row.vue', () => {
  // 定义两个变量， 一个获取的是当前row
  let wrapper, rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  })
  // row组件里面有一定有一个类名 为el-row
  it('create', () => {
    expect(rowEle.classList).toContain('el-row');
  });

  // 测试row组件的gutter
  // it('gutter', () => {
  //   wrapper.setProps({ gutter: 20 });
  //   console.log(rowEle.style)
  //   expect(rowEle.style.marginLeft).toBe('-10px');
  //   expect(rowEle.style.marginRight).toBe('-10px');
  // })
  it('type', () => {
    wrapper.setProps({ type: 'flex' });
    expect(rowEle.classList).toContain('el-row--flex')
  })
})
