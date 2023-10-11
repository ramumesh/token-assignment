import { TOKEN_LENGTH } from "./contants";


export const generateToken = (digits) => {
    const min = 1;
    const max = digits.length;
    let count = 1;
    let token = "";
    for (let i = 0; i < TOKEN_LENGTH; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        token += digits[randomNumber - 1].toString();
        if (count === 4 && i + 1 !== TOKEN_LENGTH) {
            token += "-";
            count = 1;
        } else {
            count += 1;
        }
    }
    return token;
};

