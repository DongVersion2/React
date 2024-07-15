import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/872105b5155deff136f1e2673c4292a4.jpeg?lk3s=a5d48078&nonce=92148&refresh_token=b24f7357f94192e7e499eecfb4ab9032&x-expires=1721185200&x-signature=g407c9aAcaACL5VXE8aVxm%2Fpnko%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>David Dong</strong>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <p className={cx('name')}>David Đông</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
