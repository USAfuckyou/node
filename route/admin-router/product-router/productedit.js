let { Product } = require("../../../mongodb/product.js")
module.exports = async(req, res) => {
    let result = await Product.findOne({ "_id": req.query.id })
    console.log(result);
    res.render("./admin/product/productedit", {
        editDatas: result
    })
}