require('dotenv').config();
const jwt = require('jsonwebtoken');

const { randomUUID } = require('crypto');

const User = require('../model/users');

class UsersRepository {
    async create(user) {
        user.id = randomUUID();

        return await User.create(user);
    };
    
    async getByEmail(email) {
        return await User.scan('email').contains(email).exec();
    };

    async getById(id) {
        return await User.scan('id').contains(id).exec();
    }

    async emailExists(email) {
        const user = await this.getByEmail(email);
        return user.length > 0;
    }

    async signin(email) {
        const SECRET_KEY = process.env.JWT_SECRET;

        const jsonToSign = { email };
        
        const token = jwt.sign(jsonToSign, SECRET_KEY);
        return token;
    }
}

module.exports = UsersRepository;