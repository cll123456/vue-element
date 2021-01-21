<template>
  <a :href="href"
     :class="['el-link',
      type ? `el-link--${type}` : '',
      {
         'is-underline': underline,
         'is-disabled': disabled
      }
  ]">
    <i :class="icon" v-if="icon"></i>
    <span v-if="$slots.default">
     <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',
  props: {
    // a连接的地址
    href: String,
    // 链接的类型
    type: {
      type: String,
      default: 'default',
      validator: val => ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(val)
    },
    // 是否存在下划线，默认存在，这个是指hover的时候，出现下划线
    underline: {
      type: Boolean,
      default: true
    },
    // 是否禁用
    disabled: Boolean,
    // 图标
    icon: String
  }
}
</script>

<style scoped>

</style>
