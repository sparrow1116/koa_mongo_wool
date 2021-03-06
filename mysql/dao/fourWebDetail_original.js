
const {FourWebDetailOriginal} = require('../models/fourWebDetail_original')
const bcrypt = require('bcryptjs')
const TAG = 'dao::FourWebDetail'
class FourWebDetailOriginalDao {
  // 创建用管理员
  static async create(params) {
    await FourWebDetailOriginal.create(params)
    return true
  }

  static async bulkCreate(dataArr){
    console.log(TAG,JSON.stringify(dataArr));
      await FourWebDetailOriginal.bulkCreate(dataArr)
      return true
  }
  static async find(option){
    const {data} = option;
    return await FourWebDetailOriginal.findAll({
        where:data
    })

  }

  static async deleteItem(option){
    const {data} = option;
    return await FourWebDetailOriginal.destroy({
      where:{
        myId:data.myId
      }
    })
  }

}

module.exports = {
  FourWebDetailOriginalDao
}
