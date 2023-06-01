import React, { Children, useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  ListMid,
  ListMidWrap,
  ListTop,
  ProductsList,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  SelectWrap,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import ProductsCard from './ProductCard';
import { Link, useParams } from 'react-router-dom';
import Category from './Category';
import SideFilter from './SideFilter';
import Loading from '../../components/Loading';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  // { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];
const AllProducts = ({ meData, catData }) => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  const { pId } = useParams();
  const [selectOption, setSelectOption] = useState('Newest');
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [addLiked, setAddLiked] = useState();
  const [priceRange, setPriceRange] = useState();
  const [itemsByPrice, setItemsByPrice] = useState([]);

  const getItems = async () => {
    const itemsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getItems();
    setPriceRange('none');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    getItems();
  }, [addLiked]);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    console.log('selectedOptionnnn', selectOption);
    switch (selectOption) {
      case 'LowToHigh':
        const priceLToH = items.sort((a, b) => a.price - b.price);
        setSortList(priceLToH);
        return setSortProducts(...sortList);
      case 'HighToLow':
        const priceHToL = items.sort((a, b) => b.price - a.price);
        setSortList(priceHToL);
        return setSortProducts(...sortList);
      case 'Newest':
        const uploadNewest = items.sort(
          (start, end) =>
            new Date(end.created_at).getTime() -
            new Date(start.created_at).getTime()
        );
        setSortList(uploadNewest);
        return setSortProducts(...sortList);
      default:
        return setSortList(sortProducts);
    }
  }, [selectOption, sortProducts]);

  useEffect(() => {
    setItemsByPrice(items);

    if (priceRange === 0) {
      const rangeItems = items?.filter((range) => range?.price <= 50);
      setItemsByPrice(rangeItems);
    } else if (priceRange === 1) {
      const rangeItems = items?.filter(
        (range) => 50 < range?.price && range?.price <= 100
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 2) {
      const rangeItems = items?.filter(
        (range) => 100 < range?.price && range?.price <= 150
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 3) {
      const rangeItems = items?.filter(
        (range) => 150 < range?.price && range?.price <= 200
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 4) {
      const rangeItems = items?.filter((range) => 200 < range?.price);
      setItemsByPrice(rangeItems);
    } else {
      setItemsByPrice(items);
    }
  }, [priceRange]);

  // console.log('priceRange', priceRange);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>All Products</h1>
      <Category items={items} />
      <ProductsWrap>
        <SideFilter
          items={items}
          catData={catData}
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
                  Total {items?.length}
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
                        {items
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
                                items={items}
                              />
                            );
                          })}
                      </>
                    ) : (
                      <>
                        {items?.map((all) => {
                          return (
                            <ProductsCard
                              key={all.pk}
                              all={all}
                              meData={meData}
                              items={items}
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
                          key={all.pk}
                          all={all}
                          meData={meData}
                          items={items}
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

export default AllProducts;
