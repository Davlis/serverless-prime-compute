const response = require('./utils/response');

const NOT_VALID_NUMBER = () => {
    return { message: 'Provide valid number', status: 400 };
};

const RESTRICTED_NUMBER = () => {
    return { message: 'Not registered users have restriction to 1.000.000 number', status: 403 };
};

const PRIME_NUMBER = (number) => {
    return { message: `${number} is prime number.`, status: 200 };
};

const COMPLEX_NUMBER = (number) => {
    return { message: `${number} is complex number.`, status: 200 };
};

module.exports = {
    NOT_VALID_NUMBER,
    RESTRICTED_NUMBER,
    PRIME_NUMBER,
    COMPLEX_NUMBER,
};
