module.exports = async function(signInUseCase, user) {
    try {

        const token = await signInUseCase.handle(user);
        return {
            statusCode: 200,
            body: JSON.stringify({ token })
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