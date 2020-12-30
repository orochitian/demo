<template>
  <div class="container">
    <!-- 数据统计卡片 -->
    <el-row :gutter="20">
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>产量</span>
            <el-tag style="float: right" size="small">当月</el-tag>
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
            <el-tag style="float: right" size="small">当月</el-tag>
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
            <el-tag style="float: right" type="warning" size="small"
              >当月</el-tag
            >
          </div>
          <div class="body">
            <div class="el-icon-warning img" style="color: #e6a23c"></div>
            <div class="count">723845</div>
            <div class="unit">吨</div>
          </div>
        </el-card>
      </el-col>
      <el-col :md="6">
        <el-card class="box-card">
          <div slot="header">
            <span>短信</span>
            <el-tag style="float: right" type="danger" size="small"
              >报警</el-tag
            >
          </div>
          <div class="body">
            <div class="el-icon-message img" style="color: #f56c6c"></div>
            <div class="count">723845</div>
            <div class="unit" style="color: #f56c6c">吨</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- 最新生产数据 -->
    <div class="table-title">最新生产数据</div>
    <el-table
      :data="tableData"
      border
      cell-class-name="cell-center"
      header-cell-class-name="cell-center"
    >
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="sbzt" label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sbzt === '4' ? '' : 'danger'">{{
            scope.row.sbzt | statusFilter
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="endDate" label="最后出料时间" width="200">
      </el-table-column>
      <el-table-column prop="sbmc" label="设备名称"> </el-table-column>
      <el-table-column prop="sblx" label="设备类型" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.sblx === '3' ? 'success' : 'danger'">{{
            scope.row.sblx | typeFilter
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="ssbd" label="项目部"> </el-table-column>
      <el-table-column prop="zps" label="总盘数"> </el-table-column>
      <el-table-column prop="ccps" label="超差盘数"> </el-table-column>
      <el-table-column prop="pzz" label="总产量(吨)"> </el-table-column>
    </el-table>
    <!-- 周数据 -->
    <el-tabs type="border-card" class="week-tab">
      <el-tab-pane label="攀西高速">
        <el-row :gutter="40">
          <el-col :md="12">
            <div ref="chart1" class="charts"></div>
          </el-col>
          <el-col :md="12">
            <el-table
              :data="weekTable2"
              border
              cell-class-name="cell-center"
              header-cell-class-name="cell-center"
            >
              <el-table-column type="index" width="50" label="序号"> </el-table-column>
              <el-table-column prop="scrq" label="日期"> </el-table-column>
              <el-table-column prop="zcl" label="产量(吨)"> </el-table-column>
              <el-table-column prop="zps" label="出料盘数(盘)"> </el-table-column>
              <el-table-column prop="zcc" label="超差盘数(盘)"> </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="资潼高速">
        <el-row :gutter="40">
          <el-col :md="12">
            <div ref="chart2" class="charts"></div>
          </el-col>
          <el-col :md="12">
            <el-table
              :data="weekTable1"
              border
              cell-class-name="cell-center"
              header-cell-class-name="cell-center"
            >
              <el-table-column type="index" width="50" label="序号"> </el-table-column>
              <el-table-column prop="scrq" label="日期"> </el-table-column>
              <el-table-column prop="zcl" label="产量(吨)"> </el-table-column>
              <el-table-column prop="zps" label="出料盘数(盘)"> </el-table-column>
              <el-table-column prop="zcc" label="超差盘数(盘)"> </el-table-column>
            </el-table>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          sbbh: "e06b6ebfee41449c94703872225e0479",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼7标",
          sbmc: "资潼7标2号沥青站",
          sblx: "1",
          sbzt: "4",
          lastHeartTime: 1609238451000,
          endDate: "2020-12-28 11:20:52",
          zps: "80860",
          pzz: "232690.15",
          ccps: "11974",
        },
        {
          sbbh: "b63c81bdf65347439eca7b2f4bbd0bfa",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼7标",
          sbmc: "资潼7标3号水稳站",
          sblx: "3",
          sbzt: "4",
          lastHeartTime: 1609238450000,
          endDate: "2020-12-13 18:56:40",
          zps: "5998",
          pzz: "401755351.35",
          ccps: "845",
        },
        {
          sbbh: "7d4312ec2be04d8da6ec60907c4e08a6",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼1标",
          sbmc: "资潼1标1号水稳站",
          sblx: "3",
          sbzt: "2",
          lastHeartTime: 1608974781000,
          endDate: "2020-12-26 09:24:49",
          zps: "15273",
          pzz: "758301936.41",
          ccps: "1493",
        },
        {
          sbbh: "a8fc1f14cbe14070b8b15faf206d7311",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼7标",
          sbmc: "资潼7标2号水稳站",
          sblx: "3",
          sbzt: "2",
          lastHeartTime: 1608875706000,
          endDate: "2020-12-24 13:58:43",
          zps: "6162",
          pzz: "321965078.72",
          ccps: "4488",
        },
        {
          sbbh: "673920851e874b9ca882e98edab3d08a",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼7标",
          sbmc: "资潼7标1号沥青站",
          sblx: "1",
          sbzt: "2",
          lastHeartTime: 1608708145000,
          endDate: "2020-12-22 23:00:47",
          zps: "107269",
          pzz: "355133.72",
          ccps: "12297",
        },
        {
          sbbh: "49fe8f169fce4279aae90646cc032ef5",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼1标",
          sbmc: "资潼1标2号水稳站",
          sblx: "3",
          sbzt: "2",
          lastHeartTime: 1608441561000,
          endDate: "2020-12-20 12:57:21",
          zps: "5791",
          pzz: "225379678.98",
          ccps: "4941",
        },
        {
          sbbh: "c989df1772b24b0eac159f350ea421e1",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼4标",
          sbmc: "资潼4标沥青站",
          sblx: "1",
          sbzt: "2",
          lastHeartTime: 1608283221000,
          endDate: "2020-12-14 18:19:11",
          zps: "87928",
          pzz: "510761.04",
          ccps: "36915",
        },
        {
          sbbh: "3a5948e5811c442cbcfb71ac0643eaea",
          ssjtt: "677f90dcb45c43599f0702fd0ed661d4",
          ssglc: "5b878dea9dad46cdb1c37aa6856f9739",
          ssbd: "资潼7标",
          sbmc: "资潼7标1号水稳站",
          sblx: "3",
          sbzt: "2",
          lastHeartTime: 1607414584000,
          endDate: "2020-12-07 16:17:50",
          zps: "5852",
          pzz: "316852259.06",
          ccps: "163",
        },
      ],
      weekTable1: [
        {zcl: 6.6, scrq: "2020-12-28", zcc: 3, zps: 3},
        {zcl: 418.2, scrq: "2020-12-27", zcc: 59, zps: 157},
        {zcl: 348.1, scrq: "2020-12-26", zcc: 42, zps: 92},
        {zcl: 222.5, scrq: "2020-12-25", zcc: 90, zps: 90},
        {zcl: 1130.8, scrq: "2020-12-24", zcc: 458, zps: 474},
        {zcl: 1604.4, scrq: "2020-12-23", zcc: 315, zps: 472},
        {zcl: 1809.2, scrq: "2020-12-22", zcc: 503, zps: 542}
      ],
      weekTable2: [
        {zcl: 813.2, scrq: "2019-11-25", zcc: 118, zps: 201},
        {zcl: 22.1, scrq: "2019-11-07", zcc: 1, zps: 7},
        {zcl: 102.8, scrq: "2019-11-06", zcc: 5, zps: 34},
        {zcl: 161.1, scrq: "2019-11-05", zcc: 8, zps: 54},
        {zcl: 157, scrq: "2019-11-04", zcc: 10, zps: 54},
        {zcl: 272.2, scrq: "2019-11-03", zcc: 7, zps: 95},
        {zcl: 271.2, scrq: "2019-11-02", zcc: 1, zps: 79}
      ]
    };
  },
  filters: {
    statusFilter: (val) => (val === "4" ? "在线未出料" : "下线"),
    typeFilter: (val) => (val === "3" ? "沥青" : "水稳"),
  },
  methods: {},
  mounted() {
    let chart1 = this.$chart.init(this.$refs.chart1);
    let chart2 = this.$chart.init(this.$refs.chart2);
    chart1.setOption({
      title: {
        text: "攀西高速--近7日产量",
        left: "center",
      },
      color: ['#91c7ae'],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        },
      },
      toolbox: {
        right: 60,
        feature: {
          magicType: {
            title: {
              line: '切换为折线图',
              bar: '切换为柱状图'
            },
            type: ['line', 'bar']
          },
          saveAsImage: {
            type: 'png',
            title: '保存图表'
          }
        }
      },
      xAxis: {
        axisLabel: {
          interval: 0,
          rotate: -20,
        },
        data: [
          "2020-12-28",
          "2020-12-27",
          "2020-12-26",
          "2020-12-25",
          "2020-12-24",
          "2020-12-23",
          "2020-12-22",
        ],
      },
      yAxis: {
        name: "单位（吨）",
      },
      series: [
        {
          name: "产量（吨）",
          type: "bar",
          data: [813.2, 22.1, 102.8, 161.1, 157, 272.2, 271.2]
        },
      ],
    });
    chart2.setOption({
      title: {
        text: "资潼高速--近7日产量",
        left: "center",
      },
      color: ['#ca8622'],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        },
      },
      toolbox: {
        right: 60,
        feature: {
          magicType: {
            title: {
              line: '切换为折线图',
              bar: '切换为柱状图'
            },
            type: ['line', 'bar']
          },
          saveAsImage: {
            type: 'png',
            title: '保存图表'
          }
        }
      },
      xAxis: {
        axisLabel: {
          interval: 0,
          rotate: -20,
        },
        data: [
          "2020-12-28",
          "2020-12-27",
          "2020-12-26",
          "2020-12-25",
          "2020-12-24",
          "2020-12-23",
          "2020-12-22",
        ],
      },
      yAxis: {
        name: "单位（吨）",
      },
      series: [
        {
          name: "产量（吨）",
          type: "bar",
          data: [6.6, 418.2, 348.1, 222.5, 1130.8, 1604.4, 1809.2]
        },
      ],
    });

  },
};
</script>

<style scoped lang="scss">
.index {
  color: red;
}
.box-card {
  .body {
    vertical-align: middle;
    .img {
      font-size: 40px;
      color: #1ab394;
      vertical-align: middle;
    }
    .count {
      display: inline-block;
      vertical-align: middle;
      font-size: 30px;
      margin-left: 50px;
      color: #444;
    }
    .unit {
      display: inline-block;
      margin-left: 40px;
      vertical-align: bottom;
      font-weight: bold;
      color: #e6a23c;
    }
  }
}
/deep/ .cell-center {
  text-align: center;
}
.table-title {
  border: 1px solid #ebeef5;
  border-bottom: none;
  margin-top: 30px;
  padding: 10px;
  text-align: center;
}
.week-tab {
  margin-top: 30px;
}
.charts {
  margin-top: 30px;
  width: 600px;
  height: 400px;
}
</style>
