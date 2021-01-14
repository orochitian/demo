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
              <el-button round icon="el-icon-warning-outline" type="danger" size="mini">预警</el-button>
              <el-button round icon="el-icon-edit" type="primary" size="mini">配方</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
    <el-dialog title="添加设备" :visible.sync="dialogFormVisible">
      <el-form :model="form" size="small" label-width="80px" inline>
        <el-form-item label="设备名称">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="设备类型">
          <el-select v-model="currentTab" disabled>
            <el-option label="水稳拌合" value="1"></el-option>
            <el-option label="改性沥青" value="2"></el-option>
            <el-option label="沥青拌合" value="3"></el-option>
          </el-select>
        </el-form-item>
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
</style>
