import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
}

export default GlobalStyles;
//chưa hiểu cái chỗ chilren này, làm sao mà nó lại css bao bọc được các thằng khác