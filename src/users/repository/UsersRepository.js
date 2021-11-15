require('dotenv').config();

const User = require('../model/users');

class UsersRepository {
    async create(user) {
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
}

module.exports = UsersRepository;