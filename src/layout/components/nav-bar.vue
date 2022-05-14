<template>
  <el-container>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link :to="{path: '/'}">首页</router-link></el-menu-item>
      <el-submenu index="2">
        <template slot="title">寻亲专区</template>
        <div class="menu-item-box">
          <el-menu-item index="2-1"><router-link :to="{path: '/familySearch'}">家寻亲人</router-link></el-menu-item>
          <el-menu-item index="2-2"><router-link :to="{path: '/seekFamily'}">亲人寻家</router-link></el-menu-item>
          <el-menu-item index="2-3"><router-link :to="{path: '/seekOther'}">其他寻人</router-link></el-menu-item>
        </div>
      </el-submenu>
      <el-menu-item index="3"><router-link :to="{path: '/missRegister'}">寻亲登记</router-link></el-menu-item>
      <el-submenu index="4">
        <template slot="title">常见问题</template>
        <div class="menu-item-box">
          <el-menu-item index="4-1" class="menu-item"><router-link :to="{path: '/tracingGuide'}">寻亲指南</router-link></el-menu-item>
          <el-menu-item index="4-2"><router-link :to="{path: '/registrationProcess'}">登记流程</router-link></el-menu-item>
          <el-menu-item index="4-3"><router-link :to="{path: '/defensiveCommon'}">防拐常识</router-link></el-menu-item>
        </div>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">关于我们</template>
        <div class="menu-item-box">
          <el-menu-item index="5-1" class="menu-item">留言簿</el-menu-item>
          <el-menu-item index="5-2"><router-link :to="{path: '/cooperativeMedia'}">爱心链接</router-link></el-menu-item>
          <el-menu-item index="5-3"><router-link :to="{path: '/contact'}">联系我们</router-link></el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </el-container>
</template>

<script>

  export default {
    name: 'navBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  };
</script>

<style>
  .left-bar {
    background-color: rgb(238, 241, 246);
    height: 700px;
  }

  .menu-item-box {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
</style>
