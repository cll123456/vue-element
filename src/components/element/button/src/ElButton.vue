<template>
  <button
    :autofocus="autofocus"
    :type="nativeType"
    @click="e => $emit('click',e)"
    :class="['el-button',
    type ? `el-button--${type}` : '',
    size ? `el-button--${size}` : '',
    {
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled
    }
    ]">
    <i :class="icon" v-if="icon"></i>
    <i class="el-icon-loading" v-if="loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ElButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val)
    },
    // 是否为朴素按钮
    plain: Boolean,
    // 圆角按钮
    round: Boolean,
    // s是否为圆形按钮
    circle: Boolean,
    // 按钮的图标
    icon: String,
    // 是否禁用
    disabled: Boolean,
    // 是否加载中
    loading: Boolean,
    // 按钮的大小
    size: {
      type: String,
      default: '',
      validator: (val) => ['', 'medium', 'small', 'mini'].includes(val)
    },
    // 是否自动聚焦
    autofocus: Boolean,
    // 按钮类型
    nativeType: {
      type: String,
      default: 'button',
      validator: val => ['button', 'reset', 'submit'].includes(val)
    }
  }
}
</script>

<style scoped>

</style>
