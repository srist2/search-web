<template>
  <el-container>
    <div class="miss-person" v-for="(item,index) in seekList" :key="index">
      <el-empty :image="item.infoAvatar" description="description" style="padding: 0;">
        <template slot="description">
          <span>{{item.infoAvatar ? '' : '暂无上传'}}</span>
        </template>
      </el-empty>
      <div class="message">
        <p class="name">{{item.infoName}}</p>
        <span>籍贯：{{item.infoHometown}}</span>
        <span>失踪地：{{item.infoMissPlace}}</span>
        <div class="show-details" @click="jumpDetails(index)">查看详情 ></div>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "seekShowList",
    props: {
      seekList: {
        type: Array,
        request: true
      }
    },
    data() {
      return {
        item: []
      }
    },
    methods: {
      jumpDetails(index) {
        let infoId = this.seekList[index].infoId
        this.$router.push({path: '/missMessageDetails', query: {infoId: infoId}});
      }
    }
  }
</script>

<style scoped>
  .el-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .miss-person {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px;
  }

  .miss-person >>> .el-empty__image {
    height: 200px;
  }

  .message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }

  .message .name {
    margin: 0;
    font-size: 18px;
    padding: 5px 0 8px;
  }

  .message span {
    text-align: left;
    width: 300px;
    line-height: 20px;
    color: #999;
    font-size: 14px;
    margin-top: 3px;
  }

  .message .show-details {
    padding: 7px 15px;
    background-color: #E60012;
    border-radius: 500px;
    color: #fff;
    margin-top: 30px;
  }

</style>
