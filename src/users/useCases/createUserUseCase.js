const bcrypt = require('bcryptjs');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        const saltRounds = 10;

        bcrypt.hash(password, saltRounds, function(err, hash) {
            if(err) return reject(err);
            resolve(hash);
        });
    })
}

class CreateUserUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(user) {
        const userExists = await this.usersRepository.emailExists(user.email);
        
        if (userExists) throw new Error(`User ${user.email} already exists`);

        user.password = await hashPassword(user.password);

        const newUser = await this.usersRepository.create(user);

        delete newUser.password;
        
        return newUser
    }
}

module.exports = CreateUserUseCase;