<template>
  <el-container>
    <div class="info">
      <span class="info-title">{{detailData.infoName}}</span>
      <div class="info-msg">
        <!--        <p><span>发布时间：</span>2021-08-07</p>-->
        <!--        <p><span>浏览次数：</span>701</p>-->
        <p><span>寻亲编号：</span>{{detailData.infoId}}</p>
      </div>
    </div>
    <div class="details">
      <div class="statement">
        <span>（1）本网站及志愿者提供的寻亲服务均是免费。</span>
        <span>（2）如信息需修改、补充等情况，请直接通过本站在线咨询联系网站工作人员。</span>
        <span>（3）本网站不保证登记信息中酬金承诺的有效性，知情人如需要有偿提供线索，请自行与登记人联系确认。</span>
      </div>
      <div class="message">
        <div class="pic">
          <el-image style="width: 300px; height: 400px;" :src="detailData.infoAvatar"></el-image>
        </div>
        <div class="content">
          <el-descriptions title="失踪者信息" :column="1" border>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-user"/>姓名</template>
              {{detailData.infoName}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-male"/>性别</template>
              {{formatType('sex', detailData.infoSex)}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-tickets"/>出生日期</template>
              {{detailData.infoDateBirth}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-office-building"/>籍贯</template>
              {{detailData.infoHometown}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-location-outline"/>失踪日期</template>
              {{detailData.infoDateMiss}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-location-outline"/>失踪地点</template>
              {{detailData.infoMissPlace}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-sunny"/>失踪类型</template>
              {{formatType('miss', detailData.infoMissType)}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-cloudy"/>寻找类型</template>
              {{formatType('seek', detailData.infoSeekType)}}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label"><i class="el-icon-s-data"/>失踪时身高（CM）</template>
              {{detailData.infoMissHigh}}
            </el-descriptions-item>
            <el-descriptions-item :sspan="2">
              <template slot="label"><i class="el-icon-edit-outline"/>相貌特征及身世描述</template>
              {{detailData.infoDescribe}}
            </el-descriptions-item>
          </el-descriptions>
          <span class="hint">*申请寻亲认领获取失踪者联系人信息</span>
        </div>
      </div>
    </div>
    <div class="button-box">
      <el-button type="primary" @click="onSubmit()">申请寻亲认领</el-button>
      <el-popover
        placement="top"
        width="280"
        v-model="visible">
        <div style="display: flex; flex-direction: column; align-items: center;">
          <vue-qr :text=qrUrl :size="200"></vue-qr>
          <div style="display: flex; flex-direction: row;">
            <el-input id="QRUrl" :value="qrUrl"/>
            <el-button @click="copyLink" class="el-icon-document-copy">复制链接</el-button>
          </div>
        </div>
        <el-button slot="reference" type="primary" @click="shareLink()">生成转发二维码</el-button>
      </el-popover>
    </div>
    <!-- 登录模态框 -->
    <login-modal ref="loginModal"/>
    <!-- 认领模态框 -->
    <modal-common ref="modalCommon" :modalData="modalDelete"/>
  </el-container>
</template>

<script>
  import loginModal from "../../components/login";
  import modalCommon from "../../components/modal/common";
  import {claimApplication, findInfoById} from '../../api/missInfo'
  import vueQr from 'vue-qr'

  export default {
    name: "missMessageDetails",
    components: {
      loginModal,
      modalCommon,
      vueQr,
    },
    data() {
      return {
        detailData: [],
        infoId: this.$route.query.infoId,
        userId: 0,
        token: '',
        modalDelete: {},
        qrUrl: '',
        visible: false
      }
    },
    methods: {
      init() {
        findInfoById({data: {infoId: this.infoId}})
          .then((res) => {
            if (res.data.status == 200) {
              this.detailData = res.data.data
            }
          })
      },
      onSubmit() {
        console.log("detailData", this.detailData);
        this.userId = localStorage.getItem('userId'),
          this.token = localStorage.getItem('token')
        console.log("token", this.userId, this.token)
        if (this.token == 'unload') {
          this.$message({
            message: "请先登录",
            type: 'error'
          })
          this.$refs.loginModal.show();
          return;
        }
        this.modalDelete = {
          title: '提示',
          context: '是否申请认领这条失踪者信息',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          showCancel: true,
          confirm: () => {
            let option = {
              data: {
                userId: parseInt(this.userId),
                infoId: this.detailData.infoId
              }
            }
            console.log('option', option)
            claimApplication(option).then((res) => {
              res = res.data
              if (res.status === 200) {
                this.$message({
                  message: res.data,
                  type: 'success'
                })
              }
              this.$refs.modalCommon.hide();
            })
          }
        }
        this.$refs.modalCommon.show();
      },
      formatType(type, row) {
        return this.utils.formatTypeByMiss(type, row);
      },
      shareLink() {
        let url = window.location.href
        console.log('url', url)
        this.qrUrl = url
      },
      copyLink() {
        let input = document.querySelector('#QRUrl')
        input.select();
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          this.$message({
            message: '复制成功',
            type: 'success'
          })
        }
      }
    },
    created() {
      this.init()
    }
  }
</script>

<style scoped>

  .el-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info {
    width: 70%;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px #9b9a9a dashed;
  }

  .info-title {
    margin: 15px 0;
    font-size: 30px;
    color: #333;
    border-bottom: 2px #E60012 solid;
  }

  .info-msg {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .info-msg span {
    color: #9b9a9a;
  }

  .details {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px 40px;
  }

  .statement {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 20px;
    color: #ff2121;
    margin: 40px 0;
  }

  .statement span {
    line-height: 25px;
  }

  .message {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .content {
    width: 70%;
  }

  .content .el-descriptions {
    margin: 20px 0;
  }

  .info, .details, .button-box {
    width: 70%;
    background-color: #fff;
  }

  .hint {
    color: #E60012;
  }

  .button-box {
    padding: 20px 40px;
    margin-bottom: 20px;
  }

  .el-popover {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
