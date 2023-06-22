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
  // { value: 'None', text: '----------' },
  { value: 'Newest', text: 'Newest first' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const ProductListByCategory = ({ meData, catData }) => {
  const [loading, setLoading] = useState(false);
  const [itemKinds, setItemKinds] = useState([]);
  const { pId, cName, cId } = useParams();
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [selectOption, setSelectOption] = useState('Newest');
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [priceRange, setPriceRange] = useState();
  const [itemsByPrice, setItemsByPrice] = useState([]);

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
  // console.log('GetAllKind', getAllKinds);

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
    setItemsByPrice(itemKinds?.products);

    if (priceRange === 0) {
      const rangeItems = itemKinds?.products?.filter(
        (range) => range?.price <= 50
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 1) {
      const rangeItems = itemKinds?.products?.filter(
        (range) => 50 < range?.price && range?.price <= 100
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 2) {
      const rangeItems = itemKinds?.products?.filter(
        (range) => 100 < range?.price && range?.price <= 150
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 3) {
      const rangeItems = itemKinds?.products?.filter(
        (range) => 150 < range?.price && range?.price <= 200
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 4) {
      const rangeItems = itemKinds?.products?.filter(
        (range) => 200 < range?.price
      );
      setItemsByPrice(rangeItems);
    } else {
      setItemsByPrice(itemKinds?.products);
    }
  }, [priceRange]);

  useEffect(() => {
    if (itemKinds.name === cName) {
      switch (selectOption) {
        case 'LowToHigh':
          if (itemsByPrice) {
            const priceLToH = itemsByPrice.sort((a, b) => a.price - b.price);
            setSortList(priceLToH);
          }
          const priceLToH = itemKinds.products.sort(
            (a, b) => a.price - b.price
          );
          setSortList(priceLToH);

          return setSortProducts(...sortList);
        case 'HighToLow':
          if (itemsByPrice) {
            const priceHToL = itemsByPrice.sort((a, b) => b.price - a.price);
            setSortList(priceHToL);
          }
          const priceHToL = itemKinds.products.sort(
            (a, b) => b.price - a.price
          );
          setSortList(priceHToL);

          return setSortProducts(...sortList);
        case 'Newest':
          if (itemsByPrice) {
            const uploadNewest = itemsByPrice.sort(
              (start, end) =>
                new Date(end.created_at).getTime() -
                new Date(start.created_at).getTime()
            );
            setSortList(uploadNewest);
          }
          const uploadNewest = itemKinds.products.sort(
            (start, end) =>
              new Date(end.created_at).getTime() -
              new Date(start.created_at).getTime()
          );
          setSortList(uploadNewest);

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
                  Total{' '}
                  {itemsByPrice
                    ? itemsByPrice?.length
                    : itemKinds?.products?.length}
                  {/* Total {itemKinds?.products?.length} */}
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
                    {selectOption === 'Newest' ? (
                      <>
                        {itemKinds.products
                          ?.sort(
                            (start, end) =>
                              new Date(end.created_at).getTime() -
                              new Date(start.created_at).getTime()
                          )
                          .map((all) => {
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
                    )}
                  </>
                ) : (
                  <>
                    {itemsByPrice?.map((all) => {
                      return (
                        <ProductsCard
                          key={all?.pk}
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
