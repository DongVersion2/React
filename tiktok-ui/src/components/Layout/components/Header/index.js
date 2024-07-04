import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, fa, faMagnifyingGlass  } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Header() {
    console.log(images.logo);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                        <img src={images.logo} alt='Tiktok'/>
                </div>
                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false}/>
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon>
                    <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
