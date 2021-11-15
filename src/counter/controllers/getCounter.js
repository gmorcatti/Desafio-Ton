module.exports = async function(getCurrentCounterValueUseCase) {
    try {

        const currentCounter = await getCurrentCounterValueUseCase.handle();
        
        return {
            statusCode: 200,
            body: JSON.stringify({
                value: currentCounter
            })
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