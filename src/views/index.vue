<template>
  <el-container>
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always" height="400px" style="width: 100%;">
      <el-carousel-item v-for="(item, index) in bannerList" :key="index">
        <el-image :src="item.img" style="height: 500px; width: 100%"/>
      </el-carousel-item>
    </el-carousel>
    <!-- 快捷入口 -->
    <div class="entry-box">
      <router-link :to="{path: '/familySearch'}">
        <div class="entry">
          <el-image class="entry-img" :src="require('../assets/Home1_xr.png')"/>
          <div class="box">
            <div class="title">
              <h2>寻亲快捷入口</h2>
              <span>TRACING QUICK ENTRY</span>
            </div>
            <div class="line"/>
            <div class="content">
              <p>寻亲网正在以互联网的方式帮助那些失孤和他们的父母，我们会努力的帮助你们！</p>
            </div>
          </div>
        </div>
      </router-link>
      <el-divider direction="vertical" content-position="center"/>
      <router-link :to="{path: '/missRegister'}">
        <div class="entry clues-entry">
          <el-image class="entry-img" :src="require('../assets/Home1_xs.png')"/>
          <div class="box">
            <div class="title">
              <h2>寻亲登记入口</h2>
              <span>CLUES QUICK ENTRY</span>
            </div>
            <div class="line"/>
            <div class="content">
              <p>寻亲网正在以互联网的方式帮助那些失孤和他们的父母，我们会努力的帮助你们！</p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <!-- 寻亲分区 -->
    <partition-title style="width: 50%;" :partition="partitionData.seek"/>
    <el-tabs class="seek-tabs" v-model="activeName" @tab-click="handleClick" stretch>
      <el-tab-pane label="家人寻亲" name="familySearch">
        <seekShowList :seekList="seekList"/>
        <div class="more-details"><router-link :to="{path: '/familySearch'}" style="color: #fff;">查看更多 >>></router-link></div>
      </el-tab-pane>
      <el-tab-pane label="亲人寻家" name="peopleSearch">
        <seekShowList :seekList="seekList"/>
        <div class="more-details"><router-link :to="{path: '/familySearch'}" style="color: #fff;">查看更多 >>></router-link></div>
      </el-tab-pane>
      <el-tab-pane label="其他寻人" name="otherSearch">
        <seekShowList :seekList="seekList"/>
        <div class="more-details"><router-link :to="{path: '/familySearch'}" style="color: #fff;">查看更多 >>></router-link></div>
      </el-tab-pane>
    </el-tabs>
    <!-- 防拐常识 -->
    <partition-title style="width: 50%;" :partition="partitionData.defensive"/>
    <defensive-show-list style="width: 70%;"/>
    <!-- 爱心链接 -->
    <partition-title style="width: 50%;" :partition="partitionData.loveLink"/>
    <div style="width: 70%;">
      <el-carousel :interval="4000" type="card" height="150px" style="width: 100%;">
        <el-carousel-item v-for="(item, index) in loveLinkList" :key="index">
          <a :href="item.src">
            <el-image :src="item.img" style="width: 50%"/>
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-container>
</template>

<script>
  import partitionTitle from "../components/partitionTitle";
  import seekShowList from "../components/seekShowList";
  import defensiveShowList from "../components/defensiveShowList";
  import {findSeekTypeByIsShow} from '@/api/missInfo';

  export default {
    name: "index",
    components: {
      partitionTitle,
      seekShowList,
      defensiveShowList
    },
    data() {
      return {
        bannerList: [
          {
            img: require('../assets/ban1.jpg'),
          },
          {
            img: require('../assets/ban2.png'),
          },
          {
            img: require('../assets/ban3.jpg'),
          },
        ],
        partitionData: {
          seek: {
            title: '寻亲专区',
            titleTranslate: 'SEEKING THE AREA',
            slogan: '无论你在哪里，我都要找到你——寻亲到天涯！！',
          },
          defensive: {
            title: '防拐常识',
            titleTranslate: 'DEFENSIVE COMMON SENSE',
            slogan: '转给身边的家长和孩子吧！！',
          },
          loveLink: {
            title: '爱心链接',
            titleTranslate: 'LOVE LIKE',
            slogan: '把爱心传递下去吧！！',
          }
        },
        activeName: 'familySearch',
        seekList: [
          {
            avatar: '../assets/logo.png',
            name: '张颖',
            hometown: '湖南省-永州市-祁阳县',
            missPlace: '湖南省-衡阳市-衡阳县',

          },
          {
            avatar: '../assets/logo.png',
            name: '张颖',
            hometown: '湖南省-永州市-祁阳县',
            missPlace: '湖南省-衡阳市-衡阳县',

          },
          {
            avatar: '../assets/logo.png',
            name: '张颖',
            hometown: '湖南省-永州市-祁阳县',
            missPlace: '湖南省-衡阳市-衡阳县',

          },
          {
            avatar: '../assets/logo.png',
            name: '张颖',
            hometown: '湖南省-永州市-祁阳县',
            missPlace: '湖南省-衡阳市-衡阳县',

          },
        ],
        loveLinkList: [
          {
            img: require('../assets/zhrmghgmzb.jpg'),
            src: 'http://www.mca.gov.cn/',
          },
          {
            img: require('../assets/zgrmgab.jpg'),
            src: 'http://www.mps.gov.cn/',
          },
          {
            img: require('../assets/qgqzxqw.jpg'),
            src: 'http://xunqin.mca.gov.cn',
          },
          {
            img: require('../assets/zgqnzyz.jpg'),
            src: 'http://www.zgzyz.org.cn/',
          },
        ]
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
        this.findSeekTypeByIsShow(options);
      },
      handleClick(tab, event) {
        let name = tab.name
        const options = {
          data: {
            seekType: 1,
            isShow: 1
          }
        }
        if (name === 'peopleSearch') {
          options.data.seekType = 2;
        }
        if (name === 'otherSearch') {
          options.data.seekType = 0;
        }
        this.findSeekTypeByIsShow(options);
      },
      findSeekTypeByIsShow(options) {
        findSeekTypeByIsShow(options)
          .then(res => {
            console.log("index", res)
            if (res.data.status === 200) {
              this.seekList = res.data.data.slice(0, 4);
            }
          })
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

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .entry-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
  }

  .entry-box >>> .el-divider--vertical {
    height: 150px;
    vertical-align: text-top;
  }

  .entry {
    /*width: 500px;*/
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 41px 0;
  }

  .entry-img {
    width: 137px;
    height: 137px;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    margin-left: 20px;
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .title span {
    color: #666666;
    font-weight: normal;
    text-transform: uppercase;
    margin-top: 5px;
  }

  .title h2 {
    margin: 0;
    font-size: 24px;
  }

  .line {
    width: 15%;
    margin-top: 10px;
  }

  .content {
    width: 60%;
    color: #999999;
    text-align: left;
  }

  .clues-entry {
    margin-left: 100px;
  }

  .seek-tabs {
    width: 70%;
  }

  .el-tab-pane {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .more-details {
    width: 8%;
    padding: 7px 15px;
    background-color: #E60012;
    border-radius: 500px;
    color: #fff;
    margin-top: 30px;
  }
</style>
