import { useState } from "react";
import DigitChooser from "../DigitChooser/DigitChooser";
import { generateToken } from "../../utils/tokenGenerator";

const SingleToken = () => {
    const [token, setToken] = useState("");
    const [digits, setDigits] = useState([]);
    const onDigitsSelected = (digits) => {
        setDigits(digits);
    };
    const onGenerateToken = () => {
        setToken(generateToken(digits));
    };
    return <div>
        <DigitChooser onDigitsSelected={onDigitsSelected} />
        <button onClick={onGenerateToken}>Generate Token</button>
        <input value={token} readOnly />
    </div>;
};

export default SingleToken;