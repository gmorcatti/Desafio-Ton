require('dotenv').config();

const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

exports.generateToken = data => {
    const jsonToSign = {
        email: data.email
    }
    
    const token = jwt.sign(jsonToSign, SECRET_KEY);
    return token;
}
