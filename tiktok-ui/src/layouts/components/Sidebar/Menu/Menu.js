//PropTypes để kiểm tra dữ liệu của children
import PropTypes from 'prop-types';
function Menu({ children }) {
    return <nav>{children}</nav>;
}

Menu.propsType = {
    children: PropTypes.node.isRequired,
};
export default Menu;
