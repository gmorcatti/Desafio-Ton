const UsersRepository = require('../repository/UsersRepository');
const usersRepository = new UsersRepository();

const CreateUserUseCase = require('../useCases/createUserUseCase');
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = require('./createUserController');

const GetUserUseCase = require('../useCases/getUserUseCase');
const getUserUseCase = new GetUserUseCase(usersRepository);
const getUserController = require('./getUserController');

const SignInUseCase = require('../useCases/signInUseCase');
const signInUseCase = new SignInUseCase(usersRepository);
const signInController = require('./signInController');

exports.createUser = async (event, context) => {
    const { email, password } = JSON.parse(event.body);

    return await createUserController(createUserUseCase, {
        email,
        password
    })
};

exports.getUser = async (event) => {
    const { id } = event.pathParameters;
    
    return await getUserController(getUserUseCase, id)
};

exports.signIn = async (event, context) => {
    const { email, password } = JSON.parse(event.body);

    return await signInController(signInUseCase, {
        email,
        password
    })
};
