const jwt = require("jsonwebtoken")

const verifyIsLoggedIn = (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) {
            return res.status(403).send("You must be logged in to access this page")
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
            req.user = decoded
            next()
        } catch (err) {
            return res.status(401).send("Invalid Token")
        }
    } catch (err) {
        next(err)
    }
}

const verifyIsAdmin = (req, res, next) => {
    if (req.user.isAdmin && req.user ) {
        next()
    }
    else {
        return res.status(403).send("You must be an admin to access this page")
    }
}

module.exports = { verifyIsLoggedIn, verifyIsAdmin }
