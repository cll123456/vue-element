<template>
  <div class="el-header" :style="{height: height}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElHeader',
  props: {
    // 高度
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style scoped>

</style>
