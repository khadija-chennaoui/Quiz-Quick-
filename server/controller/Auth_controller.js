const User = require("../models/user");
const Role = require("../models/role");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require('express-validator');
const storage = require("local-storage");
const env = require('dotenv').config()

const register = async (req, res) => {
    const { body } = req;
    if (!body.name || !body.password || !body.email) throw Error("input non valide!");
    const email_existe = await User.findOne({ where: { email: body.email } });
    if (email_existe) throw Error("User déja existe");
    const hash_password = await bcrypt.hash(body.password, 10);
    const ProfRole = await Role.findOne({ name: "Prof" });
    const create_user = await User.create({
        ...body,
        password: hash_password,
        role_id: ProfRole.id,
    });
    if (!create_user) throw Error("l'ajout du client a echouee");
    res.status(200).json({
        create_user
    });
};

const login = async (req, res) => {
    const { body } = req;
    if (!body.password || !body.email) throw Error("inputs no valide!");
    const existe_user = await User.findOne({ where: { email: body.email } });
    if (!existe_user || !(await bcrypt.compare(body.password, existe_user.password))) throw Error("Email or Password inccorect");
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

// const validation = async (req, res) => {
//     const id = req.params.id;
//     const user = await User.findOne({ where: { id: id } });
//     if (!user) throw Error("User not found");
//     user.status = true;
//     user.save();
//     sendMail(user.email, "Compte verifier", "Votre compte à été accepté par notre admin vous pouvez maintenant accèder à notre plateforme ", "login", `http://127.0.0.1:5173/login`);
//     res.send("Compte valide");
// };

// const motDePasseOublier = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     };
//     const { body } = req;
//     const user = await User.findOne({ where: { email: body.email } });
//     if (!user) throw Error("User not found");
//     const token = jwt.sign({ id: user.id }, process.env.SECRET);
//     sendMail(user.email, "Mot de passe oublier", "Pour remodifier votre mot de passe veuillez cliquer sur le botton suivant", `http://127.0.0.1:5173/ressetPassword/${token}`, "cliquer ici");
//     res.send("Email envoyé");
// };

// const resetpassword = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     };
//     const token = req.params.token;
//     const { body } = req;
//     const reset = jwt.verify(token, process.env.SECRET);
//     const user = await User.findOne({ where: { id: reset.id } });
//     if (!body.password) throw Error("input non valide!");
//     const hash_password = await bcrypt.hash(body.password, 10);
//     user.password = hash_password;
//     user.save();
//     res.send("Mot de passe modifié");
// };

module.exports = {
    login,
    logout,
    register,
    verifyToken
};
