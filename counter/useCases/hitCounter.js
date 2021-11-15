class HitCounterUseCase {

    constructor(counterRepository) {
        this.counterRepository = counterRepository;
    }

    async handle() {
        try {
            await this.counterRepository.hit();
            return 'Contador incrementado com sucesso'
        } catch (error) {
            throw new Error(`Erro durante o incremento do contador | ${error.message}`)
        }
    }
}

module.exports = HitCounterUseCase;