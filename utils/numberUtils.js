// Check if a number is prime
const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Check if a number is a perfect number
const isPerfect = (num) => {
    if (num < 2) return false;
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i;
            if (i !== num / i) sum += num / i;
        }
    }
    return sum === num;
};

// Check if a number is an Armstrong number
const isArmstrong = (num) => {
    const digits = num.toString().split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(parseInt(digit), power), 0);
    return sum === num;
};


const getParity = (num) => (num % 2 === 0 ? 'even' : 'odd');


const digitSum = (num) => {
    return num
        .toString()
        .split('')
        .reduce((acc, digit) => acc + parseInt(digit), 0);
};

module.exports = {
    isPrime,
    isPerfect,
    isArmstrong,
    getParity,
    digitSum,
};
