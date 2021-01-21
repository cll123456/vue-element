<template>
  <div :class="['el-container', {'is-vertical': isVertical}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',
  props: {
    // eslint-disable-next-line no-tabs
    // 子元素的排列方向	string	horizontal / vertical
    // 子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
    direction: {
      type: String,
      default: 'horizontal',
      validator: val => ['horizontal', 'vertical'].includes(val)
    }
  },
  computed: {
    isVertical () {
      // 如果子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
      const childs = this.$slots && this.$slots.default;
      const result = childs.some(vNode => {
        const tag = vNode.componentOptions && vNode.componentOptions.tag;
        if (tag === 'el-header' || tag === 'el-footer') {
          return true;
        } else {
          return false
        }
      })
      // 判断当前是是否是垂直的
      if (this.direction === 'vertical') {
        return true;
      }
      return result
    }
  }
}
</script>

<style scoped>

</style>
