import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a>
                    <svg xmlns="http://www.w3.org/2000/svg" width={118} height={42} fill="currentColor" alt="TikTok"><use xlinkHref="#logo-dark-c4561408" /></svg>
                    <strong>TikTok</strong>
                    </a>
                </div>
                <div className={cx('search')}>
                    
                </div>
            </div>
        </header>
    );
}

export default Header;
