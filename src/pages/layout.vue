<template>
  <el-container>
    <el-header id="header">
      <span>公路施工质量实时数据监测平台</span>
      <el-dropdown class="drop-down">
        <span class="el-dropdown-link">
          admin <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="$router.push('/user')">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logoutHandler">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container class="content">
      <el-aside width="210px" style="background-color: #545c64">
        <el-menu
          :default-active="currentAcitve"
          :default-openeds="['1', '2', '3', '4', '5']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title"> <i class="el-icon-message"></i>系统管理 </template>
            <el-menu-item index="/userManager">用户管理</el-menu-item>
            <el-menu-item index="/roleManager">角色管理</el-menu-item>
            <el-menu-item index="/systemLog">系统日志</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"> <i class="el-icon-message"></i>设备管理 </template>
            <el-menu-item index="/deviceManager">设备维护</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"> <i class="el-icon-message"></i>动态数据 </template>
            <el-menu-item index="/shuiwen">水稳拌合站</el-menu-item>
            <el-menu-item index="/test">改性沥青站</el-menu-item>
            <el-menu-item index="/test3">沥青拌合站</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"> <i class="el-icon-menu"></i>综合分析 </template>
            <el-menu-item index="/shuiwenCountManager">水稳拌合统计</el-menu-item>
            <el-menu-item index="2-2">改性沥青统计</el-menu-item>
            <el-menu-item index="2-2">沥青拌合统计</el-menu-item>
            <el-menu-item index="2-2">沥青超差统计</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"> <i class="el-icon-menu"></i>监控中心 </template>
            <el-menu-item index="2-1">预警管理</el-menu-item>
            <el-menu-item index="2-2">预警查看</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  computed: {
    currentAcitve() {
      return this.$route.path
    },
  },
  methods: {
    logoutHandler() {
      this.$confirm('是否退出当前登录？', '提示').then(() => {
        window.sessionStorage.setItem('login', '')
        this.$router.push('/login')
      })
    },
  },
}
</script>

<style scoped lang="scss">
#header {
  background-color: #43464b;
  line-height: 60px;
  font-size: 20px;
  color: #eee;
}
.content {
  font-size: 14px;
}
.drop-down {
  float: right;
  margin-right: 20px;
  color: #fff;
}
</style>

<style>
html {
  min-height: 100%;
}
body {
  margin: 0;
}
.el-submenu__title {
  background-color: rgb(60, 60, 70, 0.5) !important;
}
</style>
