<template>
  <el-container>
    <el-header id="header">公路施工质量实时数据监测平台</el-header>
    <el-container>
      <el-aside width="210px">
        <el-menu
          default-active="/index"
          :default-openeds="['2', '3']"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="/index">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-message"></i>动态数据</template
            >
            <el-menu-item-group>
              <el-menu-item index="/test1">水稳拌合站</el-menu-item>
              <el-menu-item index="/test2">改性沥青站</el-menu-item>
              <el-menu-item index="/test3">沥青拌合站</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-menu"></i>综合分析</template
            >
            <el-menu-item-group>
              <el-menu-item index="2-1">水稳拌合统计</el-menu-item>
              <el-menu-item index="2-2">改性沥青统计</el-menu-item>
              <el-menu-item index="2-2">沥青拌合统计</el-menu-item>
              <el-menu-item index="2-2">沥青超差统计</el-menu-item>
            </el-menu-item-group>
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
export default {};
</script>

<style scoped>
#header {
  background-color: #43464b;
  line-height: 60px;
  font-size: 20px;
  color: #eee;
}
</style>

<style>
body {
  margin: 0;
}
</style>
