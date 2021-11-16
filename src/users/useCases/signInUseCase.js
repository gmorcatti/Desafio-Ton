class SignInUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(user) {
        const userExists = await this.usersRepository.emailExists(user.email);
        
        if (!userExists) throw new Error(`User ${user.email} not exists`);

        const dbUser = await this.usersRepository.getByEmail(user.email);
        console.log('USER', user, ' ||||||| ', 'db', dbUser[0]);
        if(dbUser[0].password !== user.password) throw new Error('Incorrect Password');

        const token = await this.usersRepository.signin(user.email);
        return token
    }
}

module.exports = SignInUseCase;