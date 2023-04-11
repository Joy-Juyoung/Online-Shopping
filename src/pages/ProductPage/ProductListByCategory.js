import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ProductsList,
  ListMid,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  ListTop,
  ListMidWrap,
  CategoriesWrap,
  Categories,
  TotalCountWrap,
  TotalCount,
  SelectWrap,
  CategoriesInside,
} from './ProductListElements';

import Loading from '../../components/Loading';
import ProductsCard from './ProductCard';
import SideFilter from './SideFilter';
import Category from './Category';
// const TestProduct_URL = '/products/productAllChildKinds/${id}';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const ProductListByCategory = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [itemKinds, setItemKinds] = useState([]);
  // const [itemAllKinds, setItemAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCategories(categoryData?.data);
  };

  useEffect(() => {
    getCategory();
  }, [meData]);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
    };
    loadData();
  }, []);

  const getKindsProduct = async () => {
    const { data } = await axios.get(`/products/productAllChildKinds/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setItemKinds(data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getKindsProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    if (id === itemKinds.pk) {
      setIsActive(true);
    }
  }, [id]);

  console.log('itemKinds', itemKinds);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>{itemKinds?.name}</h1>

      {/* <Category itemKinds={itemKinds} /> */}
      <CategoriesWrap>
        {/* <Link to=''>
          <Categories onClick={() => navigate(-1)}>All</Categories>
        </Link> */}
        {categories?.map((cat) => {
          return (
            <CategoriesInside key={cat?.pk}>
              {cat.productKinds?.map((child) => {
                return (
                  <Link
                    key={child?.pk}
                    to={`/products/productAllChildKinds/${child?.pk}`}
                  >
                    <Categories>{child?.name}</Categories>
                  </Link>
                );
              })}
            </CategoriesInside>
          );
        })}
      </CategoriesWrap>
      <ProductsWrap>
        <SideFilter itemKinds={itemKinds} />
        <ProductsListWrapper>
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {itemKinds?.products?.length}
                </TotalCount>
              </TotalCountWrap>
              <SelectWrap>
                <select
                  // onChange={handleOptionChange}
                  name='category-list'
                  id='category-list'
                >
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </SelectWrap>
            </ListTop>

            <ListMidWrap>
              <ListMid>
                {itemKinds?.products?.map((all) => {
                  return (
                    <ProductsCard
                      key={all.pk}
                      all={all}
                      // kindEach={kindEach}
                      meData={meData}
                      itemKinds={itemKinds}
                    />
                  );
                })}
              </ListMid>
            </ListMidWrap>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};

export default ProductListByCategory;
