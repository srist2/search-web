<template>
  <el-container>
    <div class="link">
      <dl>
        <dt>紧急寻亲<div></div></dt>
        <dd><router-link :to="{path: '/'}">寻人登记</router-link></dd>
      </dl>
      <dl>
        <dt><i></i>寻人信息</dt>
        <dd><router-link :to="{path: '/'}">家寻亲人</router-link></dd>
        <dd><router-link :to="{path: '/'}">亲人寻家</router-link></dd>
        <dd><router-link :to="{path: '/'}">其他寻人</router-link></dd>
      </dl>
      <dl>
        <dt><i></i>关于我们</dt>
        <dd><router-link :to="{path: '/'}">留言簿</router-link></dd>
        <dd><router-link :to="{path: '/'}">爱心链接</router-link></dd>
        <dd><router-link :to="{path: '/'}">联系我们</router-link></dd>
      </dl>
    </div>
    <div class="copyright">
      <span>©1999-2022寻亲网络技术有限公司</span>
      <span>京网文〔2020〕10xx-xx号</span>
      <span>经营性网站备案信息</span>
      <span>版权与免责声明</span>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "s-footer"
  }
</script>

<style scoped>
  .el-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
  }

  .link {
    width: 40%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-around
  }
  .link dt {
    border-bottom: 1px solid #8f9192;
    color: #dedede;
    padding-bottom: 8px;
    margin-bottom: 12px;
  }

  .link dl dd {
    margin: 0;
    text-decoration: none;
    padding-top: 5px;
  }

  .copyright {
    width: 100%;
    border-top: 1px dashed #4a545a;
    color: #979797;
    line-height: 55px;
  }
</style>
