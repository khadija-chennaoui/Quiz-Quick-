const Role = require('../models/role')
const AddRole = async (req, res) => {
    const { body } = req
    const creat_role = await Role.create({ ...body })
    if (!creat_role) throw Error("l'ajout de role est echouee ")
    res.status(200).json({
        creat_role
    })
}
module.exports = {
    AddRole
}  