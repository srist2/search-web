<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item v-for="(item, index) in collapseData" :key="index">
      <template slot="title" class="col-temp">
        <div class="col-box">
          <span class="col-number">{{item.number}}</span>
          <span class="col-title">{{item.title}}</span>
        </div>
      </template>
      <div class="content">{{item.content}}</div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  export default {
    name: "commonCollapse",
    props: {
      collapseData: {
        required: true,
        type: Array
      },
    },
    data() {
      return {
        activeName: '1',
      }
    },
    methods: {}
  }
</script>

<style scoped>
  .el-collapse {
    width: 80%;
  }

  .el-collapse-item {
    /*padding-top: 15px;*/
  }

  .el-collapse >>> .el-collapse-item__header {
    padding: 10px 0;
  }

  .el-collapse-item >>> .col-box {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /*padding-bottom: 15px;*/
    /*margin-bottom: 15px;*/
  }

  .el-collapse-item >>> .col-number {
    font-size: 26px;
    color: #fff;
    padding: 0 20px;
    background-color: #E60012;
  }

  .el-collapse-item >>> .col-title {
    font-size: 16px;
    color: #666;
    padding: 0 15px;
  }

  .el-collapse-item >>> .content {
    text-indent: 2rem;
    text-align: left;
    font-size: 14px;
    padding: 15px 20px;
    color: #7f7f7f;
  }
</style>
