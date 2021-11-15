module.exports = async function(createUserUseCase, user) {
    try {

        const newUser = await createUserUseCase.handle(user);
        return {
            statusCode: 200,
            body: JSON.stringify(newUser)
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