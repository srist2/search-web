<template>
  <el-container>
    <div class="navigation">
      <span class="title">寻亲登记</span>
      <span class="title-translate">SEARCH REGISTRATION</span>
      <el-image class="nav-img" :src="require('../assets/register.png')"/>
    </div>
    <div class="form-box">
    <el-form :model="missData" ref="missData" class="form" label-position="left" label-width="140px" :rules="rules">
      <div class="form-item">
        <div class="form-item-left">
          <div class="form-item-title">失踪人信息</div>
          <el-form-item label="姓名" prop="infoName">
            <el-input v-model="missData.infoName"/>
          </el-form-item>
          <el-form-item label="性别" prop="infoSex">
            <el-select v-model="missData.infoSex" placeholder="请选择">
              <el-option
                v-for="item in sexDictList"
                :key="item.dict_id"
                :label="item.dict_name"
                :value="item.dict_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="籍贯" prop="infoHometown">
            <el-input v-model="missData.infoHometown"/>
          </el-form-item>
          <el-form-item label="失踪时身高" prop="infoMissHigh">
            <el-input v-model="missData.infoMissHigh"/>
          </el-form-item>
          <el-form-item label="相貌特征及身世描述" prop="infoDescribe">
            <el-input v-model="missData.infoDescribe"/>
          </el-form-item>
          <el-form-item label="失踪地点" prop="infoMissPlace">
            <el-input v-model="missData.infoMissPlace"/>
          </el-form-item>
        </div>
        <div class="form-item-right" style="margin-top: 41px;">
          <el-form-item label="寻找类型" prop="infoSeekType">
            <el-select v-model="missData.infoSeekType" placeholder="请选择">
              <el-option
                v-for="item in seekTypeList"
                :key="item.dict_id"
                :label="item.dict_name"
                :value="item.dict_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="失踪类型" prop="infoMissType">
            <el-select v-model="missData.infoMissType" placeholder="请选择">
              <el-option
                v-for="item in missTypeList"
                :key="item.dict_id"
                :label="item.dict_name"
                :value="item.dict_id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期" prop="infoDateBirth">
            <el-date-picker
              v-model="missData.infoDateBirth"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"/>
          </el-form-item>
          <el-form-item label="失踪日期" prop="infoDateMiss">
            <el-date-picker
              v-model="missData.infoDateMiss"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"/>
          </el-form-item>
          <el-form-item label="上传头像" prop="infoAvatar">
            <ImgUpload ref="imgUpload" :imgUrl.sync="imageUrl"/>
          </el-form-item>
        </div>
      </div>

    </el-form>
    <el-form :model="missData.contactPerson" ref="missPersonData" class="form" label-position="left" label-width="100px" :rules="rulesCt">
      <div class="form-item" style="display: flex; flex-direction: column; margin-left: 100px; margin-top: -70px;">
        <!--        <div class="form-item"></div>-->
        <div class="form-item-left">
          <div class="form-item-title">联系人信息</div>
          <el-form-item label="姓名" prop="ctName">
            <el-input v-model="missData.contactPerson.ctName"/>
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model="missData.contactPerson.ctEmail"/>
          </el-form-item>
          <el-form-item label="邮政编码">
            <el-input v-model="missData.contactPerson.ctZipCode"/>
          </el-form-item>
        </div>
        <div class="form-item-right">
          <el-form-item label="电话" prop="ctPhone">
            <el-input v-model="missData.contactPerson.ctPhone"/>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="missData.contactPerson.ctAddress"/>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="missData.contactPerson.ctRemark"/>
          </el-form-item>
        </div>
        <div class="form-row-btn">
          <el-button type="primary" @click="submitForm('missData')">提交</el-button>
          <el-button @click="resetForm('missData')">重置</el-button>
        </div>
      </div>
    </el-form>
    </div>
  </el-container>
</template>

<script>
  import addressSelection from "../components/addressSelection";
  import ImgUpload from "../components/ImgUpload";
  import {findMissDict, findSeekDict} from '@/api/dict';

  export default {
    name: "missRegister",
    components: {
      addressSelection,
      ImgUpload
    },
    data() {
      return {
        missData: {
          contactPerson: {
            ctName: ''
          }
        },
        imageUrl: '',
        seekTypeList: [],
        missTypeList: [],
        sexDictList: [
          {
            dict_id: 1,
            dict_name: "男"
          },
          {
            dict_id: 2,
            dict_name: "女"
          }
        ],
        rules: {
          infoName: [
            {required: true, message: '请输入姓名', trigger: 'blur'},
            {min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur'}
          ],
          infoSex: [
            {required: true, message: '请选择性别', trigger: 'blur'},
          ],
          infoSeekType: [
            {required: true, message: '请选择寻找类型', trigger: 'blur'},
          ],
          infoMissType: [
            {required: true, message: '请选择失踪类型', trigger: 'blur'},
          ],
          infoHometown: [
            {required: true, message: '请输入籍贯', trigger: 'blur'},
          ],
          infoDateBirth: [
            {required: true, message: '请选择出生日期', trigger: 'blur'},
          ],
          infoDateMiss: [
            {required: true, message: '请选择失踪日期', trigger: 'blur'},
          ],
          infoCtPhone: [
            {required: true, message: '请输入联系人电话', trigger: 'blur'},
          ],
        },
        rulesCt: {
          ctName: [
            {required: true, message: '请输入联系人姓名', trigger: 'blur'},
          ],
          ctPhone: [
            {required: true, message: '请输入联系人电话', trigger: 'blur'},
          ],
        }
      }
    },
    methods: {
      init() {
        // 获取失踪类型字典
        findMissDict().then(res => {
          this.missTypeList = res.data.data;
        })
        // 获取寻找类型字典
        findSeekDict().then(res => {
          this.seekTypeList = res.data.data;
        })
      },
      // 表单提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$refs['missPersonData'].validate((valid) => {
              console.log("missPersonData", valid)
              if (valid) {
                this.$refs.imgUpload.submit();
                setTimeout(() => {
                  this.add();
                }, 300)
              }
            })
          }
        })
      },// 添加/修改
      add() {
        let url = this.config.service.addInformation
        let message = "添加成功"
        this.missData.infoAvatar = this.imageUrl;
        let options = {
          url: url,
          data: this.missData,
          success: res => {
            if (res.data.status === 200) {
              this.resetForm('missPersonData')
              this.resetForm('missData')
              this.$message({
                message: message,
                type: 'success'
              });
            }
          },
          error: res => {
            console.error(res)
          }
        }
        this.utils.submit(options);
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
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
    padding-bottom: 10px;
    border-bottom: 2px solid #ff2737;
  }

  .form-box {
    margin: 20px 0;
    padding: 40px 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  .form-item-title {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .form-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  .form-item-left, .form-item-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .form-item-left {
    padding-right: 20px;
  }

  .form-row {
    display: flex;
    flex-direction: row;
  }

  .form-row-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: -20px;
  }

  .form-row-btn .el-button {
    margin: 0 10px;
  }
</style>
