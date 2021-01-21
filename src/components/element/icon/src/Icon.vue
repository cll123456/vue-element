<template>
  <i :class="['el-icon', `el-icon-${name}`]"></i>
</template>

<script>
export default {
  name: 'ElIcon',
  props: {
    // 图标的名称
    name: String
  }
}
</script>

<style scoped>

</style>
