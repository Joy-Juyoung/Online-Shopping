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

const ProductListByCategory = ({ meData, catData }) => {
  const [loading, setLoading] = useState(false);
  const [itemKinds, setItemKinds] = useState([]);
  const { pId, cName, cId } = useParams();
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [priceRange, setPriceRange] = useState();
  const [itemsByPrice, setItemsByPrice] = useState([]);

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
    setPriceRange('none');
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

  useEffect(() => {
    setItemsByPrice(itemKinds.products);

    if (priceRange === 0) {
      const rangeItems = itemKinds.products?.filter(
        (range) => range?.price <= 50
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 1) {
      const rangeItems = itemKinds.products?.filter(
        (range) => 50 < range?.price && range?.price <= 100
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 2) {
      const rangeItems = itemKinds.products?.filter(
        (range) => 100 < range?.price && range?.price <= 150
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 3) {
      const rangeItems = itemKinds.products?.filter(
        (range) => 150 < range?.price && range?.price <= 200
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 4) {
      const rangeItems = itemKinds.products?.filter(
        (range) => 200 < range?.price
      );
      setItemsByPrice(rangeItems);
    } else {
      setItemsByPrice(itemKinds.products);
    }
  }, [priceRange]);

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
          catData={catData}
          itemKinds={itemKinds}
          rangeNone={() => setPriceRange('none')}
          range0={() => setPriceRange(0)}
          range1={() => setPriceRange(1)}
          range2={() => setPriceRange(2)}
          range3={() => setPriceRange(3)}
          range4={() => setPriceRange(4)}
          priceRange={priceRange}
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
                {priceRange === 'none' ? (
                  <>
                    {itemKinds.products?.map((all) => {
                      return (
                        <ProductsCard
                          key={all.pk}
                          all={all}
                          meData={meData}
                          itemKinds={itemKinds}
                        />
                      );
                    })}
                  </>
                ) : (
                  <>
                    {itemsByPrice?.map((all) => {
                      return (
                        <ProductsCard
                          key={all.pk}
                          all={all}
                          meData={meData}
                          itemKinds={itemKinds}
                        />
                      );
                    })}
                  </>
                )}
              </ListMid>
            </ListMidWrap>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};

export default ProductListByCategory;
