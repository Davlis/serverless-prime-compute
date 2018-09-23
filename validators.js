const isNumberArgumentProvided = (number) => {
    return number !== null;
}

const isNumber = (number) => {
    return !isNaN(number) && typeof number === 'number';
};

const isPositive = (number) => {
    return number > 0;
}

const isNotRestrictedNumber = (number) => {
    return number < 1e7;
};

module.exports = {
    isNumberArgumentProvided,
    isNumber,
    isPositive,
    isNotRestrictedNumber,
};
