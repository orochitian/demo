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
    <div class="table-title">最新生产数据</div>
    <el-table :data="tableData" border cell-class-name="cell-center" header-cell-class-name="cell-center">
      <el-table-column type="index" width="50" label="序号"> </el-table-column>
      <el-table-column prop="sbzt" label="状态"> </el-table-column>
      <el-table-column prop="endDate" label="最后出料时间"> </el-table-column>
      <el-table-column prop="sbmc" label="设备名称"> </el-table-column>
      <el-table-column prop="sblx" label="设备类型"> </el-table-column>
      <el-table-column prop="ssbd" label="项目部"> </el-table-column>
      <el-table-column prop="zps" label="总盘数"> </el-table-column>
      <el-table-column prop="ccps" label="超差盘数"> </el-table-column>
      <el-table-column prop="pzz" label="总产量(吨)"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          sbbh: 'e06b6ebfee41449c94703872225e0479',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼7标',
          sbmc: '资潼7标2号沥青站',
          sblx: '1',
          sbzt: '4',
          lastHeartTime: 1609238451000,
          endDate: '2020-12-28 11:20:52',
          zps: '80860',
          pzz: '232690.15',
          ccps: '11974'
        },
        {
          sbbh: 'b63c81bdf65347439eca7b2f4bbd0bfa',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼7标',
          sbmc: '资潼7标3号水稳站',
          sblx: '3',
          sbzt: '4',
          lastHeartTime: 1609238450000,
          endDate: '2020-12-13 18:56:40',
          zps: '5998',
          pzz: '401755351.35',
          ccps: '845'
        },
        {
          sbbh: '7d4312ec2be04d8da6ec60907c4e08a6',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼1标',
          sbmc: '资潼1标1号水稳站',
          sblx: '3',
          sbzt: '2',
          lastHeartTime: 1608974781000,
          endDate: '2020-12-26 09:24:49',
          zps: '15273',
          pzz: '758301936.41',
          ccps: '1493'
        },
        {
          sbbh: 'a8fc1f14cbe14070b8b15faf206d7311',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼7标',
          sbmc: '资潼7标2号水稳站',
          sblx: '3',
          sbzt: '2',
          lastHeartTime: 1608875706000,
          endDate: '2020-12-24 13:58:43',
          zps: '6162',
          pzz: '321965078.72',
          ccps: '4488'
        },
        {
          sbbh: '673920851e874b9ca882e98edab3d08a',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼7标',
          sbmc: '资潼7标1号沥青站',
          sblx: '1',
          sbzt: '2',
          lastHeartTime: 1608708145000,
          endDate: '2020-12-22 23:00:47',
          zps: '107269',
          pzz: '355133.72',
          ccps: '12297'
        },
        {
          sbbh: '49fe8f169fce4279aae90646cc032ef5',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼1标',
          sbmc: '资潼1标2号水稳站',
          sblx: '3',
          sbzt: '2',
          lastHeartTime: 1608441561000,
          endDate: '2020-12-20 12:57:21',
          zps: '5791',
          pzz: '225379678.98',
          ccps: '4941'
        },
        {
          sbbh: 'c989df1772b24b0eac159f350ea421e1',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼4标',
          sbmc: '资潼4标沥青站',
          sblx: '1',
          sbzt: '2',
          lastHeartTime: 1608283221000,
          endDate: '2020-12-14 18:19:11',
          zps: '87928',
          pzz: '510761.04',
          ccps: '36915'
        },
        {
          sbbh: '3a5948e5811c442cbcfb71ac0643eaea',
          ssjtt: '677f90dcb45c43599f0702fd0ed661d4',
          ssglc: '5b878dea9dad46cdb1c37aa6856f9739',
          ssbd: '资潼7标',
          sbmc: '资潼7标1号水稳站',
          sblx: '3',
          sbzt: '2',
          lastHeartTime: 1607414584000,
          endDate: '2020-12-07 16:17:50',
          zps: '5852',
          pzz: '316852259.06',
          ccps: '163'
        },
      ],
    }
  },
  methods: {
    turn() {},
  },
}
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
/deep/ .cell-center{
  text-align: center;
}
.table-title{
  border: 1px solid #EBEEF5;
  border-bottom: none;
  margin-top: 30px;
  padding: 10px;
  text-align: center;
}
</style>
