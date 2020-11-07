const express = require("express"); //必须
//创建路由对象
const router = express.Router();
//引入登录模块


//配置路由

//登录页面
router.get("/login", require("./admin-router/user-router/login"));

//点击登录按钮
router.post("/dologin", require("./admin-router/user-router/dologin"));


//用户列表
router.get("/userlist", require("./admin-router/user-router/userlist"));


//添加用户
router.get("/adduser", require("./admin-router/user-router/adduser"));
//添加用户提交数据的地址，（提交按钮之后进行的操作）
router.post("/doadduser", require("./admin-router/user-router/doadduser"));




//删除用户
router.post("/deleteuser", require("./admin-router/user-router/deleteuser"))







//修改用户
router.get("/edituser", require("./admin-router/user-router/edituser"));
//点击确定修改提交数据更新数据库
router.post("/doedituser", require("./admin-router/user-router/doedituser"))





//用户搜索路由
router.get("/searchuser", require("./admin-router/user-router/searchuser"));

// 退出登录
router.get("/logout", (req, res) => {
    req.session.destroy()
    res.redirect("/admin/user-router/login")
})



//商品列表
router.get("/productlist", require("./admin-router/product-router/productlist"));

//添加商品
router.get("/productadd", require("./admin-router/product-router/productadd"));
// 用户点击添加商品按钮
router.post("/doproductadd", require("./admin-router/product-router/doproductadd"))

//修改商品
router.get("/productedit", require("./admin-router/product-router/productedit"));
//点击修改商品
router.post("/doproductedit", require("./admin-router/product-router/doproductedit"))

module.exports = router