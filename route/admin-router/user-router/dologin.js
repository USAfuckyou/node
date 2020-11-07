const { User } = require("../../../mongodb/user")
const md5 = require('md5')
module.exports = async(req, res) => {
    let userInfo = {
        username: req.body.username,
        password: md5(req.body.password)
    }

    let isUSer = await User.findOne({
        "username": req.body.username
    })

    let isPass = await User.findOne({
        "password": md5(req.body.password)
    })

    if (!isUSer) {
        res.send("<script>alert('用户不存在');location.href='/admin/login'</script>") //向页面发送过去这段js语句 它自己试别
    } else if (!isPass) {
        res.send("<script>alert('密码错误');location.href='/admin/login'</script>")
    } else {
        console.log(isPass);
        let isLogin = await User.find(userInfo)
        if (isLogin) {
            req.app.locals.username = req.body.username
            req.session.username = req.body.username
            res.redirect("/admin/userlist")
        }
    }

}