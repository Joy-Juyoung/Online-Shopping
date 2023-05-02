import { React, useState, useEffect, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ModalHeaderInput, ModalHeaderSearch } from './SearchElements'
import axios from '../../api/axios';

const SearchBar = ({ onAddKeyword }) => {
  const [searchValue, setSearchValue] = useState('')
  const [searchData, setSearchData] = useState([])

  const getSearchData = async () => {
    const dataList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('dataList', dataList?.data);
    setSearchData(dataList?.data);
  };

  useEffect(() => {
    getSearchData();
    // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  },[searchValue]);

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