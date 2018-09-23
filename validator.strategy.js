const validators = require('./validators');
const messages = require('./messages')

const public = [
    {
        validate: validators.isNumberArgumentProvided,
        messageOnFail: messages.NO_PARAMETER_PROVIDED,
    },
    {
        validate: validators.isNumber,
        messageOnFail: messages.NOT_VALID_ARGUMENT_TYPE,
    },
    {
        validate: validators.isPositive,
        messageOnFail: messages.NOT_POSITIVE,
    },
    {
        validate: validators.isNotRestrictedNumber,
        messageOnFail: messages.RESTRICTED_NUMBER,
    },
];

const private = [
    {
        validate: validators.isNumberArgumentProvided,
        messageOnFail: messages.NO_PARAMETER_PROVIDED,
    },
    {
        validate: validators.isNumber,
        messageOnFail: messages.NOT_VALID_ARGUMENT_TYPE,
    },
    {
        validate: validators.isPositive,
        messageOnFail: messages.NOT_POSITIVE,
    },
];

module.exports = {
    public,
    private,
};
