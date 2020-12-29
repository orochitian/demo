<template>
  <div class="container">
    <el-form ref="form" class="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginHandler">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {pattern: /admin/, required: true, message: '用户名错误', trigger: 'change'}
        ],
        password: [
          {pattern: /admin/, required: true, message: '密码错误', trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    loginHandler() {
      this.$refs.form.validate(valid => {
        if(valid) {
          window.sessionStorage.setItem('login', true)
          this.$router.push('/')
        }
      })
    }
  }
};
</script>

<style scoped>
  .container{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .form{
    width: 400px;
    height: 150px;
    padding: 50px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 4px 2px lightblue;
  }
</style>