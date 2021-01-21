export default {
  name: 'ElRow',
  props: {
    // 每一行中的间距
    gutter: {
      type: Number,
      default: 0
    },
    // 用于flex布局的属性
    type: String,
    // 用于控制flex布局的横轴方向的属性
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val)
    },
    // 用于控制交叉轴方向的属性
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val)
    },
    // 用于渲染标签的形式
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    /**
     * 格式化gutter带来的左右两边距离的问题
     */
    style () {
      const style = {};
      if (this.gutter) {
        style.marginLeft = -(this.gutter / 2) + 'px';
        style.marginRight = style.marginLeft;
      }
      return style;
    }
  },
  data () {
    return {}
  },
  render (createElement) {
    return createElement(this.tag, {
      style: this.style,
      class: [this.type === 'flex' ? 'el-row--flex' : '',
        this.type === 'flex' ? `is-justify-${this.justify}` : '',
        'el-row',
        this.type === 'flex' ? `is-align-${this.align}` : '']
    }, this.$slots.default);
  }
}
