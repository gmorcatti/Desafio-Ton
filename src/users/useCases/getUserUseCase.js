class GetUserUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(id) {
        const user = await this.usersRepository.getById(id);

        user.forEach(element => {
            delete element.password;
        })

        return user
    }
}

module.exports = GetUserUseCase;