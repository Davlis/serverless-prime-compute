const isNumber = (number) => {
    if (isNaN(number) || number <= 0) {
        return false;
    };

    return true;
};

const isNotRestrictedNumber = (number) => {
    return number < 1e7;
};

module.exports = {
    isNumber,
    isNotRestrictedNumber,
};
