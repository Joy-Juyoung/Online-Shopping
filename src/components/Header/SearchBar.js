import { React, useState, useEffect, useCallback } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ModalHeaderInput, ModalHeaderSearch } from './SearchElements';
import axios from '../../api/axios';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';

const SearchBar = ({ onAddKeyword, onClose, onKeyPress }) => {
  const [searchValue, setSearchValue] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeSearch = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // setLoading(true);
      onAddKeyword(searchValue);
      setSearchValue('');
      if (searchValue) {
        navigate(`/products/search/${searchValue}`);
      }
      // onClose();
      onKeyPress();
    },
    [searchValue, onAddKeyword]
  );

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
          <SearchIcon color='disabled' fontSize='medium' />
        </span>
        <form
          // onClick={onClose}
          onSubmit={onSubmit}
        >
          <ModalHeaderInput
            type='search'
            value={searchValue}
            onChange={onChangeSearch}
            placeholder='Search'
          />
        </form>
      </ModalHeaderSearch>
    </>
  );
};

export default SearchBar;
