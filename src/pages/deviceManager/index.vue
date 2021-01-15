<template>
  <div class="container">
    <el-card header="设备维护">
      <div v-loading="loading">
        <el-tabs v-model="currentTab" :before-leave="tabLeave">
          <el-tab-pane name="1" label="水稳拌合"></el-tab-pane>
          <el-tab-pane name="2" label="改性沥青"></el-tab-pane>
          <el-tab-pane name="3" label="沥青拌合"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData" stripe border>
          <el-table-column prop="name" label="设备名称" align="center"></el-table-column>
          <el-table-column prop="model" label="设备型号" align="center"></el-table-column>
          <el-table-column prop="online" label="是否在线" align="center">
            <template slot-scope="scope">
              <span :class="scope.row.online ? 'on' : 'off'">
                {{ scope.row.online ? '在线' : '离线' }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="number" label="设备编号" align="center"></el-table-column>
          <el-table-column prop="comp" label="所属单位" align="center"></el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="">
              <el-button round icon="el-icon-warning-outline" type="danger" size="mini" @click="openWarnDialog">预警</el-button>
              <el-button round icon="el-icon-edit" type="primary" size="mini">配方</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog title="设备预警" :visible.sync="dialogFormVisible" width="900px">
      <el-form :model="warnForm" size="small" label-width="100px" inline>
        <el-form-item label="预警阈值">
          <el-input type="text"></el-input>
        </el-form-item>
        <div style="position: relative;" v-for="(item, index) in warnList" :key="index">
          <el-form-item label="联系人">
            <el-input type="text" v-model="item.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input type="text" v-model="item.tel"></el-input>
          </el-form-item>
          <el-form-item label="短信通知">
            <el-switch v-model="item.sendMessage"></el-switch>
          </el-form-item>
          <span class="delete-icon el-icon-delete" v-if="warnList.length > 1" @click="deleteWarnList(index)"></span>
        </div>
        <div style="text-align: right; margin-top: 20px;">
          <el-button type="primary" size="mini" @click="appendWarnList" v-if="warnList.length < 5">添加</el-button>
        </div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      loading: false,
      deviceType: '1',
      currentTab: '1',
      tableData: [
        {
          name: '设备1',
          model: '型号1',
          online: 1,
          number: '213073170066',
          comp: 'WTXLM-2标',
        },
        {
          name: '设备2',
          model: '型号2',
          online: 0,
          number: '213073170012',
          comp: 'HGLM-2标',
        },
        {
          name: '设备3',
          model: '型号3',
          online: 1,
          number: '213073001010',
          comp: '国道356线',
        },
      ],
      form: {
        name: '',
      },
      warnForm: {
        sendMessage: false,
        name: '',
        tel: '',
      },
      warnList: [
        {
          sendMessage: false,
          name: '',
          tel: '',
        },
      ],
    }
  },
  methods: {
    addHandler() {
      this.dialogFormVisible = true
    },
    tabLeave() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
    openWarnDialog() {
      this.dialogFormVisible = true
    },
    appendWarnList() {
      this.warnList.push(Object.assign({}, this.warnForm))
    },
    deleteWarnList(index) {
      this.warnList.splice(index, 1)
    },
  },
}
</script>

<style scoped lang="scss">
.on {
  color: #67c23a;
  // font-weight: bold;
}
.off {
  color: #f56c6c;
  // font-weight: bold;
}
.delete-icon {
  float: right;
  margin-top: 6px;
  font-size: 20px;
  cursor: pointer;
  color: #f56c6c;
}
</style>
