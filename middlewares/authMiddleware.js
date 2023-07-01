const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: "Unauthorized",
                })

            }
            else {
                req.body.userId = decode.id;
                next();
            }
        })
    }
    catch (error) {
        console.log(error);
    }

};