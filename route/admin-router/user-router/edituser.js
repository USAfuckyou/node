//修改
const { User } = require("../../../mongodb/user")
module.exports = async(req, res) => {
    console.log(req.query); //get提交一般用的到
    let result = await User.findOne({ "_id": req.query.id })
    res.render("./admin/edituser", {
        editData: result
    })
}