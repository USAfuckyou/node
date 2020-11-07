const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {


    let page = req.query.page || 1

    //每页多少条数据
    let size = Number(req.query.size) || 5

    //查询数据库中User总共有多少条数据
    let total = await User.countDocuments({ "username": new RegExp(req.query.username, "gi") }) //数据库有多少数据 countDocuments

    console.log(total);
    let startpage = (page - 1) * size;

    //计算总的页数
    let totalPage = Math.ceil(total / size)


    //查询数据
    const result = await User.find({ "username": new RegExp(req.query.username, "gi") }).limit(size).skip(startpage);


    //查询数据--用户列表           用到了数据库操作 所以要引入
    res.render("./admin/searchuser", {
        userlists: result,
        total: total, //总共多少数据
        page: page, //当前第几页
        size: size, //每页多少数据
        totalPage: totalPage, //总页数
        username: req.query.username
    })
}