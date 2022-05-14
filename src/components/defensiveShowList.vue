<template>
  <el-container>
    <div v-for="(item,index) in defensiveList" :key="index">
      <div class="defensive" @click="jumpDetail(index)">
        <div class="defensive-left">
          <h2>{{item.title}}</h2>
          <span>{{item.subtitle}}</span>
          <div class="show-details">查看详情 ></div>
        </div>
        <div class="defensive-right">
          <el-empty :image=item.img style="width: 234px; height: 200px;"
                    description="description">
            <template slot="description">
              <span>{{item.img ? '' : '暂无上传'}}</span>
            </template>
          </el-empty>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
  export default {
    name: "defensiveShowList",
    data() {
      return {
        defensiveList: [
          {
            title: '防拐常识',
            subtitle: '生存手册之防拐常识，转给身边的家长和女孩吧！',
            url: '/commonDetails',
            img: require('../assets/defensive1.jpg'),
            content: '防盗防拐安全常识第一招：偷' +
              '这招通常用在人流密集且流动性大的公关场所，比如超市、商场这些地方，并且多用在还不会说话、不会走路的幼儿身上。父母带宝' +
              '宝出游，在人多的地方一定要留神，不然就可能被人贩子有机可乘。第二招：骗' +
              '就是哄骗、诱拐孩子。人贩子一般都用“变魔术”“寻找宠物”“买糖果”等招数骗走孩子。外出游玩，父母要保证孩子一直在自己' +
              '的视线范围内，并叮嘱孩子不要乱跑。第三招：抢早些年多出现飞车抢夺等“明抢”的事件;近两年又出现了“暗' +
              '抢”。人贩子会先骗取家长的信任将孩子带离身边，当家长要抱回孩子时，人贩子则会“反咬一口”称家长才是人贩子，从而抢走孩子。' +
              '这种情况尤其容易发生在独自带宝宝出门的妈咪身上。不过，总有防不胜防的时候，爸妈不妨借助一些物品，将宝宝被拐的可能性降低。'
          },
          {
            title: '21条儿童防拐常识 为了孩子 牢记心中',
            subtitle: '据落网拐卖人员交代，他们拐骗儿童时大多会',
            url: '',
            img: require('../assets/sense3.jpg'),
            content: '      1.不要让孩子离开家长视线；\n' +
              '  2.不要将孩子单独留在家中或店铺里；\n' +
              '  3.不要让孩子独自在门外玩耍；\n' +
              '  4.孩子外出玩耍，大人要跟随看护；\n' +
              '  5.有孩子的家庭应与邻居和睦相处，彼此照应；\n' +
              '  6.不要把孩子交给陌生人看管或带走；\n' +
              '  7.无暇照顾孩子时，把孩子交给可信赖的亲朋好友；\n' +
              '  8.不要带小孩到偏僻人少的地方；\n' +
              '  9.带孩子在马路上走，尽量靠里走，注意防范摩托车、面包车；\n' +
              '  10.给孩子佩戴有家庭相关信息的物品；\n' +
              '  11.如您的小孩不足1岁，外出时请尽量用婴儿专用背带，将孩子挂在胸前；\n' +
              '  12.坐手推车的孩子要系好安全带；\n' +
              '  13.将孩子放在自行车后座时，注意系好安全带；\n' +
              '  14.在医院不要把新生儿交给不认识的医护人员；\n' +
              '  15.孩子能说话时，教会孩子背诵家庭电话号码、所住城市和小区名、家庭成员的名字；\n' +
              '  16.教会孩子遇事打110电话求助；\n' +
              '  17.教会孩子辨认警察、军人、保安等穿制服的人员；\n' +
              '  18.教育孩子一旦走失，马上找穿制服的工作人员；\n' +
              '  19.家长应注意孩子身上一些明显的体表特征，如黑痣、胎记、伤疤等；\n' +
              '  20.到正规保姆介绍机构聘请保姆；\n' +
              '  21.时常提醒教育保姆和家人提高防范意识；  ',
          },
          {
            title: '你必须了解的防拐、防走失知识',
            subtitle: '怎样教导孩子安全常识？孩子走失的第一时间该做什么？',
            url: '',
            img: require('../assets/sense1.jpg'),
            content: '如果孩子丢失，家长第一时间应该做哪些事？分为四个步骤，第一为了避免孩子丢失的案件发生，在孩子出门之前父母需给孩子拍张照片，记住他全身的特征。第二当父母发现孩子没有在原地等待，要立刻呼唤孩子的名字，若周围没有人回应，家长第一时间要打报警电话110。\n' +
              '第三如果有亲人陪同，寻找孩子需从东、西、南、北多个方向分散寻找。第四去公安局采血取DNA，录入全国被拐卖孩子的DNA数据库，以便全国警方发现嫌疑人，找到自己的孩子。',
          },
          {
            title: '儿童防拐十条安全知识，父母必看',
            subtitle: '儿童防拐十条安全知识，父母必看',
            url: '',
            img: require('../assets/sense2.jpg'),
            content: '  家长必知-防拐十招:\n' +
              '  1、带孩子外出时，要随时保证孩子在视线范围内。\n' +
              '  2、不要带小孩到偏僻人少的地方，注意防范后面来的摩托车、面包车。\n' +
              '  3、尽量不要带孩子到人员复杂拥挤的场所，以免孩子因拥挤走失被拐。\n' +
              '  4、聘请保姆时，一定要查清其真实身份并掌握相关资料。\n' +
              '  5、千万不要让陌生人照看孩子，即使时间很短。\n' +
              '  6、在医院不要把孩子交给不认识的医护人员，睡觉时锁好门窗。\n' +
              '  7、一定要亲自按时到幼儿园或学校接送孩子，防止犯罪分子乘虚而入。\n' +
              '  8、教孩子拒绝陌生人的饮料、糖果、礼物和搂抱，不跟陌生人走等。\n' +
              '  9、让孩子熟记家庭住址、电话、父母名字，经常对孩子进行应急安全教育。\n' +
              '  10、要告诫孩子不要到荒凉偏僻的地方玩耍。\n' +
              '  家长应该做到这些：\n' +
              '  不要让孩子离开家长视线范围；不要将孩子单独留在家中或店铺里；不要把孩子交给陌生人看管或带走；不要让孩子独自在室外玩耍；带孩子外出时，留意四周情况，注意是否有人、车跟随；不要让孩子在没有大人看护的情况下跟随其他孩子外出玩耍；给孩子佩戴有家庭相关信息的物品；不要带小孩到偏僻人少的地方；如您的小孩不足1岁，外出时请尽量使用婴儿专用背带；坐手推车的孩子要系好安全带；注意孩子身上一些明显的体表特征，如黑痣、胎记、伤疤等。\n' +
              '  孩子在需要他人照看时，家长应做好必要的防范。省公安厅介绍说，如需聘请保姆，请到正规保姆介绍机构聘请，保留好保姆的身份证复印件和清晰的生活近照；在医院不要把新生儿交给不认识的医护人员，睡觉时锁好房门；时常提醒保姆提高防范意识；如果您为外来务工人员，您的孩子小于3岁，居住在城郊结合部等人员流动比较密集的地方，孩子没有固定人员看管，那么您更应对此予以重视；与孩子幼儿园或学校的老师说好，除了您和您指定的人外，不让其他人接送您的孩子。\n' +
              '  家长应该教会孩子这些：\n' +
              '  小孩子其实有一定的防控能力。省公安厅建议家长教会小孩一些相关常识：孩子能说话时，教会孩子背诵家庭电话号码、所住城市和小区名、家庭成员的名字；教会孩子遇事拨打110求助；教会孩子辨认警察、军人、保安等穿制服人员；教育孩子一旦在商场、超市、公园等公共场所与父母走失，马上找穿制服的工作人员；告诉孩子不要接受陌生人给的东西，也不要答应他们的邀请，没有家长的嘱托，不要接受其他人的接送。    '
            ,
          },
        ]
      }
    },
    methods: {
      jumpDetail(index) {
        console.log('index', this.defensiveList[index])
        let data = this.defensiveList[index].content;
        data = JSON.stringify(data);
        this.$router.push({name: '/commonDetails', params: {content: data}});
      }
    }
  }
</script>

<style scoped>
  .el-container {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .defensive {
    display: flex;
    flex-direction: row;
  }

  .defensive-left {
    width: 250px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 15px solid #f8f8f8;
    padding: 15px;
  }

  .defensive :hover {
    border-color: #E60012;
  }


  .defensive-left span {
    text-align: left;
  }

  .defensive-left .show-details {
    padding: 7px 15px;
    background-color: #E60012;
    border-radius: 500px;
    color: #fff;
    margin-top: 30px;
  }
</style>
