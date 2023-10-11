import { useState } from "react";
import { STRINGS } from "../../utils/contants";
import "./DigitChooser.scss";
const DigitChooser = ({ onDigitsSelected }) => {
    const [digits, setDigits] = useState([
        { id: 0, label: '0', isChecked: false },
        { id: 1, label: '1', isChecked: false },
        { id: 2, label: '2', isChecked: false },
        { id: 3, label: '3', isChecked: false },
        { id: 4, label: '4', isChecked: false },
        { id: 5, label: '5', isChecked: false },
        { id: 6, label: '6', isChecked: false },
        { id: 7, label: '7', isChecked: false },
        { id: 8, label: '8', isChecked: false },
        { id: 9, label: '9', isChecked: false },
    ]);

    const handleDigitChange = (id) => {
        const newDigits = digits.map(digit =>
            digit.id === id
                ? { ...digit, isChecked: !digit.isChecked }
                : digit
        );
        const selectedDigits = newDigits.filter(item => item.isChecked);
        onDigitsSelected(selectedDigits.map(item => item.id));
        setDigits(newDigits);
    };

    return <div className="digit-chooser-container">
        <h4>{STRINGS.CHOOSE_DIGITS}</h4>
        <div className="digit-chooser">
            {digits.map((digit) => (
                <div key={digit.id}>
                    <div>{digit.label}</div>
                    <input
                        type="checkbox"
                        checked={digit.isChecked}
                        onChange={() => handleDigitChange(digit.id)}
                    />
                </div>
            ))}
        </div>
        <div className="divider">

        </div>

    </div>;
};

export default DigitChooser;