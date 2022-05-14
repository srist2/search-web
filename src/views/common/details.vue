<template>
  <el-container>
    <div class="box">
      <div class="navigation">
        <span class="title">生存手册之防拐常识</span>
      </div>
      <div class="content">
        <div>{{content}}</div>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        content: ''
      }
    },
    methods: {
      save() {
        let data = this.$route.params.content
        this.content = data;
      }
    },
    mounted() {
      this.save();
    }
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
    line-height: 30px;
    font-size: 26px;
    color: #ff3634;
  }

  .content {
    width: 80%;
    border-top: 1px #7f7f7f dashed;
    padding: 40px 0;
  }

  .text {
    width: 100%;
  }

</style>
