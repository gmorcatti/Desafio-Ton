require('dotenv').config();

const { randomUUID } = require('crypto');
const dynamoose = require('dynamoose');

dynamoose.aws.sdk.config.update({
    region: process.env.AWS_DEFAULT_REGION_DYNAMO,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID_DYNAMO,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_DYNAMO,
});

const userSchema = new dynamoose.Schema({
    id: {
        type: 'string',
        hashKey: true,
        default: randomUUID()
    },
    email: {
        type: 'string',
        hashKey: false,
        required: true
    },
    password: {
        type: 'string',
        hashKey: false,
        required: true
    }
}, {
    saveUnknown: false,
    timestamps: true
});

module.exports = dynamoose.model('users_ton', userSchema);