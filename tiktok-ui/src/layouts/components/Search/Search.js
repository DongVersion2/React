//phần thư viện
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper as PopperWrapper } from '~/components/Popper';

//phần thư viện
import * as searchService from '~/services/searchService';
import AccountItem from '~/components/AccountItem/';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    //để gán cho giá trị tìm kiếm
    const [searchValue, setSearchValue] = useState('');
    //để gán cho kết quả tìm kiếm
    const [searchResult, setSearchResult] = useState([]);
    //để hiển thị kết quả tìm kiếm
    const [showResult, setShowResult] = useState(false); //khởi tạo bằng true để visible mặc định bằng true
    //để sử dụng tính năng icon loading khi tìm kiếm
    const [loading, setLoading] = useState(false);
    //để lưu biến bên ngoài, mục đích để xóa
    const inputRef = useRef();
    //để sử dụng text cuối cùng, gửi request trong quá trình call api
    //dùng "debounce" thay thế "searchValue"
    //500 mili giây ở đây là thời gian chờ nhập text
    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            //trim là để xóa khoảng trắng đầu tiên của input tìm kiếm
            setSearchResult([]);
            return;
        }

        // setLoading(true);
        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();

        //cách call api thông thường
        //     fetch(
        //         `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        //             debouncedValue,
        //         )}&type=less`, //encodeURIComponent là hãm mã hóa kí tự đặc biệt
        //     )
        //         .then((res) => res.json())
        //         .then((res) => {
        //             setSearchResult(res.data);
        //             setLoading(false);
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // }, [debouncedValue]); //searchValue. khi người dùng gõ thì nó nhảy vào đây
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    //mục đích là ko cho người dùng nhập vào ô tìm kiếm
    //với kí tự space(dấu cách) khoảng trống đầu tiên
    const handleChange = (e) => {
        const searchValue = e.target.value;
        //phương thức !startsWith(' ') có nghĩa là k bắt đầu bằng 1 khoảng trắng
        //và .trim() để xóa đi khoảng trắng ở đầu và cuối
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        //sử dụng div ôm ngoài để khỏi sinh ra lỗi thư viện tippy
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0} //visiable thuộc tính quyết định có hiện hay ko
                className={cx('search-result')}
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                // onClickOutSide là 1 props của HeadlessTippy
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue &&
                        !loading && ( //có tồn tại text search thì mới hiển thị icon xóa
                            <button
                                className={cx('clear')}
                                onClick={handleClear}
                            >
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                ></FontAwesomeIcon>
                            </button>
                        )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        ></FontAwesomeIcon>
                    )}

                    <button
                        className={cx('search-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
