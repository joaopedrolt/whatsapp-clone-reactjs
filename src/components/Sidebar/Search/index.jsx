import classNames from 'classnames';
import { useState } from 'react';

import styles from './Search.module.scss'

import FilterIcon from '../../../assets/icons/filter-button.jsx';
import SearchIcon from '../../../assets/icons/search-button.jsx';
import ArrowSearchIcon from '../../../assets/icons/arrow-search-button';

function Search() {

    const [inputFocus, setInputFocus] = useState(false);

    const HandeInputFocus = () => {
        setInputFocus(true);
    }

    const HandeInputFocusOut = () => {
        setInputFocus(false);
    }

    return (
        <div className={styles['search-container']}>
            <SearchIcon className={classNames(styles['search-button'], {[styles['search-button-active']]: inputFocus})} />
            <ArrowSearchIcon className={classNames(styles['arrow-search-button'], {[styles['arrow-search-button-active']]: inputFocus})} />
            <input onBlur={HandeInputFocusOut} onFocus={HandeInputFocus} placeholder='Pesquisar ou começar uma nova conversa' />
            <FilterIcon fill={'#8696a0'} className={styles['filter-button']} />
        </div>
    )
}

export default Search;