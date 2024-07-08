import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.modules.scss';

const cx = classNames.bind(styles);
function AccountItem( { data } ) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src= {data.avatar}
                alt= {data.full_name}
                // fallback="https://icdn.24h.com.vn/upload/4-2023/images/2023-11-30/logo-24h-new-1701313347-933-widthheight.svg"
            />
            <div  className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />}
                    
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default AccountItem;
