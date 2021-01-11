<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header">系统日志</div>
      <el-table :data="userList" stripe border>
        <el-table-column label="索引" align="center" width="100px">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="时间" align="center"></el-table-column>
        <el-table-column prop="desc" label="说明" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template>
            <el-button round icon="el-icon-search" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog title="编辑用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" size="small">
        <el-form-item label="用户名称">
          <span>{{ form.username }}</span>
        </el-form-item>
        <el-form-item label="用户角色">
          <el-select v-model="form.role" placeholder="请选择用户角色">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="高级用户" value="高级用户"></el-option>
            <el-option label="普通用户" value="普通用户"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      userList: [
        {time: '2020-01-10 20:10:50', desc: '日志描述'},
        {time: '2020-01-10 20:10:50', desc: '日志描述'},
        {time: '2020-01-10 20:10:50', desc: '日志描述'},
        {time: '2020-01-10 20:10:50', desc: '日志描述'},
      ],
      form: {},
    };
  },
  methods: {
    editHandler(row, index) {
      this.form = { ...row };
      this.form.username = `用户${index + 1}号`;
      this.dialogFormVisible = true;
    },
  },
};
</script>

<style>
</style>