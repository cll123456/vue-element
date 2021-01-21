<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Layout 布局</router-link> |
      <router-link to="/about">Container 布局容器</router-link> |
      <router-link to="/icon">Icon 图标</router-link> |
      <router-link to="/button">Button 按钮</router-link> |
      <router-link to="/link">Link 按钮</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
