class GetCurrentCounterValueUseCase {

    constructor(counterRepository) {
        this.counterRepository = counterRepository;
    }

    async handle() {
        try {
            const currentCounter = await this.counterRepository.getCurrentCounter();
            console.log(currentCounter.data)
            return currentCounter.data.value;
        } catch (error) {
            return `Erro durante a consulta do contador | ${error.message}`
        }
    }
}

module.exports = GetCurrentCounterValueUseCase;