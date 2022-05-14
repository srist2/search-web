<template>
  <el-container>
    <div class="box">
      <div class="navigation">
        <span class="title">登记流程</span>
        <span class="title-translate">Registration Process</span>
        <i class="line"/>
      </div>
      <commonCollapse :collapseData="collapseData"/>
    </div>
  </el-container>
</template>

<script>
  import commonCollapse from "../../components/commonCollapse";

  export default {
    name: "registrationProcess",
    components: {
      commonCollapse
    },
    data() {
      return {
        collapseData: [
          {
            number: '1',
            title: '信息发布流程',
            content: '平台推送信息的流程：\n' +
              '\n' +
              '1.直系亲属本人或直系亲属委托人在天涯寻亲平台在线登记寻亲信息 \n' +
              '\n' +
              '2.直系亲属本人打印填写寻亲授权书 \n' +
              '\n' +
              '3.根据网站登记的信息编辑推送寻亲消息。'
          },
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .el-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .box {
    width: 80%;
    height: 800px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0;
  }

  .title {
    font-size: 30px;
    color: #333;
  }

  .title-translate {
    font-size: 18px;
    color: #cccccc;
    display: block;
    font-weight: normal;
    margin: 5px 0;
  }

  .line {
    width: 80%;
    border-bottom: 2px #E60012 solid;
  }
</style>
