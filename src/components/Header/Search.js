import React, { useEffect, useRef } from 'react';
import {
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
  TestModalContainer,
  TestModalContent,
  TestModalSearch,
  TestModalTop,
  TestModalWrapper,
} from './SearchElements';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';


const Search = ({ onClose }) => {

  return (
    <ModalContainer>
      <ModalContainerSkin>
        {/* <TestModalContainer> */}
        <TestModalWrapper>
          <ModalHeader>
            <ModalHeaderSearch>
              <span>
                <SearchIcon color='disabled' fontSize='medium' />
              </span>
              <ModalHeaderInput placeholder='Seach' />
            </ModalHeaderSearch>
            <ModalCloseBtn onClick={onClose}>
              <CloseIcon fontSize='large' />
            </ModalCloseBtn>
          </ModalHeader>

          <ModalBody>
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
      </ModalContainerSkin>
    </ModalContainer>
  );
};

export default Search;