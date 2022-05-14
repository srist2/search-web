import utils from "../utils/utils";
import config from "../config"

// 用户登录
export function login(query) {
  let options = {
    url: config.service.userLogin,
    data: query.data
  }
  return utils.submitAPI(options)
}

// 用户注销
export function userLoginOut(query) {
  let options = {
    url: config.service.userLoginOut
  }
  return utils.requestAPI(options)
}
