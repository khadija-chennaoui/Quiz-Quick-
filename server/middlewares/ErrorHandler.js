const errorhandler = (error, req, res, next) => {
    res.json({ errmsg: error.message })
}

module.exports = errorhandler