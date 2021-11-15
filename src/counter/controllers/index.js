const CounterRepository = require('../repository/CounterRepository')
const counterRepository = new CounterRepository();

const HitCounterUseCase = require('../useCases/hitCounter')
const hitCounterUseCase = new HitCounterUseCase(counterRepository);
const hitCounterController = require('./hitCounter')

const GetCurrentCounterValueUseCase = require('../useCases/getCurrentCounterValue')
const getCurrentCounterValueUseCase = new GetCurrentCounterValueUseCase(counterRepository);
const getCounterController = require('./getCounter')

exports.hitCounter = async (event, context) => {
    return await hitCounterController(hitCounterUseCase)
};

exports.getCounter = async () => {
    return await getCounterController(getCurrentCounterValueUseCase)
};

