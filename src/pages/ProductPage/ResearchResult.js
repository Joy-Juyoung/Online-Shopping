import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
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
import Category from './Category';
import SideFilter from './SideFilter';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const ResearchResult = ({ meData, catData, onClose }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pId } = useParams();
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [addLiked, setAddLiked] = useState();
  const [priceRange, setPriceRange] = useState('none');
  const [itemsByPrice, setItemsByPrice] = useState([]);
  // const location = useLocation();

  // const [isModalOpen, setIsModalOpen] = useState(false);

  const { searchValue } = useParams();

  console.log('searchValue', searchValue);

  const getItems = async () => {
    const itemsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
    // onClose();
    setLoading(false);
    // onClose();
  };

  useEffect(() => {
    setLoading(true);
    getItems();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    // if(location.pathname === '/admin')
  }, []);

  useEffect(() => {
    getItems();
  }, [addLiked]);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    console.log('selectedOptionnnn', selectOption);
    // if (itemKinds.name === cName) {
    switch (selectOption) {
      case 'LowToHigh':
        const priceLToH = items.sort((a, b) => a.price - b.price);
        setSortList(priceLToH);
        // setSortProducts(...sortList);
        return setSortProducts(...sortList);
      case 'HighToLow':
        const priceHToL = items.sort((a, b) => b.price - a.price);
        setSortList(priceHToL);
        // setSortProducts(sortList);
        return setSortProducts(...sortList);
      case 'Newest':
        const uploadNewest = items.sort((a, b) => a.created_at - b.created_at);
        setSortList(uploadNewest);
        // setSortProducts(sortList);
        return setSortProducts(...sortList);
      default:
        return setSortList(sortProducts);
    }
    // }
  }, [selectOption, sortProducts]);

  useEffect(() => {
    setItemsByPrice(items);
    if (priceRange === 'none') {
      setItemsByPrice(items);
    }

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
  }, [priceRange, searchValue, sortProducts]);

  const filtered = !searchValue
    ? items
    : itemsByPrice.filter(
        (list) =>
          list.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          list.detail.toLowerCase().includes(searchValue.toLowerCase())
        //  list.name.toLowerCase().indexOf(searchValue) !== -1
        // list.name.toLowerCase().match(searchValue)
      );

  // ? items
  // : items.filter(
  //     (list) =>
  //       list.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       list.detail.toLowerCase().includes(searchValue.toLowerCase())
  //     //  list.name.toLowerCase().indexOf(searchValue) !== -1
  //     // list.name.toLowerCase().match(searchValue)
  //   );

  // useEffect(() => {
  //   setItems(
  //     items.filter(list => list.name.indexOf(searchValue) == -1)
  //   );
  // }, [searchValue]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>Search results for "{searchValue}"</h1>
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
                  Total {itemsByPrice ? itemsByPrice?.length : items?.length}
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
                {/* {filtered?.map((all) => {
                  return (
                    <ProductsCard
                      key={all.pk}
                      all={all}
                      meData={meData}
                      items={items}
                    />
                  );
                })} */}
                {priceRange === 'none' ? (
                  <>
                    {items
                      ?.filter(
                        (list) =>
                          list.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                          list.detail
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
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
                    {itemsByPrice
                      ?.filter(
                        (list) =>
                          list.name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase()) ||
                          list.detail
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
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
                )}
              </ListMid>
            </ListMidWrap>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};

export default ResearchResult;
