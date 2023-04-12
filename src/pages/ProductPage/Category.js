import React from 'react';
import { Link } from 'react-router-dom';
import { Categories, CategoriesWrap } from './ProductListElements';

const Category = ({ pId, cName, cId, getAllKinds }) => {
  return (
    <CategoriesWrap>
      {!cId ? (
        <Categories
          style={{
            backgroundColor: '#0a0f18',
            color: '#fff',
          }}
        >
          All {getAllKinds?.name}
        </Categories>
      ) : (
        <Categories>
          <Link to={`/products/productAllParentsKinds/${pId}`}>
            All {getAllKinds.name}
          </Link>
        </Categories>
      )}
      {getAllKinds?.productKinds?.map((kind) => {
        return (
          <Link
            key={kind?.pk}
            to={`/products/productAllParentsKinds/${pId}/${kind?.name}/${kind?.pk}`}
          >
            {kind.name === cName ? (
              <Categories
                style={{
                  backgroundColor: '#0a0f18',
                  color: '#fff',
                }}
              >
                {kind?.name}
              </Categories>
            ) : (
              <Categories>{kind?.name}</Categories>
            )}
          </Link>
        );
      })}
    </CategoriesWrap>
  );
};

export default Category;
