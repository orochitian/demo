<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header">
        <span>角色管理</span>
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          style="float: right"
          size="small"
          @click="addHandler"
          >添加角色</el-button
        >
      </div>
      <el-table :data="userList" stripe border>
        <el-table-column label="角色ID" align="center">
          <template slot-scope="scope">
            <span>{{ scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="name"
          label="角色名"
          align="center"
        ></el-table-column>
        <el-table-column prop="role" label="角色权限" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
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
    <el-dialog title="编辑角色" :visible.sync="dialogFormVisible">
      <el-form :model="form" size="small" label-width="80px">
        <el-form-item label="角色名称">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="角色权限">
          <el-tree
            class="tree"
            :data="tree"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
          >
          </el-tree>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogFormVisible = false"
          >取 消</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="saveRole"
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
        { name: "管理员" },
        { name: "高级用户" },
        { name: "普通用户" },
      ],
      form: {
        name: ''
      },
      tree: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    saveRole() {
      if(!this.form.name) return
      this.userList.push({name: this.form.name})
      this.dialogFormVisible = false
      this.form.name = ''
    },
    addHandler() {
      this.dialogFormVisible = true;
    },
    editHandler(row, index) {
      this.form = { ...row };
      this.form.username = `用户${index + 1}号`;
      this.dialogFormVisible = true;
    },
  },
};
</script>

<style scoped>
.tree {
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  padding: 6px;
}
</style>