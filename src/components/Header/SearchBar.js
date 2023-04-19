import React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ModalHeaderInput, ModalHeaderSearch } from './SearchElements'

const SearchBar = ({ onAddKeyword }) => {
    const [searchValue, setSearchValue] = useState('')
  
    const onChangeSearch = useCallback((e) => {
      setSearchValue(e.target.value)
    }, [])
  
    const onSubmit = useCallback(
      (e) => {
        e.preventDefault()
        onAddKeyword(searchValue)
        setSearchValue('')
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