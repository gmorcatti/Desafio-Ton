const bcrypt = require('bcryptjs');

class SignInUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(user) {
        const userExists = await this.usersRepository.emailExists(user.email);
        
        if (!userExists) throw new Error(`User ${user.email} not exists`);

        const dbUser = await this.usersRepository.getByEmail(user.email);

        const passwordMatch = await bcrypt.compare(user.password, dbUser[0].password);
        if(!passwordMatch) throw new Error('Incorrect Password');

        const token = await this.usersRepository.signin(user.email);
        return token
    }
}

module.exports = SignInUseCase;