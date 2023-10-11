import { STRINGS } from "../../utils/contants";
import styles from "./Token.module.scss";
const Token = ({ value }) => {
    return <div className={styles.token}>
        {value ? value : STRINGS.DUMMY_TOKEN}
    </div>;
};

export default Token;