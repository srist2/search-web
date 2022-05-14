<template>
  <el-container>
    <div class="box">
      <div class="navigation">
        <span class="title">爱心链接</span>
        <span class="title-translate">Cooperative Media</span>
        <i class="line"/>
      </div>
      <div class="content">
        <div class="img-item" v-for="(item, index) in loveLinkList" :key="index">
          <a :href="item.src"><el-image :src="item.img" style="width: 80%"/></a>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "cooperativeMedia",
    data() {
      return {
        loveLinkList: [
          {
            img: require('../../assets/zhrmghgmzb.jpg'),
            src: 'http://www.mca.gov.cn/',
          },
          {
            img: require('../../assets/zgrmgab.jpg'),
            src: 'http://www.mps.gov.cn/',
          },
          {
            img: require('../../assets/qgqzxqw.jpg'),
            src: 'http://xunqin.mca.gov.cn',
          },
          {
            img: require('../../assets/zgqnzyz.jpg'),
            src: 'http://www.zgzyz.org.cn/',
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

  .content {
    width: 80%;
    padding-top: 40px;
    border-top: 1px #8c939d dashed;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .img-item {
    width: 25%;
    border: 1px #8c939d solid;
    padding: 20px 0;
    margin: 10px 40px;
  }
</style>
