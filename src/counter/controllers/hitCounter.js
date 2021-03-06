module.exports = async function(hitCounterUseCase) {
    try {

        await hitCounterUseCase.handle();
        return {
            statusCode: 200
        }

    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: error.message
            })
        }
    }
}