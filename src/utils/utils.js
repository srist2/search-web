import axios from '../plugins/axios'

const utils = {
  /**
   * 请求数据
   *
   * @param options
   *
   * @return {Object} options.success 成功回调
   * @return {Object} options.fail 失败回调
   */
  request(options) {
    axios.get(options.url)
      .then((res) => {
        options.success(res);
      })
      .catch((error => {
        options.fail({data: error});
      }))
  },

  requestAPI(options) {
    return new Promise((resolve, reject) => {
      axios.get(options.url)
        .then((res) => {
          resolve(res);
        })
        .catch((error => {
          reject(error)
        }))
    })
  },

  /**
   * 提交
   *
   * @param options
   *
   * @return {Object} options.success 成功回调
   * @return {Object} options.fail 失败回调
   */
  submit(options) {
    axios.post(options.url, options.data)
      .then((res) => {
        options.success(res);
      })
      .catch((error) => {
        options.fail({data: error});
      })
  },

  submitAPI(options) {
    return new Promise((resolve, reject) => {
      axios.post(options.url, options.data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  /**
   * 失踪者类型转换
   */
  formatTypeByMiss(type, row) {
    if (!row) {
      return ""
    }
    if (type === 'seek') {
      return this.seekTypeFormat(row);
    }
    if (type === 'miss') {
      return this.missTypeFormat(row);
    }
    if (type === 'sex') {
      return this.genderFormat(row);
    }
  },

  /**
   * 寻找类型转换
   */
  seekTypeFormat(role) {
    switch (role) {
      case Dict.SeekType.type_1.id:
        return Dict.SeekType.type_1.name;
      case Dict.SeekType.type_2.id:
        return Dict.SeekType.type_2.name;
      case Dict.SeekType.type_3.id:
        return Dict.SeekType.type_3.name;
      case Dict.SeekType.type_4.id:
        return Dict.SeekType.type_4.name;
      case Dict.SeekType.type_5.id:
        return Dict.SeekType.type_5.name;
      case Dict.SeekType.type_6.id:
        return Dict.SeekType.type_6.name;
      case Dict.SeekType.type_7.id:
        return Dict.SeekType.type_7.name;
      case Dict.SeekType.type_8.id:
        return Dict.SeekType.type_9.name;
      case Dict.SeekType.type_10.id:
        return Dict.SeekType.type_10.name;
    }
  },

  /**
   * 失踪类型转换
   */
  missTypeFormat(role) {
    switch (role) {
      case Dict.MissType.type_1.id:
        return Dict.MissType.type_1.name;
      case Dict.MissType.type_2.id:
        return Dict.MissType.type_2.name;
      case Dict.MissType.type_3.id:
        return Dict.MissType.type_3.name;
      case Dict.MissType.type_4.id:
        return Dict.MissType.type_4.name;
      case Dict.MissType.type_5.id:
        return Dict.MissType.type_5.name;
      case Dict.MissType.type_6.id:
        return Dict.MissType.type_6.name;
    }
  },

  /**
   * 性别类型转换
   */
  genderFormat(role) {
    switch (role) {
      case Dict.Gender.male.id:
        return Dict.Gender.male.name;
      case Dict.Gender.female.id:
        return Dict.Gender.female.name;
    }
  }
}

export default utils

let Dict = {}
// 寻找类型字典
Dict.SeekType = {
  type_1: {
    id: 1,
    name: "家寻亲人"
  },
  type_2: {
    id: 2,
    name: "亲人寻家"
  },
  type_3: {
    id: 3,
    name: "寻找朋友"
  },
  type_4: {
    id: 4,
    name: "寻找同学"
  },
  type_5: {
    id: 5,
    name: "寻找战友"
  },
  type_6: {
    id: 6,
    name: "其他寻找"
  },
}
// 失踪类型字典
Dict.MissType = {
  type_1: {
    id: 1,
    name: "失散亲友"
  },
  type_2: {
    id: 2,
    name: "被拐卖"
  },
  type_3: {
    id: 3,
    name: "离家出走"
  },
  type_4: {
    id: 4,
    name: "迷路走失"
  },
  type_5: {
    id: 5,
    name: "不明原因"
  },
  type_6: {
    id: 6,
    name: "孤儿"
  },
  type_7: {
    id: 7,
    name: "遗弃"
  },
  type_8: {
    id: 8,
    name: "送养"
  },
  type_9: {
    id: 9,
    name: "收养"
  },
  type_10: {
    id: 10,
    name: "死亡"
  },
}
// 性别类型字典
Dict.Gender = {
  male: {
    id: 1,
    name: '男'
  },
  female: {
    id: 2,
    name: '女'
  }
}
