import React, { Children, useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  AllEachTitle,
  FavIcon,
  ListAllMidWrap,
  ListMid,
  ListMidWrap,
  ListMidWrapper,
  ListTop,
  ProductCategories,
  ProductDesc,
  ProductEachDetails,
  ProductEachPhoto,
  ProductLike,
  ProductPrice,
  ProductsEach,
  ProductsList,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  ProductTitle,
  ProdutsListContainer,
  SelectWrap,
  ToggleLike,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import ProductsCard from './ProductCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useParams } from 'react-router-dom';
import Category from './Category';
import SideFilter from './SideFilter';
import ProductListByCategory from './ProductListByCategory';
import Loading from '../../components/Loading';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];
const AllProducts = ({ meData }) => {
  const [items, setItems] = useState([]);
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { pId } = useParams();
  const [isChileOpen, setIsChileOpen] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);

  const getItems = async () => {
    const itemsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getItems();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

  useEffect(() => {
    // console.log('selectedOptionnnn', selectOption);
    // if (itemKinds.name === cName) {
    //   switch (selectOption) {
    //     case 'LowToHigh':
    //       const priceLToH = itemKinds.products.sort(
    //         (a, b) => a.price - b.price
    //       );
    //       setSortList(priceLToH);
    //       // setSortProducts(...sortList);
    //       return setSortProducts(...sortList);
    //     case 'HighToLow':
    //       const priceHToL = itemKinds.products.sort(
    //         (a, b) => b.price - a.price
    //       );
    //       setSortList(priceHToL);
    //       // setSortProducts(sortList);
    //       return setSortProducts(...sortList);
    //     case 'Newest':
    //       const uploadNewest = itemKinds.products.sort(
    //         (a, b) => a.created_at - b.created_at
    //       );
    //       setSortList(uploadNewest);
    //       // setSortProducts(sortList);
    //       return setSortProducts(...sortList);
    //     default:
    //       return setSortList(sortProducts);
    //   }
    // }
  }, [selectOption, sortProducts]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>{items?.name}</h1>

      <Category getAllKinds={getAllKinds} />

      <ProductsWrap>
        <SideFilter getAllKinds={getAllKinds} />
        <ProductsListWrapper>
          <ProductsList>
            <ListTop>
              {/* <TotalCountWrap>
              <TotalCount style={{ fontSize: '13px' }}>
                Total {items?.products?.length}
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
            </SelectWrap> */}
            </ListTop>

            <ListMidWrap>
              <ListMid>
                {items?.map((all) => {
                  return (
                    <ProductsCard
                      key={all.pk}
                      all={all}
                      // kindEach={kindEach}
                      meData={meData}
                      items={items}
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

export default AllProducts;
