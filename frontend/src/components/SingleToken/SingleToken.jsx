import { useState } from 'react';
import DigitChooser from '../DigitChooser/DigitChooser';
import { generateToken } from '../../utils/tokenGenerator';
import { callValidateApi } from '../../utils/api';
import './SingleToken.scss';
import { STRINGS } from '../../utils/contants';
import Token from '../Token/Token';

const SingleToken = () => {
  const [token, setToken] = useState('');
  const [digits, setDigits] = useState([]);
  const [message, setMesssage] = useState('');

  const onDigitsSelected = (digits) => {
    setDigits(digits);
  };
  const onGenerateToken = () => {
    setToken(generateToken(digits));
    setMesssage(STRINGS.DUMMY_VALIDATION_MESSAGE);
  };
  const onValidateToken = async () => {
    const response = await callValidateApi(token);
    if (response?.data?.isValid) {
      setMesssage(STRINGS.VALID_TOKEN);
    } else {
      setMesssage(STRINGS.INVALID_TOKEN);
    }
  };
  return (
    <div className="single-token-container">
      <DigitChooser onDigitsSelected={onDigitsSelected} />

      <div className="generate-token">
        <div className="flex-container">
          <button
            className="app-button"
            disabled={digits.length < 2}
            onClick={onGenerateToken}
          >
            {STRINGS.GENERATE_TOKEN}
          </button>
          <button
            className="app-button"
            disabled={!token || digits.length < 2}
            onClick={onValidateToken}
          >
            {STRINGS.VALIDATE_TOKEN}
          </button>
        </div>
        <div className="flex-container">
          <Token value={token} />
          <div className="message">
            {message ? message : STRINGS.DUMMY_VALIDATION_MESSAGE}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToken;
