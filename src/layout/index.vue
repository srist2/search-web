<template>
  <el-container>
    <el-header style="height: 120px">
      <el-col :span="4"><img class="logo" src="../assets/logo.png" style="width: 100px;"></el-col>
      <el-col :span="20" class="nav">
        <el-col :span="24" class="nav-login">
          <NavBar style="height: 60px"/>
          <div class="user" v-if="!username" @click="login"><i class="el-icon-user-solid"/>用户注册/用户登录</div>
          <div class="user" v-if="username">
            <el-dropdown @command="handleCommand">
              <p class="el-dropdown-link">
                <i class="el-icon-user-solid"/>欢迎登录，{{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </p>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="out" @click="loginOut()">登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
      </el-col>
    </el-header>
    <el-col :span="24" class="app-main">
      <AppMain></AppMain>
    </el-col>
    <el-col :span="24" class="footer">
      <SFooter></SFooter>
    </el-col>
    <!-- 登录模态框 -->
    <login-modal ref="loginModal" @usernameChange="usernameChange"/>
  </el-container>
</template>

<script>
  import {AppMain, NavBar, SFooter} from "./components";
  import ModalBase from "../components/modal/base";
  import loginModal from "../components/login"
  import {login, userLoginOut} from "../api/user";

  export default {
    name: 'Layout',
    components: {
      ModalBase,
      AppMain,
      NavBar,
      SFooter,
      ModalBase,
      loginModal
    },
    data() {
      return {
        modalData: {},
        loginData: {},
        rules: {
          username: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
          ],
        },
        username: localStorage.getItem('username') === 'undefined' ? undefined : localStorage.getItem('username'),
      }
    },
    methods: {
      // 登录
      login() {
        this.$refs.loginModal.show();
      },
      // 注销
      handleCommand(command) {
        if (command === 'out') {
          this.loginOut();
        }
      },
      loginOut() {
        userLoginOut().then(res => {
          localStorage.setItem("token", "unload");
          localStorage.setItem("username", undefined)
          localStorage.setItem("userRole", undefined)
          localStorage.setItem("reload", 'reload')
          this.username = undefined;
          this.$message({
            message: "登出成功",
            type: 'success'
          })
        })
      },
      // 用户名更改
      usernameChange(username) {
        console.log("userName", username)
        this.username = username;
      }
    }
  };
</script>

<style scoped>

  .el-header {
    background-color: #fff;
    opacity: 95%;
    color: #000;
    height: 120px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .nav-login {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .user {
    padding-right: 50px;
    margin-bottom: 40px;
    color: #606266;
    font-size: 16px;
  }

  .el-dropdown {
    color: #606266;
    font-size: 16px;
  }

  .line {
    width: 64%;
    height: 1px;
    background-color: #e6e6e6;
  }

  .app-main {
    background-color: rgba(255, 247, 247, 0.4);
  }

  .footer {
    background: #39434a;
  }

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

