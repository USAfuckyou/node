//用户列表模块
//引入数据库
const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {

    //查询数据  （分页）

    //http://localhost:9527/admin/userlist?page=1&size=10  //page代表请求第几页数据  size表示每页显示多少条数据
    //接受前端传递过来的页数，代表前端请求那一页的数据
    let page = Number(req.query.page) || 1 //如果没有传递参数 则默认等于1

    //每页多少条数据
    let size = Number(req.query.size) || 5

    //查询数据库中User总共有多少条数据
    let total = await User.countDocuments({}) //数据库有多少数据 countDocuments

    console.log(total);
    let startpage = (page - 1) * size;

    //计算总的页数
    let totalPage = Math.ceil(total / size)


    //查询数据
    const result = await User.find({}).limit(size).skip(startpage);


    //查询数据--用户列表             用到了数据库操作 所以要引入
    res.render("./admin/userlist", {
        userlists: result,
        total: total, //总共多少数据
        page: page, //当前第几页
        size: size, //每页多少数据
        totalPage: totalPage //总页数
    })
}