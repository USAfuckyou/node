const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/hg-admin", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { //这里还需要两个参数
    console.log("数据库链接成功");
}).catch(err => {
    console.log(err);
    console.log("数据库链接失败");
})