import React from 'react';
import {
  ArrowKey,
  PageBtn,
  PagenationIndex,
  PagenationWrap,
  PaginationContainer,
} from './PaginationElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useState } from 'react';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  const [slideIndex, setSlideIndex] = useState(0);
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(5);

  const handleClick = (direction) => {
    if (direction === 'right') {
      setCurrentPage(currentPage + 1);
      if (currentPage === pages.length) {
        setCurrentPage(currentPage);
      }
      if (currentPage >= startNum + 5) {
        setStartNum(startNum + 5);
        setEndNum(endNum + 5);
      }
    } else {
      setCurrentPage(currentPage - 1);
      if (currentPage === 1) {
        setCurrentPage(currentPage);
      }
      if (currentPage === startNum + 1) {
        setStartNum(startNum - 5);
        setEndNum(endNum - 5);
      }
    }
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <PagenationWrap>
        <ArrowKey direction='left' onClick={() => handleClick('left')}>
          <KeyboardArrowLeftIcon />
        </ArrowKey>
        <PagenationIndex>
          {pages?.slice(startNum, endNum).map((page, index) => {
            return (
              <PageBtn
                key={index}
                onClick={() => setCurrentPage(page)}
                className={page === currentPage ? 'active' : ''}
              >
                {page}
              </PageBtn>
            );
          })}
        </PagenationIndex>
        <ArrowKey direction='right' onClick={() => handleClick('right')}>
          <KeyboardArrowRightIcon
          // direction='right'
          // onClick={() => handleClick('right')}
          />
        </ArrowKey>
      </PagenationWrap>
    </PaginationContainer>
  );
};

export default Pagination;
