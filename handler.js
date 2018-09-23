const validators = require('./validator.strategy');
const extractNumber = require('./utils/extract-number');
const HandlerService = require('./handler.service');

const publicCompute = (event, context, callback) => {
    const strategy = validators.public
    HandlerService(strategy, extractNumber(event), callback);
};

const privateCompute = (event, context, callback) => {
    const strategy = validators.private
    HandlerService(strategy, extractNumber(event), callback);
};

module.exports = {
    publicCompute,
    privateCompute,
};
