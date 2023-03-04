import { useState, useRef } from 'react';

import styles from './Search.module.scss'

import SearchButton from 'src/assets/icons/search-sidebar-icon.jsx';
import ArrowSearchButton from 'src/assets/icons/arrow-back-search-icon.jsx';
import SearchCloseButton from 'src/assets/icons/search-close-icon.jsx';

import classNames from 'classnames';

function Search({ inputValue, setValue }) {
    const [inputFocus, setInputFocus] = useState(false);

    const ref = useRef(null);

    const HandeInputFocus = () => {
        setInputFocus(true);
    }

    const HandeInputFocusOut = () => {
        if (inputValue.length <= 0) {
            setInputFocus(false);
        }
    }

    const HandleInputChange = (e) => {
        setValue(e.target.value);
    }

    const HandleCloseButtonClick = () => {
        setValue('');
        ref.current.focus();
    }

    const HandleSearcButtonClick = () => {
        ref.current.focus();
    }

    const HandleArrowBackClick = () => {
        ref.current.blur();
        setInputFocus(false);
        setValue('');
    }

    return (
        <div className={classNames(styles['search-container'], { [styles['active']]: inputFocus })}>
            <div className={styles['input-container']}>
                <SearchButton onClickFunction={HandleSearcButtonClick} className={styles['search-button']} />
                <ArrowSearchButton onClickFunction={HandleArrowBackClick} className={styles['arrow-search-button']} />
                <input ref={ref} onFocus={HandeInputFocus} onBlur={HandeInputFocusOut} value={inputValue} onChange={HandleInputChange} placeholder='Pesquisar conversa' />
                {inputValue.length > 0 ? <span onClick={HandleCloseButtonClick}><SearchCloseButton className={styles['search-close-icon']} /></span> : <></>}
            </div>
        </div>
    )
}

export default Search;