const axios = require('axios');
const { isPrime, isPerfect, isArmstrong, getParity, digitSum } = require('../utils/numberUtils');

const classifyNumber = async (req, res) => {
    const number = req.query.number;

    
    if (!number || isNaN(number)) {
        return res.status(400).json({ number, error: true });
    }

    const num = parseInt(number);
    const properties = [];
    let funFact = '';

   
    const armstrong = isArmstrong(num);
    if (armstrong) {
        properties.push('armstrong');

      
        const digits = num.toString().split('').map(Number);
        const power = digits.length;
        const calculation = digits.map(d => `${d}^${power}`).join(' + ');

        funFact = `${num} is an Armstrong number because ${calculation} = ${num}`;
    } else {
        try {
            // Fetch Fun Fact from Numbers API only if NOT Armstrong
            const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
            funFact = response.data.text;
        } catch (error) {
            funFact = 'Fun fact not available at the moment.';
        }
    }

    properties.push(getParity(num));

    res.status(200).json({
        number: num,
        is_prime: isPrime(num),
        is_perfect: isPerfect(num),
        properties,
        digit_sum: digitSum(num),
        fun_fact: funFact,
    });
};

module.exports = { classifyNumber };
