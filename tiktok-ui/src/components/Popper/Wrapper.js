import classNames from "classnames/bind";
import styles from './Proper.module.scss'

const cx = classNames.bind(styles);

function Wrapper( { children } ) {
    return ( 
        <div className={cx('wrapper')}>
            { children }
        </div>
     );
}

export default Wrapper;
//việc tạo children con này nhằm mục đích là để cho phép component này nhận
//và hiển thị nội dung con (children content) được truyền vào từ bên ngoài
//Wrapper component tạo ra ở đây chủ yếu để bao bọc submenu