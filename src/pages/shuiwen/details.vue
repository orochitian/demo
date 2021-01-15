<template>
  <div>
    <div class="toolbar">
      <span style="margin-right: 20px">施工数据筛选</span>
      <el-date-picker
        class="date-picker"
        v-model="date"
        type="date"
        placeholder="选择日期"
        size="small"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        :editable="false"
        :picker-options="pickerOptions"
      ></el-date-picker>
      <span class="info-text">本月开工<i>14</i>天，累计开工<i>288</i>天 </span>
      <el-button
        size="small"
        icon="el-icon-document"
        type="primary"
        style="float: right; margin-right: 20px"
        >导出实时数据</el-button
      >
    </div>

    <el-tabs type="border-card" class="tabs">
      <el-tab-pane label="当日小结">
        <el-alert
          :closable="false"
          title="生产总汇："
          type="success"
          :description="
            date +
            '，【资潼1标1号水稳站】抽样采集 3 批次，当日累计产量 96.44 吨'
          "
        >
        </el-alert>
        <el-row style="margin-top: 30px">
          <el-col :md="12">
            <div class="chart" ref="chart"></div>
          </el-col>
          <el-col :md="12">
            <el-table
              :data="list"
              border
              stripe
              cell-class-name="cell-center"
              header-cell-class-name="cell-center"
              :span-method="spanMethod"
            >
              <el-table-column
                type="index"
                width="50"
                label="序号"
              ></el-table-column>
              <el-table-column prop="name" label="名称"> </el-table-column>
              <el-table-column prop="day" label="日消耗(吨)"> </el-table-column>
              <el-table-column
                prop="zt"
                label="总抽样数(条)"
              ></el-table-column>
              <el-table-column
                prop="zc"
                label="总产量(吨)"
              ></el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="动态数据">动态数据</el-tab-pane>
      <el-tab-pane label="曲线分析">曲线分析</el-tab-pane>
      <el-tab-pane label="骨料曲线">骨料曲线</el-tab-pane>
      <el-tab-pane label="水泥曲线">水泥曲线</el-tab-pane>
      <el-tab-pane label="不合格数据">不合格数据</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: "2020-12-26",
      allowDate: [
        { time: "2020-12-26" },
        { time: "2020-12-25" },
        { time: "2020-12-24" },
        { time: "2020-12-23" },
        { time: "2020-12-20" },
        { time: "2020-12-16" },
        { time: "2020-12-11" },
        { time: "2020-12-7" },
        { time: "2020-12-6" },
        { time: "2020-12-5" },
        { time: "2020-12-4" },
        { time: "2020-12-3" },
        { time: "2020-12-2" },
        { time: "2020-12-1" },
        { time: "2020-11-30" },
        { time: "2020-11-29" },
        { time: "2020-11-28" },
        { time: "2020-11-27" },
        { time: "2020-11-23" },
        { time: "2020-11-22" },
        { time: "2020-11-21" },
        { time: "2020-11-20" },
        { time: "2020-11-19" },
        { time: "2020-11-18" },
        { time: "2020-11-17" },
        { time: "2020-11-16" },
        { time: "2020-11-15" },
        { time: "2020-11-14" },
        { time: "2020-11-13" },
        { time: "2020-11-12" },
        { time: "2020-11-11" },
        { time: "2020-11-10" },
        { time: "2020-11-8" },
        { time: "2020-11-6" },
        { time: "2020-11-4" },
        { time: "2020-11-3" },
        { time: "2020-11-2" },
        { time: "2020-11-1" },
        { time: "2020-10-31" },
        { time: "2020-10-30" },
        { time: "2020-10-29" },
        { time: "2020-10-28" },
        { time: "2020-10-27" },
        { time: "2020-10-26" },
        { time: "2020-10-25" },
        { time: "2020-10-24" },
        { time: "2020-10-18" },
        { time: "2020-10-17" },
        { time: "2020-10-16" },
        { time: "2020-10-9" },
      ],
      list: [
        { name: "骨料1", day: "26.1", zt: 10, zc: 240 },
        { name: "骨料1", day: "26.1" },
        { name: "骨料1", day: "26.1" },
        { name: "骨料1", day: "26.1" },
        { name: "骨料1", day: "26.1" },
        { name: "骨料1", day: "26.1" },
      ],
      pickerOptions: {
        disabledDate: (date) => {
          let dateStr = `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()}`;
          return !this.allowDate.some((item) => item.time === dateStr);
        },
      },
    };
  },
  methods: {
    spanMethod({ columnIndex }) {
      if (columnIndex === 3 || columnIndex === 4) {
        return {
          rowspan: 6,
          colspan: 1,
        };
      }
    },
  },
  mounted() {
    let chart = this.$chart.init(this.$refs.chart);
    chart.setOption({
      title: {
        text: "日消耗（吨）",
        left: "center",
      },
      color: ["#409EFF"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        data: ["骨料1", "骨料2", "骨料3", "骨料4", "骨料5", "水泥", "水"],
      },
      yAxis: {},
      series: [
        {
          name: "日消耗（吨）",
          type: "bar",
          data: [8, 15, 28, 10, 22, 31, 24],
        },
      ],
    });
  },
};
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
.date-picker .el-date-table td.available > div > span {
  background-color: #67c23a !important;
  color: #fff;
  border-radius: 50%;
}
.date-picker .el-date-table td.available.current > div > span {
  background-color: #409eff !important;
  font-weight: bold;
}
.toolbar {
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.chart {
  width: 600px;
  height: 400px;
}
</style>