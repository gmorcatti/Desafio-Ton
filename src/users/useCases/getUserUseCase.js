class GetUserUseCase {

    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }

    async handle(id) {
        const user = await this.usersRepository.getById(id);

        return user
    }
}

module.exports = GetUserUseCase;