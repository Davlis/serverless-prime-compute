const validators = require('./validators');
const messages = require('./messages')

const public = [
    {
        validate: validators.isNumber,
        messageOnFail: messages.NOT_VALID_NUMBER,
    },
    {
        validate: validators.isNotRestrictedNumber,
        messageOnFail: messages.RESTRICTED_NUMBER,
    },
];

const private = [
    {
        validate: validators.isNumber,
        messageOnFail: messages.NOT_VALID_NUMBER,
    },
];

module.exports = {
    public,
    private,
};
