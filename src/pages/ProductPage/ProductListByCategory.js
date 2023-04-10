import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
  SideFilterWrapper,
  SideClearWrap,
  SideCategoriesWrap,
  SidePriceWrap,
  Categories,
  TotalCountWrap,
  TotalCount,
  SelectWrap,
} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Loading from '../../components/Loading';
import ProductsCard from './ProductCard';
import SideFilter from './SideFilter';
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
  const [itemAllKinds, setItemAllKinds] = useState([]);
  const { id } = useParams();

  // console.log('meData', meData);

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
    console.log('itemKinds', data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getKindsProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  // console.log('itemKinds', itemKinds);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>{itemKinds.name}</h1>
      <ProductsWrap>
        <SideFilter />
        <ProductsListWrapper>
          <CategoriesWrap>
            {itemAllKinds?.productKinds?.map((kind) => {
              return <Categories key={kind.pk}>{kind.name}</Categories>;
            })}
          </CategoriesWrap>
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {itemKinds?.products?.length}
                  {/* {itemKinds?.products?.map((kind) => {
                  return <p>{kind?.products?.length}</p>;
                })} */}
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
