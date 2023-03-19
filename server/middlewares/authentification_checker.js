const jwt = require('jsonwebtoken')
const User = require('../models/user_model')
const dotenv = require('dotenv')
const localstorage = require('local-storage');

const verify = (access) => (req, res, next) => {
    if (localstorage('token')) {
        if (jwt.verify(localstorage('token'), process.env.SECRET)) {
            const token = jwt.verify(localstorage('token'), process.env.SECRET)
            if (access.includes(token.role)) {
                next()
            } else {
                res.json({ errmsg: 'anauthorised', statu: 401 })
            }
        } else {
            res.json({ errmsg: 'anauthenticated', statu: 402 })
        }

    } else {
        res.json({ errmsg: 'anauthenticated', statu: 402 })
    }
}

const postverif = (req, res, next) => {
    if (localstorage('token')) throw Error('you are loged in!!')
    next()
}




module.exports = { verify, postverif }




