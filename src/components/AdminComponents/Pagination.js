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
  const [startNum, setStartNum] = useState(0);
  const [endNum, setEndNum] = useState(5);

  console.log('currentPage', currentPage);
  const handleClick = (direction) => {
    if (direction === 'right') {
      setCurrentPage(currentPage + 1);
      setStartNum(startNum);
      setEndNum(endNum);

      if (currentPage === pages.length) {
        setCurrentPage(currentPage);
        setStartNum(startNum);
        setEndNum(endNum);
      }
      if (currentPage >= startNum + 5) {
        setStartNum(startNum + 5);
        setEndNum(endNum + 5);
      }
    } else if (direction === 'left' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // console.log('currentPage', currentPage);
      if (currentPage === 1) {
        setCurrentPage(1);
      }
      if (currentPage === startNum + 1) {
        setStartNum(startNum - 5);
        setEndNum(endNum - 5);
      }
    } else if (direction === 'rightToEnd') {
      // console.log('+', 0 + 5 * (pages.length / 5));
      // console.log('-', 5 + 5 * (pages.length / 5));
      if (pages.length / 5 <= 1) {
        setCurrentPage(pages.length);
        setStartNum(0);
        setEndNum(5);
      } else {
        setCurrentPage(pages.length);
        setStartNum(-4 + 5 * (pages.length / 5));
        setEndNum(+1 + 5 * (pages.length / 5));
      }
    } else {
      setCurrentPage(1);
      setStartNum(0);
      setEndNum(5);
    }
  };

  // console.log("pages.length", pages.length)

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <PagenationWrap>
        <ArrowKey
          direction='leftToFirst'
          onClick={() => handleClick('leftToFirst')}
        >
          <KeyboardDoubleArrowLeftIcon />
        </ArrowKey>
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
          <KeyboardArrowRightIcon />
        </ArrowKey>
        <ArrowKey
          direction='rightToEnd'
          onClick={() => handleClick('rightToEnd')}
        >
          <KeyboardDoubleArrowRightIcon />
        </ArrowKey>
      </PagenationWrap>
    </PaginationContainer>
  );
};

export default Pagination;
