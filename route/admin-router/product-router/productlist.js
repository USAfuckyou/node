//商品列表
const product = require("../../../mongodb/product.js")
let { Product } = require("../../../mongodb/product.js")
module.exports = async(req, res) => {
    //分页
    let page = Number(req.query.page) || 1 //如果没有传递参数 则默认等于1

    //每页多少条数据
    let size = Number(req.query.size) || 5

    //查询数据库中User总共有多少条数据
    let total = await Product.countDocuments({}) //数据库有多少数据 countDocuments

    console.log(total);
    let startpage = (page - 1) * size;

    //计算总的页数
    let totalPage = Math.ceil(total / size)

    //查询数据
    const result = await Product.find({}).limit(size).skip(startpage);
    console.log(result);


    res.render("./admin/product/productlist", {
        total: total, //总共多少数据
        page: page, //当前第几页
        size: size, //每页多少数据
        totalPage: totalPage, //总页数
        productListDatas: result
    })
}