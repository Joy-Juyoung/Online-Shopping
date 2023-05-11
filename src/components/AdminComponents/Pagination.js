import React from 'react';
import { PageBtn, PaginationContainer } from './PaginationElements';

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      {pages.map((page, index) => {
        return (
          <PageBtn
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </PageBtn>
        );
      })}
    </PaginationContainer>
  );
};

export default Pagination;
