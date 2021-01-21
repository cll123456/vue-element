export default {
  name: 'ElCol',
  props: {
    /**
       * 栅格占据的列数
       */
    span: {
      type: Number,
      default: 24
    },
    /**
       * 分栏偏移
       */
    offset: {
      type: Number,
      default: 0
    },
    /**
       * 向右移动的栅格数目
       */
    push: {
      type: Number,
      default: 0
    },
    /**
       * 向左移动的栅格数
       */
    pull: {
      type: Number,
      default: 0
    },
    /**
       * 响应式布局的栅格系统
       * <768px 响应式栅格数或者栅格属性对象
       */
    xs: [Number, Object],
    /**
       * 响应式布局的栅格系统
       * ≥768px 响应式栅格数或者栅格属性对象
       */
    sm: [Number, Object],
    /**
       * 响应式布局的栅格系统
       * ≥992px 响应式栅格数或者栅格属性对象
       */
    md: [Number, Object],
    /**
       * 响应式布局的栅格系统
       * ≥1200px 响应式栅格数或者栅格属性对象
       */
    lg: [Number, Object],
    /**
       * 响应式布局的栅格系统
       * ≥1920px 响应式栅格数或者栅格属性对象
       */
    xl: [Number, Object],
    /**
       * 渲染标签的形式
       */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    /**
       * 获取父级一定是el-row,如果不是el-row，那么找到上一级的最接近el-col的el-row
       */
    gutter () {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    },
    /**
       * 格式化gutter的样式， 左右各占gutter的一半距离
       */
    style () {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = this.gutter / 2 + 'px';
        style.paddingRight = style.paddingLeft;
      }
      return style;
    },
    /**
       * 格式化left权重大于right权重的样式
       */
    classList () {
      const props = ['el-col'];
      ['span', 'offset', 'push', 'pull'].forEach(prop => {
        if (this[prop]) {
          props.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`)
        }
      });
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        if (typeof this[size] === 'number' && this[size]) {
          props.push(size === 'span' ? `el-col-${this[size]}` : `el-col-${size}-${this[size]}`)
        } else if (typeof this[size] === 'object') {
          for (const key in this[size]) {
            props.push(`el-col-${key}-${this[size][key]}`)
          }
        }
      });
      return props;
    }
  },
  data () {
    return {}
  },
  render (createElement) {
    return createElement(this.tag, {
      class: this.classList,
      style: this.style
    }, this.$slots.default)
  }
}
