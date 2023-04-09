const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const storage = require("local-storage");
const env = require('dotenv').config()

const register = async (req, res) => {
    const { body } = req;
    if (!body.name || !body.password || !body.email || !body.phone) throw Error("input non valide!");
    const email_existe = await User.findOne({ email: body.email });
    if (email_existe) throw Error("User déja existe");
    const hash_password = await bcrypt.hash(body.password, 10);
    const ProfRole = await Role.findOne({ name: "Prof" });
    const create_user = await User.create({
        ...body,
        password: hash_password,
        role_id: ProfRole.id,
    });
    if (!create_user) throw Error("l'ajout du client a echouee");
    res.status(200).json("Etudiant added");
}

const login = async (req, res) => {
    const { body } = req;
    if (!body.password || !body.email) throw Error("inputs no valide!");
    const existe_user = await User.findOne({ email: body.email });
    console.log(existe_user)
    if (!existe_user || !(await bcrypt.compare(body.password, existe_user.password))) throw Error("Incorrect username or password provided");
    else {
        const creatToken = await jwt.sign(
            {
                id: existe_user.id,
            },
            process.env.SECRET
        );
        storage("token", creatToken);
        const role = existe_user.role_id
        res.status(200).json({ role, creatToken, token: storage("token") });
    }
};
const verifyToken = async (req, res) => {
    const token = req.params.token;
    const id = jwt.verify(token, process.env.SECRET);
    const user = await User.findOne({ where: { id: id.id } })
    res.json({ role: user.roleId })
}

const logout = (req, res) => {
    storage.remove("token");
    res.send({ message: "User is logouted" });
};
const AllUser = async(req, res) => {
    const All = await User.find()
    if (!All) throw Error('No user existe')
    res.status(200).json(All)
}
const Delete = async (req, res) => {
    const {id} = req.params
        const DeletUser = await User.findByIdAndDelete({ _id: id });
    if (DeletUser) res.json({ mes: "deleted" })
    else throw Error('notfind')
    // res.json({mes:"deleted"})
}



module.exports = {
    login,
    logout,
    register,
    verifyToken,
    AllUser,
    Delete
};
