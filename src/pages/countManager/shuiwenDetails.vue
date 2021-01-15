<template>
  <div class="container">
    <div class="toolbar">
      <span style="margin-right: 20px">统计日期范围</span>
      <el-date-picker
        v-model="dateRange"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="small"
      >
      </el-date-picker>
      <el-button type="primary" size="small" style="margin: 0 15px;">查询</el-button>
      <el-button size="small" icon="el-icon-document" type="primary" style="float: right; margin-right: 20px"
        >导出实时数据</el-button
      >
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateRange: '',
      list: [
        { name: '骨料1', day: '26.1', zt: 10, zc: 240 },
        { name: '骨料1', day: '26.1' },
        { name: '骨料1', day: '26.1' },
        { name: '骨料1', day: '26.1' },
        { name: '骨料1', day: '26.1' },
        { name: '骨料1', day: '26.1' },
      ]
    }
  },
  methods: {
    spanMethod({ columnIndex }) {
      if (columnIndex === 3 || columnIndex === 4) {
        return {
          rowspan: 6,
          colspan: 1,
        }
      }
    },
  },
  mounted() {
    // let chart = this.$chart.init(this.$refs.chart)
    
  },
}
</script>

<style lang="scss" scoped>
.info-text {
  margin-left: 30px;
  i {
    font-style: normal;
    color: #409eff;
    margin: 0 4px;
  }
}
.tabs {
  margin-top: 20px;
}
</style>

<style lang="scss">
.toolbar {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.chart {
  width: 600px;
  height: 400px;
}
</style>
