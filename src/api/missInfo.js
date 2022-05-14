import utils from "../utils/utils";
import config from "../config"

// 查询用户列表
export function findInformationAll(query) {
  let options = {
    url: config.service.findInformationAll
  }
  return utils.requestAPI(options)
}

// 根据寻找类型和是否展示查询失踪者信息
export function findSeekTypeByIsShow(query) {
  let options = {
    url: config.service.findSeekTypeByIsShow,
    data: query.data
  }
  return utils.submitAPI(options)
}

// 失踪者信息认领
export function claimApplication(query) {
  let options = {
    url: config.service.claimApplication,
    data: query.data
  }
  return utils.submitAPI(options)
}
// 失踪者信息认领
export function findInfoById(query) {
  let options = {
    url: config.service.findInfoById,
    data: query.data
  }
  return utils.submitAPI(options)
}
