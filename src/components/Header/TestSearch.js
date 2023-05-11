import React, { useState, useEffect } from 'react';
import {
  DetailDelete,
  HeaderDelete,
  ModalBody,
  ModalBodyHeader,
  ModalBodyParagraph,
  ModalBodyPList,
  ModalBodyWrap,
  ModalCloseBtn,
  ModalContainer,
  ModalContainerSkin,
  ModalHeader,
  ModalHeaderInput,
  ModalHeaderSearch,
  ResultDetail,
  ResultHeader,
  ResultLink,
  ResultList,
  SearchResult,
  TestModalContainer,
  TestModalContent,
  TestModalSearch,
  TestModalTop,
  TestModalWrapper,
} from './SearchElements';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from './SearchBar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import axios from '../../api/axios';

const TestSearch = ({ onClose }) => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
    );

  const [searchData, setSearchData] = useState([])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const getSearchData = async () => {
    const dataList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('dataList', dataList?.data);
    setSearchData(dataList?.data);
    // setKeywords(dataList?.data);
  };

  useEffect(() => {
    getSearchData();
  },[]);
  
  const handleAddKeyword = (text) => {
    console.log('text', text);
    const newKeyword = {
      id: Date.now(),
      text: text,
    };
    setKeywords([newKeyword, ...keywords]);
  };

  const handleRemoveKeyword = (id) => {
    const nextKeyword = keywords.filter((thisKeyword) => {
      console.log('thisKeyword', thisKeyword);
      console.log('id', id);

      return thisKeyword.id !== id;
    });
    setKeywords(nextKeyword);
  };

  const handleClearKeywords = () => {
    setKeywords([]);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [onClose]);

  return (
    <ModalContainer>
      <ModalContainerSkin>
        {/* <TestModalContainer> */}
        <TestModalWrapper>
          <ModalHeader>
            <SearchBar 
              onAddKeyword={handleAddKeyword}
              onClose={onClose}
            />
            <ModalCloseBtn onClick={onClose}>
              <CloseIcon fontSize='large' />
            </ModalCloseBtn>
          </ModalHeader>

          <ModalBody>
            {keywords.length === 0 ? (
                    <ModalBodyWrap>
                        <ModalBodyHeader>
                            <h3>Popular</h3>
                        </ModalBodyHeader>
                        {/* {keywords.slice(0,10).map((l) => ( */}
                        {searchData.slice(0,10).map((l) => (
                          <ModalBodyParagraph key={l.id} >
                              <ModalBodyPList>
                              <p>{l.name}</p>
                              </ModalBodyPList>
                          </ModalBodyParagraph>
                      ))}
                    </ModalBodyWrap>
                ):(
                  <>
                    <SearchResult>
                        <ResultHeader>
                            <h3>Recent</h3>
                            {keywords.length ? (
                            <HeaderDelete onClick={handleClearKeywords}>Delete History</HeaderDelete>
                            ) : (
                                <HeaderDelete />
                            )}
                        </ResultHeader>
                        <ResultList>
                            {keywords.slice(0,10).map((k) => (
                              <ResultDetail key={k.id}>
                                    <ResultLink 
                                      onClick={onClose}
                                      to={`/products/search/${k.text}`}
                                      >
                                        <AccessTimeIcon sx={{ width: 24, height: 25 }} color='disabled' fontSize='small' />
                                        <p>{k.text}</p>
                                        <span>Keyword</span>
                                    </ResultLink>
                                    <DetailDelete className="removeBtn" type="button" onClick={() => handleRemoveKeyword(k.id)}>
                                        <CloseIcon sx={{ width: 14, height:14 }} color='disabled' fontSize='small' />
                                    </DetailDelete>
                                </ResultDetail>
                            ))                                
                            } 
                        </ResultList>
                    </SearchResult> 
                    <ModalBodyWrap>
                      <ModalBodyHeader>
                          <h3>Popular</h3>
                      </ModalBodyHeader>
                      {keywords.slice(0,10).map((l,index) => (
                      //{searchData.slice(0,10).map((l) => (  
                        <ModalBodyParagraph key={l.id} >                          
                            <ModalBodyPList>
                            {/* <strong> */}
                              <span>{index +1}</span>
                            {/* </strong> */}
                            <p>{l.text}</p>
                            </ModalBodyPList>
                            
                        </ModalBodyParagraph>
                        ))}
                      </ModalBodyWrap>
                </>
            )}        
           </ModalBody>
        </TestModalWrapper>
        <TestModalContainer onClick={onClose}></TestModalContainer>
        {/* </TestModalContainer> */}
      </ModalContainerSkin>
    </ModalContainer>
  );
};

export default TestSearch;
