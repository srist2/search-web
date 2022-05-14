<template>
  <el-container>
    <div class="navigation">
      <span class="title">家寻亲人</span>
      <span class="title-translate">FAMILY SEEK</span>
      <el-image class="nav-img" :src="require('../../assets/home.png')"/>
    </div>
    <div class="show-list">
      <div class="show-item" v-for="(item, index) in familySearchList.slice((pageNum-1)*pageSize,pageNum*pageSize)" :key="index">
        <el-empty :image="item.infoAvatar" description="description" style="padding: 10px;">
          <template slot="description">
            <span>{{item.infoAvatar ? '' : '暂无上传'}}</span>
          </template>
        </el-empty>
        <p class="name">{{item.infoName}}</p>
        <div class="content">
          <span>失踪时间：{{item.infoDateMiss}}</span>
          <span>失踪地点：{{item.infoMissPlace}}</span>
        </div>
        <div class="show-details" @click="jumpDetails(index)">查看详情&emsp;&emsp; ></div>
      </div>
    </div>
    <!-- 分页 -->
    <pagination v-show="total>0" :total="total" :page.sync="pageNum" :limit.sync="pageSize" :pageSizes.sync="pageSizes"/>
  </el-container>
</template>

<script>
  import pagination from "../../components/pagination";
  import {findSeekTypeByIsShow} from '@/api/missInfo';

  export default {
    name: "familySearch",
    components: {
      pagination
    },
    data() {
      return {
        tableData: [],
        // 分页信息
        total: 0,
        pageNum: 1,
        pageSize: 9,
        pageSizes: [9, 18, 27, 36],
        familySearchList: []
      }
    },
    methods: {
      init() {
        let options = {
          data: {
            seekType: 1,
            isShow: 1
          }
        }
        findSeekTypeByIsShow(options)
          .then(res => {
            console.log("index", res)
            if (res.data.status === 200) {
              this.familySearchList = res.data.data;
              this.total = this.familySearchList.length;
            }
          })
      },
      jumpDetails(index) {
        console.log('this.se', this.familySearchList)
        let infoId = this.familySearchList[index].infoId
        this.$router.push({name: '/missMessageDetails', query: {infoId: infoId}});
      }
    },
    created() {
      this.init();
    }
  }
</script>

<style scoped>
  .el-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    border-bottom: 2px solid #ff2737;
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

  .nav-img {
    width: 84px;
    height: 84px;
  }

  .show-list {
    width: 72%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 40px 0;
  }

  .show-item {
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e0e0e0;
    margin: 10px;
  }

  .show-item >>> .el-empty__image {
    width: 250px;
    height: 280px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: self-start;
  }

  .show-details {
    padding: 7px 15px;
    background-color: #E60012;
    border-radius: 500px;
    color: #fff;
    margin: 30px 0 20px 0;
  }
</style>
