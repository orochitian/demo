<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>产量</span>
            <el-tag style="float: right;" size="small">当月</el-tag>
          </div>
          <div class="body">
            <div class="el-icon-s-data img"></div>
            <div class="count">723845</div>
            <div class="unit">吨</div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>盘数</span>
            <el-tag style="float: right;" size="small">当月</el-tag>
          </div>
          <div class="body">
            <div class="el-icon-pie-chart img"></div>
            <div class="count">723845</div>
            <div class="unit">吨</div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>超差</span>
            <el-tag style="float: right;" type="warning" size="small">当月</el-tag>
          </div>
          <div class="body">
            <div class="el-icon-warning img" style="color: #e6a23c;"></div>
            <div class="count">723845</div>
            <div class="unit">吨</div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>短信</span>
            <el-tag style="float: right;" type="danger" size="small">报警</el-tag>
          </div>
          <div class="body">
            <div class="el-icon-message img" style="color: #f56c6c;"></div>
            <div class="count">723845</div>
            <div class="unit" style="color: #f56c6c;">吨</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    turn() {},
  },
};
</script>

<style scoped lang="scss">
  .index{
    color: red;
  }
  .box-card{
    .body{
      vertical-align: middle;
      .img{
        font-size: 40px;
        color: #1ab394;
        vertical-align: middle;
      }
      .count{
        display: inline-block;
        vertical-align: middle;
        font-size: 30px;
        margin-left: 50px;
        color: #444;
      }
      .unit{
        display: inline-block;
        margin-left: 40px;
        vertical-align: bottom;
        font-weight: bold;
        color: #E6A23C;
      }
    }
  }
</style>