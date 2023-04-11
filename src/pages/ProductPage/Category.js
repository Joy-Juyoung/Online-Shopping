import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Categories, CategoriesWrap } from './ProductListElements';

const Category = ({ itemAllKinds, id }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (id === itemAllKinds.pk) {
      setIsActive(true);
    }
  }, [id]);
  return (
    <CategoriesWrap>
      <Categories
        style={{
          backgroundColor: isActive ? '' : '#0a0f18',
          color: isActive ? '' : '#fff',
        }}
      >
        All {itemAllKinds?.name}
      </Categories>
      {itemAllKinds?.productKinds?.map((kind) => {
        return (
          <Link
            key={kind?.pk}
            to={`/products/productAllChildKinds/${kind?.pk}`}
          >
            <Categories>{kind?.name}</Categories>
          </Link>
        );
      })}
    </CategoriesWrap>
  );
};

export default Category;
