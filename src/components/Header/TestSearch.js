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

const TestSearch = ({ onClose }) => {
  const [keywords, setKeywords] = useState(
    JSON.parse(localStorage.getItem('keywords') || '[]')
  );

  // useEffect(() => {
  //     if (typeof window !== 'undefined') {
  //       const result = localStorage.getItem('keywords') || '[]'
  //       setKeywords(JSON.parse(result))
  //     }
  //   }, [])

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

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
      // if (!ref.current && ref.current.contains(e.target)) {
      //   onClose();
      // }
      // if (ref.current.contains(e.target)) {
      //   onClose();
      // }
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
            <SearchBar onAddKeyword={handleAddKeyword} />
            <ModalCloseBtn onClick={onClose}>
              <CloseIcon fontSize='large' />
            </ModalCloseBtn>
          </ModalHeader>

          <ModalBody>
            <SearchResult>
              <ResultHeader>
                <h3>Recent</h3>
                {keywords.length ? (
                  <HeaderDelete onClick={handleClearKeywords}>
                    Delete History
                  </HeaderDelete>
                ) : (
                  <HeaderDelete />
                )}
              </ResultHeader>
              <ResultList>
                {keywords.length ? (
                  keywords.map((k) => (
                    <ResultDetail key={k.id}>
                      <ResultLink>
                        <AccessTimeIcon
                          sx={{ width: 24, height: 25 }}
                          color='disabled'
                          fontSize='small'
                        />
                        <p>{k.text}</p>
                        <span>Keyword</span>
                      </ResultLink>
                      <DetailDelete
                        className='removeBtn'
                        type='button'
                        onClick={() => handleRemoveKeyword(k.id)}
                      >
                        <CloseIcon
                          sx={{ width: 14, height: 14 }}
                          color='disabled'
                          fontSize='small'
                        />
                      </DetailDelete>
                    </ResultDetail>
                  ))
                ) : (
                  //     <ModalBodyWrap>
                  //     <ModalBodyHeader>
                  //         <h3>Popular</h3>
                  //     </ModalBodyHeader>
                  //     <ModalBodyParagraph>
                  //     <ModalBodyPList>
                  //       <p>Top</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>Button</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>Outer</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>Shoes</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>Accessories</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>육회</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>해물찜</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>누룽지탕</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>문어숙회</p>
                  //     </ModalBodyPList>
                  //     <ModalBodyPList>
                  //       <p>나도줘</p>
                  //     </ModalBodyPList>
                  //   </ModalBodyParagraph>
                  // </ModalBodyWrap>
                  <div>최근 검색어가 없습니다</div>
                )}
              </ResultList>
            </SearchResult>
            <ModalBodyWrap>
              <ModalBodyHeader>
                <h3>Popular</h3>
              </ModalBodyHeader>
              <ModalBodyParagraph>
                <ModalBodyPList>
                  <p>Top</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Button</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Outer</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Shoes</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>Accessories</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>육회</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>해물찜</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>누룽지탕</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>문어숙회</p>
                </ModalBodyPList>
                <ModalBodyPList>
                  <p>나도줘</p>
                </ModalBodyPList>
              </ModalBodyParagraph>
            </ModalBodyWrap>
          </ModalBody>
        </TestModalWrapper>
        <TestModalContainer onClick={onClose}></TestModalContainer>
        {/* </TestModalContainer> */}
      </ModalContainerSkin>
    </ModalContainer>
  );
};

export default TestSearch;