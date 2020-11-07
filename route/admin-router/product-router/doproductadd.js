//formidable解析表单提交的文件数据
//下载模块
// cnpm install formidable --save
//引入模块
let fromidable = require("formidable")
let { Product } = require("../../../mongodb/product.js")
let path = require("path")

module.exports = (req, res) => {
    //1 创建一个表单解析对象
    let form = new fromidable.IncomingForm();
    //2配置上传文件存放位置,放置在public文件夹下面的uploads中
    form.uploadDir = path.join(__dirname, "../", "../", "../", "public", "uploads");
    // 3保存上传文件的代码
    form.keepExtensions = true;
    //4 解析表单
    form.parse(req, async(err, fields, files) => {
        // 文本内容
        // console.log(fields);
        console.log(files.pic.path.split("public")[1]);
        //数据库写入数据
        let result = await Product.create({
            title: fields.title,
            pic: files.pic.path.split("public")[1],
            cate_id: fields.cate_id,
            goods_id: fields.goods_id,
            postage: fields.postage,
            price: fields.price,
            content: files.content
        })
        if (result) {
            res.redirect("/admin/productlist")
        }
    })

    // console.log(req);
}