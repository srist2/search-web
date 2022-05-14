<template>
  <el-container>
    <div class="box">
      <div class="navigation">
        <span class="title">寻亲指南</span>
        <span class="title-translate">Tracing Guide</span>
        <i class="line"/>
      </div>
      <commonCollapse :collapseData="collapseData"/>
    </div>
  </el-container>
</template>

<script>
  import commonCollapse from "../../components/commonCollapse";

  export default {
    name: "tracingGuide",
    components: {
      commonCollapse
    },
    data() {
      return {
        activeName: '1',
        collapseData: [
          {
            number: '1',
            title: '我国高校专家诠释“寻人方法”',
            content: '人口失踪24小时才能立案？这个曾经在电视剧中经常出现的桥段，其实是误导，很多人因此走进了误区。南京市鼓楼警方告诉记者，有的家长发现未成年人走失，' +
              '第一反应会先发动全家人的力量寻找，等到找不到后才会想到报案寻求警方帮助。民警提醒，家长如发现孩子失踪，应该快速反应，即时报案，有助于快速找回失联儿童。'
          },
          {
            number: '2',
            title: '正确有效的寻人方法介绍',
            content: '人口失踪24小时才能立案？这个曾经在电视剧中经常出现的桥段，其实是误导，很多人因此走进了误区。南京市鼓楼警方告诉记者，有的家长发现未成年人走失，第一反应会先发动全家人的力量寻找，等到找不到后才会想到报案寻求警方帮助。民警提醒，家长如发现孩子失踪，应该快速反应，即时报案，有助于快速找回失联儿童。'
          },
          {
            number: '3',
            title: '孩子走丢要第一时间报警，配合民警做好搜寻工作',
            content: '近年来屡有官员“失联”。官员“丢”了怎么办?“政事儿”(微信ID:gcxxjgzh)查阅公务员法等现行法律法规发现，都没有规定。近日，湖南省郴州物价局找不到他们的副局长了，他们决定登报寻人。'
          },
          {
            number: '4',
            title: '领导“丢了”，除了登报寻人还有啥办法？',
            content: '近年来屡有官员“失联”。官员“丢”了怎么办?“政事儿”(微信ID:gcxxjgzh)查阅公务员法等现行法律法规发现，都没有规定。近日，湖南省郴州物价局找不到他们的副局长了，他们决定登报寻人。'
          },
          {
            number: '5',
            title: '报警报路灯杆号定位不好使 警察教十字寻人法',
            content: '为了让求助者发布的寻人信息能够全面准确的覆盖网络，基于本站与中国寻人启事网、中国找人网、中国寻亲网多年的合作关系，于2009年8月12日四站正式签约结盟，联手成为寻人界第一网盟服务，使寻人手段、途径真正迈向成熟，实现了低收费、高效率、 多渠道发布。'
          },
          {
            number: '6',
            title: '请问一下你们寻亲需要什么东西，寻亲需要多少钱？',
            content: '直接上传：在寻人启事专项登记页面中，将有上传照片按纽，点击上传，将您电脑中的照片直接发送给我们。\n' +
              '邮件发送：您有扫描仪可以扫描照片，扫描后请用邮件附件发送至我们邮箱，尽可能将照片扫描清晰。\n' +
              '普通邮寄：您手里有照片但不能扫描，您可以用挂号信邮寄给我们，我们可以帮你扫描或精确处理。相片最好为近期清晰一寸免冠照，详情请来电咨询。'
          },
          {
            number: '7',
            title: '寻人启事发布登记要求',
            content: '必须保证所提供信息的真实性，同时内容要精准、完整，不要引出歧义造成陈述失误。并且没有任何引人误解或者虚假的陈述。' + '\t' +
              '登记者所登记的内容具有法律约束力，对其带来的后果承担法律责任。\n' +
              '保证所登记的信息资料不违反中华人民共和国法律法规，也不构成对任何第三者任何形式的侵权。'
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
