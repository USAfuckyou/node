const express = require("express")
const app = new express();
//body-parser是post相关联的
const bodyParser = require("body-parser")
const session = require("express-session")



//配置ejs模板引擎
app.set("view engine", "ejs");
//配置ejs模板文件所在路径
app.set("views", __dirname + "/views");
//配置静态资源
app.use(express.static("public"));
//使用body-pasrser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//上面两个bodyparser是固定的两种格式


app.use(session({
    secret: 'asdasfqwfqwf',
    resave: false, //是否强制保存session，默认是 true不保存
    saveUninitialized: true, //强制将未初始哈的session保存
    cookie: {
        //secure:true 指的是https协议
        maxAge: 30 * 60 * 1000
    },
    rolling: true //强制将cookie的过期时间重置
}))



//拦截（应用级中间件）
app.use((req, res, next) => { //多了个next
    if (req.url != "/admin/login" && req.url != "/admin/dologin" && !req.session.username) {
        res.redirect("/admin/login")
    } else {
        next()
    }
})

//引入自定义模块
const admin = require("./route/admin")
app.use("/admin", admin)


app.listen(9527, () => {
    console.log("9527GO!");
})