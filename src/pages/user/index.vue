<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人中心</span>
      </div>
      <el-form label-width="100px">
        <el-form-item label="用户名">admin</el-form-item>
        <el-form-item label="昵称">超级管理员</el-form-item>
        <el-form-item label="角色">超级管理员</el-form-item>
        <el-form-item label="">
          <el-button type="danger" size="small" @click="dialogTableVisible = true">修改密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-dialog title="修改密码" :visible.sync="dialogTableVisible" width="30%">
      <el-form size="small" label-position="left">
        <el-form-item label="旧密码">
          <el-input v-model="oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="newPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="conPwd"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogTableVisible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialogTableVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogTableVisible: false,
      oldPwd: '',
      newPwd: '',
      conPwd: ''
    };
  },
};
</script>

<style scoped lang="scss">
/deep/ .el-form-item {
  margin-bottom: 5px;
}
</style>