import { useEffect, useState } from "react";
import DigitChooser from "../DigitChooser/DigitChooser";
import { generateToken } from "../../utils/tokenGenerator";

const MultiToken = () => {
    const [tokenCount, setTokenCount] = useState(0);
    const [validTokens, setValidTokens] = useState([]);
    const [digits, setDigits] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        let intervalReference;
        if (isGenerating) {
            intervalReference = setInterval(() => {
                const newToken = generateToken(digits);
                setTokenCount((previousCount) => previousCount + 1);
                setValidTokens((previousTokens) => [...previousTokens, newToken]);
            }, 1000);

        }
        return () => clearInterval(intervalReference);
    }, [isGenerating]);

    const onDigitsSelected = (digits) => {
        setDigits(digits);
    };
    const startGeneration = () => {
        setIsGenerating(true);
    };
    const stopGeneration = () => {
        setIsGenerating(false);
    };
    return <div>
        <DigitChooser onDigitsSelected={onDigitsSelected} />
        <button onClick={startGeneration}>Start Generating...</button>
        <button onClick={stopGeneration}>Stop Generating...</button>
        <div>{tokenCount} / {validTokens.length}</div>
        <ul>
            {validTokens.map((token, index) => <li key={token + index}>{token}</li>)}
        </ul>
    </div>;
};

export default MultiToken;