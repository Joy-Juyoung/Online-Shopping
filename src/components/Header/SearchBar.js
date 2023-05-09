import { React, useState, useEffect, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ModalHeaderInput, ModalHeaderSearch } from './SearchElements'
import axios from '../../api/axios';

const SearchBar = ({ onAddKeyword }) => {
  const [searchValue, setSearchValue] = useState('')


//   const searched = searchData.filter((item) =>
//   item.kind.name.toLowerCase().includes(searchValue)
// );

  const onChangeSearch = useCallback((e) => {
    setSearchValue(e.target.value.toLowerCase())
  }, [])

  const onSubmit = useCallback((e) => {
      e.preventDefault()
      onAddKeyword(searchValue)
      setSearchValue('')
      // setSearchData()
    },
    [searchValue,onAddKeyword]
  )

  return (
    <>
        <ModalHeaderSearch>
            <span>
                <SearchIcon 
                    color='disabled'
                    fontSize='medium' />
            </span>
          <form onSubmit={onSubmit}>
                <ModalHeaderInput  
                    type="search" 
                    value={searchValue} 
                    onChange={onChangeSearch} 
                    placeholder='Seach'
                />
          </form>
        </ModalHeaderSearch>
    </>
  )
}

export default SearchBar;