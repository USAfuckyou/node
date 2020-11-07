//添加用户界面
//使用db.js里的User模块来使用,按需暴露db的模块
const { User } = require("../../../mongodb/user")
module.exports = (req, res) => {
    res.render("./admin/adduser")
};