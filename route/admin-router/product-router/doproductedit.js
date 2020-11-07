let { Product } = require("../../../mongodb/product.js")
let formidable = require("formidable")
let path = require("path")
module.exports = (req, res) => {
    //1 创建一个表单解析对象
    let form = new formidable.IncomingForm();
    //2配置上传文件存放位置,放置在public文件夹下面的uploads中
    form.uploadDir = path.join(__dirname, "../", "../", "../", "public", "uploads");
    // 3保存上传文件的代码
    form.keepExtensions = true;
    //4 解析表单
    form.parse(req, async(err, fields, files) => {
        // console.log(files.pic.name); //根据files.pic.name是否为空来判断是否修改了图片，为空没有修改图片，否则就是修改了图片
        console.log(fields);
        if (!files.pic.name) {
            var result = await Product.updateOne({ "_id": req.query.id }, {
                title: fields.title,
                postage: fields.postage,
                price: fields.price,
            })
        } else if (files.pic.name) {
            var result = await Product.updateOne({ "_id": req.query.id }, {
                title: fields.title,
                pic: files.pic.path.split("public")[1],
                postage: fields.postage,
                price: fields.price,
            })
        }
        if (result) {
            res.redirect("/admin/productlist")
                // console.log(result);
        }


        //数据库写入数据
        // let result = await Product.create({
        //     title: fields.title,
        //     pic: files.pic.path.split("public")[1],
        //     cate_id: fields.cate_id,
        //     goods_id: fields.goods_id,
        //     postage: fields.postage,
        //     price: fields.price,
        //     content: files.content
        // })

    })
}