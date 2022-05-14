/**
 *  配置文件
 */
const host = 'http://localhost:8085'
const localhost = 'http://localhost:8082'

const config = {
  // 请求网络路径
  service: {
    // 查询失踪者列表
    findInformationAll: `${host}/information/findAll`,
    // 根据失踪Id查询
    findInfoById: `${host}/information/findById`,
    // 添加失踪者信息
    addInformation: `${host}/information/add`,
    // 根据寻找类型和是否展示查询失踪者信息
    findSeekTypeByIsShow: `${host}/information/findSeekTypeByIsShow`,
    // 查询失踪类型字典
    findMissTypeDict: `${host}/dict/missType`,
    // 查询寻找类型字典
    findSeekTypeDict: `${host}/dict/seekType`,
    // 用户登录
    userLogin: `${host}/admin/login`,
    // 用户注销
    userLoginOut: `${host}/admin/loginOut`,
    // 失踪者信息认领
    claimApplication: `${host}/claim/application`,
    // 加载本地静态文件
    static: {
      districts: `${localhost}/static/jsc-json/districts.json`
    }
  }
}
module.exports = config
