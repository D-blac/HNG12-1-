const { processNumberLogic } = require('./numberUtils');

const processNumber = (req, res) => {
    processNumberLogic(req, res);
};

module.exports = { processNumber };