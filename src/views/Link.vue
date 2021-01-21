<template>
  <div class="link-div">
    <br>
    <h3>基本样式</h3>
    <el-row>
      <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </el-row>
    <br>
    <h3>禁用样式</h3>
    <el-row>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </el-row>
    <br>
    <h3>下划线 链接</h3>
    <el-row>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </el-row>
    <br>
    <h3>带图标 链接</h3>
    <el-row style="display: flex; justify-content: space-between">
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
      <el-link icon="el-icon-add-location" type="primary">主要链接</el-link>
      <el-link icon="el-icon-asterisk" type="success">成功链接</el-link>
      <el-link type="warning"><i class="el-icon-award el-icon--left"></i>警告链接</el-link>
      <el-link type="danger" icon="el-icon-bible">危险链接</el-link>
      <el-link type="info">信息链接<i class="el-icon-broadcast-tower el-icon--right"></i></el-link>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Link'
}
</script>

<style lang="scss" scoped>
.link-div {
  //text-align: center;
  padding: 10px 50px;

  .el-row {
    margin-bottom: 20px;
  }
}
</style>
