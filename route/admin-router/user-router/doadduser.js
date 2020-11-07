//点击添加用户提交表单
//按照需要引入db暴露的模块
const { User } = require("../../../mongodb/user")
const md5 = require('md5')
module.exports = async(req, res) => {
    // console.log(req.body); //接受Post返回的文本数据
    //创建一个新对象来规范一些从页面传来的req.body
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password),
        age: req.body.age,
        sex: req.body.sex,
        address: req.body.address
    }
    let result = await User.create(userInfo) //插入数据
    console.log(result);
    if (result) {
        res.redirect("/admin/userlist") //添加后重定向到用户列表
    }
}