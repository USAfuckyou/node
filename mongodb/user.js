const mongoose = require("mongoose");
require("./dataBase")

//创建集合规则()
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "用户名不能为空"], //意思是必填项
        minlenth: 2, //最小长度
        maxlength: 18, //最大长度
        trim: true //过滤空格
    },
    password: {
        type: String,
        required: [true, "密码不能为空"], //意思是必填项
        minlenth: 6, //最小长度
        maxlength: 100, //最大长度
        trim: true //过滤空格
    },
    sex: {
        type: String,
        required: [true, "性别不能为空"],
        enum: { //可选项
            values: ["男", "女", "保密"]
        },
        message: "亲选择正确的性别"
    },
    age: {
        type: Number,
        min: 12,
        max: 100,
    },
    address: {
        type: String
    }
})

//使用集合规则创建集合
const User = mongoose.model("User", UserSchema)
    // const User2 = mongoose.model("User", UserSchema)

//暴露
module.exports = {
    User
    // User2
}