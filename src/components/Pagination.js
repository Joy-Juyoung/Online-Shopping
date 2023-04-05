import React from 'react';
import { useState } from 'react';
const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div></div>
    </div>
  );
};
export default Pagination;
