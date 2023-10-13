import { STRINGS } from '../../utils/contants';
import styles from './Token.module.scss';
import PropTypes from 'prop-types';
const Token = ({ value }) => {
  return (
    <div className={styles.token}>{value ? value : STRINGS.DUMMY_TOKEN}</div>
  );
};
Token.propTypes = {
  value: PropTypes.string,
};
export default Token;
