<template>
  <el-container>
    <div class="box">
      <div class="navigation">
        <span class="title">联系我们</span>
        <span class="title-translate">Contact Us</span>
        <i class="line"/>
      </div>
      <div class="content">
        <div class="about">
          <div class="site-content">
            <div class="content-warp">
              <div class="about-site about-info">
                <span>❤</span>关于网站
                <div class="info-card">
                  <p>本网站提供全国失踪者信息，为寻亲者提供一种寻找方式</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>邮箱：1074285594@qq.com</div>
        <div>地址：来宾校区（主校区）来宾市铁北大道966号</div>
        <div>邮编：546199</div>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "contact",
    data() {
      return {}
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
    padding-top: 40px;
    border-top: 1px #8c939d dashed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 18px;
  }
</style>
