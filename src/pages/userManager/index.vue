<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header">用户管理</div>
      <el-table :data="userList" stripe border>
        <el-table-column label="用户ID" align="center">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="用户名" align="center">
          <template slot-scope="scope">
            <span>用户{{ scope.$index + 1 }}号</span>
          </template>
        </el-table-column>
        <el-table-column prop="role" label="用户角色" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button round icon="el-icon-search" size="mini">查看</el-button>
            <el-button
              round
              icon="el-icon-edit"
              @click="editHandler(scope.row, scope.$index)"
              type="primary"
              size="mini"
              >编辑</el-button
            >
            <el-button round icon="el-icon-delete" type="danger" size="mini"
              >删除</el-button
            >
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
        { role: "管理员" },
        { role: "普通用户" },
        { role: "高级用户" },
        { role: "管理员" },
        { role: "普通用户" },
        { role: "高级用户" },
        { role: "管理员" },
        { role: "普通用户" },
        { role: "高级用户" },
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