<template>
  <!-- 登录模态框 -->
  <modal-base ref="modalBase">
    <el-form :model="loginData" ref="form" class="form-box" label-position="left" label-width="80px" :rules="rules">
      <div class="form-item-title">用户登录</div>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="loginData.username" placeholder="请输入用户名"/>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="loginData.password"
          placeholder="请输入密码"
          show-password
          autocomplete="off"
        />
      </el-form-item>
      <div class="form-row-btn">
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
        <el-button @click="close()">取消</el-button>
      </div>
    </el-form>
  </modal-base>
</template>

<script>
  import ModalBase from "../components/modal/base";
  import {login} from "../api/user";

  export default {
    name: "login",
    components: {
      ModalBase
    },
    data() {
      return {
        loginData: {},
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        },
      }
    },
    methods: {
      show(){
        this.$refs.modalBase.show();
      },
      submitForm(formName) {
        let _this = this
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let options = {
              data: {
                userName: this.loginData.username,
                password: this.loginData.password,
              }
            }
            console.log("options", options)
            login(options)
              .then((res) => {
                res = res.data
                if (res.status === 200) {
                  console.log("res",res.data)
                  // 保存token信息
                  localStorage.setItem("token", res.data.token)
                  localStorage.setItem("username", res.data.userName)
                  localStorage.setItem("userId", res.data.userId)
                  this.$message({
                    message: "登录成功",
                    type: 'success'
                  })
                  this.$emit('usernameChange', res.data.userName)
                  this.close();
                } else {
                  this.$message({
                    message: res.data,
                    type: 'warning'
                  })
                }
              })
          }
        })
      },
      // 重置表单
      close() {
        this.$refs.modalBase.hide();
      },
    }
  }
</script>

<style scoped>
  .form-box {
    margin: 40px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form-item-title {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .form-row-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: -20px;
  }

  .form-row-btn .el-button {
    margin: 0 10px;
  }
</style>
