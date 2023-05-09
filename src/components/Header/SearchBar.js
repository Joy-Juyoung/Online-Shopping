import { React, useState, useEffect, useCallback } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { ModalHeaderInput, ModalHeaderSearch } from './SearchElements'
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const SearchBar = ({ onAddKeyword,onClose }) => {
  const [searchValue, setSearchValue] = useState('')
  
  const [loading, setLoading] = useState(false);
  // const [searchData, setSearchData] = useState([])
  
  // const getSearchData = async () => {
  //   const dataList = await axios.get('/products/', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   console.log('dataList', dataList?.data);
  //   setSearchData(dataList?.data);
  //   // setKeywords(dataList?.data);
  // };

  const navigate = useNavigate();

  const onChangeSearch = useCallback((e) => {
    setSearchValue(e.target.value)
  }, [])

  const onSubmit = useCallback((e) => {
      e.preventDefault()
      // setLoading(true);
      onAddKeyword(searchValue)
      setSearchValue('')
      if (searchValue) {
        navigate(`/products/search/${searchValue}`);
      }
      // onClose();
      // setLoading(false);
    },
    [searchValue,onAddKeyword]
  )

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

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