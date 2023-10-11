import { useEffect, useState } from "react";
import DigitChooser from "../DigitChooser/DigitChooser";
import { generateToken } from "../../utils/tokenGenerator";
import { callValidateApi } from "../../utils/api";
import "./MultiToken.scss";
import Token from "../Token/Token";
import { STRINGS } from "../../utils/contants";

const MultiToken = () => {
    const [tokenCount, setTokenCount] = useState(0);
    const [validTokens, setValidTokens] = useState([]);
    const [digits, setDigits] = useState([]);
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        let intervalReference;
        if (isGenerating) {
            intervalReference = setInterval(executeGerneration, 200);
        }
        return () => clearInterval(intervalReference);
    }, [isGenerating]);

    const executeGerneration = async () => {
        const newToken = generateToken(digits);
        setTokenCount((previousCount) => previousCount + 1);
        const response = await callValidateApi(newToken);
        if (response?.data?.isValid) {
            setValidTokens((previousTokens) => [...previousTokens, newToken]);
        }
    };

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
        <div className="multi-token-container">
            <button disabled={digits.length < 2 || isGenerating} className="app-button" onClick={startGeneration}>{STRINGS.START_GENERATION}</button>
            <div className="token-container">
                {validTokens.map((token, index) => <div key={token + index}><Token value={token} /></div>)}
            </div>
            <div className="token-statistics">
                Total {tokenCount} / {validTokens.length} Valid Tokens
            </div>
            <button disabled={digits.length < 2 || !isGenerating} className="app-button" onClick={stopGeneration}>{STRINGS.STOP_GENERATION}</button>
        </div>

    </div>;
};

export default MultiToken;