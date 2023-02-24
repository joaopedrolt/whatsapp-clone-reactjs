import classNames from 'classnames';
import { useState, useRef } from 'react';

import styles from './Search.module.scss'

import SearchButton from 'src/assets/icons/search-sidebar-icon.jsx';
import ArrowSearchButton from 'src/assets/icons/arrow-search-icon';
import SearchCloseButton from 'src/assets/icons/search-close-icon.jsx';
import FilterButton from 'src/assets/icons/filter-icon.jsx';

function Search() {

    const [inputFocus, setInputFocus] = useState(false);
    const [inputValue, setValue] = useState('');

    const ref = useRef(null);

    const HandeInputFocus = () => {
        setInputFocus(true);
    }

    const HandeInputFocusOut = () => {
        setInputFocus(false);
    }

    const HandleInputChange = (e) => {
        setValue(e.target.value);
    }

    const HandleCloseButtonClick = () => {
        setValue('');
    }

    const HandleSearcButtonClick = () => {
        ref.current.focus();
    }

    const HandleArrowBackClick = () => {
        ref.current.blur();
        setValue('');
    }

    return (
        <div className={classNames(styles['search-container'], { [styles['search-container-active']]: inputFocus })}>
            <div className={styles['input-container']}>
                <SearchButton onClickFunction={HandleSearcButtonClick} className={styles['search-button']} />
                <ArrowSearchButton onClickFunction={HandleArrowBackClick} className={styles['arrow-search-button']} />
                <input ref={ref} onFocus={HandeInputFocus} onBlur={HandeInputFocusOut} value={inputValue} onChange={HandleInputChange} placeholder='Pesquisar ou começar uma nova conversa' />
                {inputValue.length > 0 ? <span onClick={HandleCloseButtonClick}><SearchCloseButton className={styles['search-close-icon']} /></span> : <></>}
            </div>
            <FilterButton fill={'#8696a0'} className={styles['filter-button']} />
        </div>
    )
}

export default Search;