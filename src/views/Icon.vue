<template>
  <div class="icon">
    <ul>
      <li v-for="(item) in iconList" :key="item.iconName" class="icon-item">
        <el-icon :name="item.iconName"></el-icon>
        <span class="title">{{ item.iconName }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import iconList from '@/views/ConstIcon';

export default {
  name: 'Icon',
  data: () => ({
    iconList: []
  }),
  created () {
    this.iconList = iconList.sort(this.compare('iconName', '')).map(item => {
      item.id = Date.now() + Math.random().toString(16).substring(2, 9);
      return item;
    })
  },
  methods: {
    compare (propertyName, desc) {
      return function (object1, object2) {
        var value1 = object1[propertyName]
        var value2 = object2[propertyName]
        if (desc === 'desc') {
          if (value2 < value1) {
            return -1
          } else if (value2 > value1) {
            return 1
          } else {
            return 0
          }
        } else {
          if (value2 < value1) {
            return 1
          } else if (value2 > value1) {
            return -1
          } else {
            return 0
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  width: 100%;
  height: 100%;

  ul, li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    list-style: none;
    padding: 0 !important;
    border: 1px solid #eaeefb;
    border-radius: 4px;

    .icon-item {
      width: 120px;
      text-align: center;
      color: #666;
      height: 120px;
      font-size: 13px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      cursor: pointer;

      &:hover, &:hover > i {
        color: #5cb6ff;
      }

      i {
        display: block;
        font-size: 32px;
        margin-bottom: 15px;
        color: #606266;
        transition: color .15s linear;
      }

      .title {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
