class CreateUserUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(user) {
        const userExists = await this.usersRepository.emailExists(user.email);
        
        if (userExists) throw new Error(`User ${user.email} already exists`)

        const newUser = await this.usersRepository.create(user);
        return newUser
    }
}

module.exports = CreateUserUseCase;