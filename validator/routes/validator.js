const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  const token = req.query.token;
  if (!token) {
    res.statusMessage = 'BAD_REQUEST';
    return res.status(400).end();
  }
  res.json({ isValid: validateToken(token) });
});

/**
 * Accepts a token and check if it is valid by Luhn's Algorithm
 * @param {*} token
 * @returns
 */
const validateToken = (token) => {
  const numberedToken = token.replace(/\D/g, '');
  const numbers = numberedToken.split('').map((item) => parseInt(item));

  for (let i = numbers.length - 2; i >= 0; i -= 2) {
    if (numbers[i] > 4) {
      numbers[i] *= 2;
      numbers[i] -= 9;
    } else {
      numbers[i] *= 2;
    }
  }

  let lastDigit = numbers.pop();
  const sum = numbers.reduce((total, current) => total + current, 0);
  return lastDigit === 10 - (sum % 10);
};

module.exports = router;
