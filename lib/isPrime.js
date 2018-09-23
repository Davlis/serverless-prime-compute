const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }

    const sieve = Array(number + 1).fill(true);

    for (let i = 2; i <= Math.sqrt(number); ++i) {
        if (sieve[i]) {
            for (let j = i * i; j <= number; j += i) {
                sieve[j] = false;
            }
        }
    }

    return sieve[number];
};

module.exports = isPrime;
