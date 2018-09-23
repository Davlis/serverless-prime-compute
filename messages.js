const response = require('./utils/response');

const NO_PARAMETER_PROVIDED = () => {
    return { message: 'Number parameter is required.', status: 400 };
};

const NOT_VALID_ARGUMENT_TYPE = () => {
    return { message: 'Provided argument is not a number.', status: 400 };
};

const NOT_POSITIVE = () => {
    return { message: 'Number is required to be positive', status: 400 }; 
};

const RESTRICTED_NUMBER = () => {
    return { message: 'Not registered users have restriction to 1.000.000 number.', status: 403 };
};

const PRIME_NUMBER = (number) => {
    return { message: `${number} is prime number.`, status: 200 };
};

const COMPLEX_NUMBER = (number) => {
    return { message: `${number} is complex number.`, status: 200 };
};

module.exports = {
    NO_PARAMETER_PROVIDED,
    NOT_VALID_ARGUMENT_TYPE,
    NOT_POSITIVE,
    RESTRICTED_NUMBER,
    PRIME_NUMBER,
    COMPLEX_NUMBER,
};
