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
  const { pId, cName, cId } = useParams();
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);

  // console.log('pId', pId);
  // console.log('pName', pName);
  // console.log('cName', cName);
  // console.log('cId', cId);

  const getAllKindsProduct = async () => {
    const { data } = await axios.get(
      `/products/productAllParentsKinds/${pId}`,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    setGetAllKinds(data);
  };

  useEffect(() => {
    getAllKindsProduct();
  }, []);

  const getKindsProduct = async () => {
    const { data } = await axios.get(`/products/productAllChildKinds/${cId}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setItemKinds(data);
    setSortProducts(itemKinds?.products);
    // console.log('SortProducts', sortProducts);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getKindsProduct();
    setSortProducts(itemKinds?.products);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [cId]);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
    // console.log('SelectOption', selectOption);
    //   if (itemKinds.name === cName) {
    //   if (selectOption === 'LowToHigh') {
    //     const priceLToH = itemKinds.products.sort((a, b) => a.price - b.price);
    //     setSortList(priceLToH);
    //     console.log('L-H', sortList);
    //   } if (selectOption === 'HighToLow') {
    //     const priceHToL = itemKinds.products.sort((a, b) => b.price - a.price);
    //     setSortList(priceHToL);
    //     console.log('H-L', sortList);
    //   } if (selectOption === 'Newest') {
    //     const uploadNewest = itemKinds.products.sort(
    //       (a, b) => a.created_at - b.created_at
    //     );
    //     setSortList(uploadNewest);
    //     console.log('Upload Newest', sortList);
    //   }
    //   setSortProducts(sortList);
    //   console.log('SortProductsssss', sortProducts);
    // }
  };

  useEffect(() => {
    console.log('selectedOptionnnn', selectOption);
    if (itemKinds.name === cName) {
      switch (selectOption) {
        case 'LowToHigh':
          const priceLToH = itemKinds.products.sort(
            (a, b) => a.price - b.price
          );
          setSortList(priceLToH);
          // setSortProducts(...sortList);
          return setSortProducts(...sortList);
        case 'HighToLow':
          const priceHToL = itemKinds.products.sort(
            (a, b) => b.price - a.price
          );
          setSortList(priceHToL);
          // setSortProducts(sortList);
          return setSortProducts(...sortList);
        case 'Newest':
          const uploadNewest = itemKinds.products.sort(
            (a, b) => a.created_at - b.created_at
          );
          setSortList(uploadNewest);
          // setSortProducts(sortList);
          return setSortProducts(...sortList);
        default:
          return setSortList(sortProducts);
      }
    }
  }, [selectOption, sortProducts]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>{itemKinds?.name}</h1>

      <Category getAllKinds={getAllKinds} pId={pId} cId={cId} cName={cName} />

      <ProductsWrap>
        <SideFilter
          getAllKinds={getAllKinds}
          pId={pId}
          cId={cId}
          cName={cName}
        />
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
                  onChange={handleOptionChange}
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
                {itemKinds.products?.map((all) => {
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
