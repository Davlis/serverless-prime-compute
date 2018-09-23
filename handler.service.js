const isPrime = require('./lib/isPrime');

const ValidatorService = require('./utils/validator.service');
const response = require('./utils/response');
const messages = require('./messages');

const HandlerService = (strategy, data, callback) => {
    try {
        ValidatorService(strategy, data);

        const prime = isPrime(data);

        if (prime) {
            return callback(null, response({ message: messages.PRIME_NUMBER(data).message }, messages.PRIME_NUMBER(data).status));
        }

        return callback(null, response({ message: messages.COMPLEX_NUMBER(data).message }, messages.COMPLEX_NUMBER(data).status));

    } catch (error) {
        console.log(error);
        return callback(null, response({ message: error.message }, error.status));
    }
};

module.exports = HandlerService;
