import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.modules.scss';

const cx = classNames.bind(styles);
function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b1bc0aeae3fffa46c02f1155138b911a~c5_100x100.jpeg?lk3s=a5d48078&nonce=37787&refresh_token=007796bb6a31260afd708c83fafa8955&x-expires=1720256400&x-signature=pvWo7n67%2BMHZyIl%2BrUH4gkbPd0A%3D&shp=a5d48078&shcp=81f88b70"
                alt="abc"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                {/* <span className={cx('username')}>nguyenvana</span> */}
            </div>
        </div>
    );
}

export default AccountItem;
