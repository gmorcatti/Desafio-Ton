const UsersRepository = require('../repository/UsersRepository')
const usersRepository = new UsersRepository();

const CreateUserUseCase = require('../useCases/createUserUseCase')
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = require('./createUserController')

const GetUserUseCase = require('../useCases/getUserUseCase')
const getUserUseCase = new GetUserUseCase(usersRepository);
const getUserController = require('./getUserController')

exports.createUser = async (event, context) => {
    const { email, password } = event;
    return await createUserController(createUserUseCase, {
        email,
        password
    })
};

exports.getUser = async (event) => {
    return await getUserController(getUserUseCase, event.id)
};

