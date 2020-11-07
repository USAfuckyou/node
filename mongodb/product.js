const mongoose = require("mongoose");
require("./dataBase")

//创建集合规则()
const ProductSchema = new mongoose.Schema({
    title: { //标题
        type: String,
        required: [true, "标题名不能为空"], //意思是必填项
        trim: true //过滤空格
    },
    pic: { //缩略图
        type: String
    },
    postage: { //邮费
        type: String
    },
    cate_id: { //一级分类id
        type: String
    },
    goods_id: { //二级分类id
        type: String
    },
    price: { //价格
        type: String
    },
    content: { //详情内容
        type: String
    }
})

//使用集合规则创建集合
const Product = mongoose.model("Product", ProductSchema)

//暴露
module.exports = {
    Product
}