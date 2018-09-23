const ValidatorService = (validators, data) => {
    validators.forEach(v => {
        if (!v.validate(data)) {
            throw v.messageOnFail(data);
        }
    });
};

module.exports = ValidatorService;
