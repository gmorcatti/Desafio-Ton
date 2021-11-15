module.exports = async function(getUserUseCase, id) {
    try {

        const user = await getUserUseCase.handle(id);
        return {
            statusCode: 200,
            body: JSON.stringify(user)
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