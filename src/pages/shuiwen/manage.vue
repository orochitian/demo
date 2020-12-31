<template>
  <div class="container">
    <div class="title">设备列表</div>
    <el-table
      :data="deviceList"
      border
      stripe
      cell-class-name="cell-center"
      header-cell-class-name="cell-center"
    >
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="num" label="设备编号"> </el-table-column>
      <el-table-column prop="name" label="设备名称"> </el-table-column>
      <el-table-column prop="status" label="运行状态"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <span>
            <el-button
              type="primary"
              size="small"
              @click="detailHandler(scope.row)"
              >查看设备</el-button
            >
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deviceList: [
        { name: "资潼1标1号水稳站", status: "在运行", num: "13456789" },
        { name: "资潼1标2号水稳站", status: "未运行", num: "54654654" },
        { name: "资潼1标3号水稳站", status: "在运行", num: "01989856" },
        { name: "资潼1标4号水稳站", status: "在运行", num: "78954564" },
        { name: "资潼1标5号水稳站", status: "未运行", num: "13456789" },
        { name: "资潼1标6号水稳站", status: "在运行", num: "56465656" },
        { name: "资潼1标7号水稳站", status: "在运行", num: "56465656" },
      ],
    };
  },
  methods: {
    detailHandler(row) {
      console.log(row);
      this.$router.push({
        path: '/shuiwenDetail',
        query: {
          id: row.num
        }
      })
    },
  },
};
</script>

<style scoped lang="scss">
.title{
  font-weight: bold;
  margin-bottom: 10px;
}
/deep/ .cell-center {
  text-align: center;
}
</style>