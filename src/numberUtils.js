const axios = require('axios');

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            sum += i + (i !== num / i ? num / i : 0);
        }
    }
    return sum === num && num !== 1;
};

const isArmstrong = (num) => {
    const digits = num.toString().split('').map(Number);
    const power = digits.length;
    return digits.reduce((acc, val) => acc + Math.pow(val, power), 0) === num;
};

const getParity = (num) => (num % 2 === 0 ? 'even' : 'odd');

const digitSum = (num) => num.toString().split('').reduce((acc, val) => acc + Number(val), 0);

const getFunFact = async (num) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${num}/math?json`, { timeout: 3000 });
        return response.data.text;
    } catch (error) {
        console.error('Numbers API error:', error.message);
        return 'Fun fact not available at the moment.';
    }
};

const processNumberLogic = async (req, res) => {
    const number = req.query.number;

    if (!number || isNaN(number)) {
        return res.status(400).json({ number: "alphabet", error: true });
    }

    const num = parseInt(number);
    const properties = [];
    let funFact = '';

    if (isArmstrong(num)) {
        properties.push('armstrong');
        const digits = num.toString().split('').map(Number);
        const power = digits.length;
        const calculation = digits.map(d => `${d}^${power}`).join(' + ');
        funFact = `${num} is an Armstrong number because ${calculation} = ${num}`;
    } else {
        funFact = await getFunFact(num);
    }

    properties.push(getParity(num));

    res.status(200).json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties: JSON.parse(JSON.stringify(properties)),
        digit_sum: digitSum(num),
        fun_fact: funFact,
    });
    
};

module.exports = { processNumberLogic };
