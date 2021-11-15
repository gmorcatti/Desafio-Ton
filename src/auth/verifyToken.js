const jwt = require('jsonwebtoken');
require('dotenv').config();

const generatePolicy = (principalId, effect, resource) => {
    const authResponse = {
        principalId: principalId
    };

    if (effect && resource) {
        const statementOne = {
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: resource
        };

        const policyDocument = {
            Version: '2012-10-17',
            Statement: [
                statementOne
            ]
        };

        authResponse.policyDocument = policyDocument;
    }
    return authResponse;
}

exports.verifyToken = async function (event, context, callback) {
    const token = event.authorizationToken;

    if(!token) return callback('Unauthorized');

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return callback('Unauthorized');

        return callback(null, generatePolicy(decoded.email, 'Allow', event.methodArn))
    });
}