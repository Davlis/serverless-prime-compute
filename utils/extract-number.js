const extractNumber = (event) => {
    const { queryStringParameters } = event;

    if (queryStringParameters && queryStringParameters.number) {
        return Number(queryStringParameters.number);
    }

    return null;
};

module.exports = extractNumber;
