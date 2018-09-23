const response = (rawBody, statusCode) => ({
    statusCode: statusCode || 200,
    body: JSON.stringify(rawBody || { message: 'Internal error' }),
});

module.exports = response;
