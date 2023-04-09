import React, { Children, useEffect, useMemo, useState } from 'react';
import axios from '../../api/axios';
import {
  FavIcon,
  ListMid,
  ListMidWrap,
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
  ProductsListWrap,
  ProductsListWrapper,
  ProductsWrap,
  ProductTitle,
  ProductUnLike,
  SelectWrap,
  ToggleLike,
} from './ProductListElements';
// import ProductsCard from './ProductsCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';

// if user me 가 없다면, 로그인x라면 liked가 작동x
// 하지만 이게 작동 되야함.....?
//  비회원은 로컬에 저장하고 위시리스트를 볼 수 있음
// 그리고, 구매하려면 이때는 로그인을 해야함

const PRODUCTS_URL = '/products';
const ProductsListPage = ({ meData }) => {
  const [items, setItems] = useState([]);
  // true false -> Put 눌러졌을때 상태바꾸기
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);

  // const [total, setTotal] = useState(0);
  // const [list, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  // const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [itemKinds, setItemKinds] = useState([]);

  const [itemAllKinds, setItemAllKinds] = useState([]); //useState([]);
  const { id } = useParams();
  const getAllKindsProduct = async () => {
    const { data } = await axios.get(`/products/productAllParentsKinds/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    // console.log(data);
    setItemAllKinds(data);
    // setItemKinds(itemAllKinds?.productKinds);
    // console.log('itemKinds', itemAllKinds?.productKinds);
  };
  useEffect(() => {
    getAllKindsProduct();
  }, [id, addLiked]);
  console.log('itemAllKinds', itemAllKinds);

  const sort = [
    { value: 'Newest', text: 'Newest first' },
    { value: 'Popular', text: 'Most Popular' },
    { value: 'HighToLow', text: 'Price: high to low' },
    { value: 'LowToHigh', text: 'Price: low to high' },
  ];

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // const getItems = async () => {
  //   // setLoading(true);
  //   try {
  //     const itemsList = await axios.get(PRODUCTS_URL, {
  //       headers: { 'Content-Type': 'application/json' },
  //       withCredentials: true,
  //     });
  //     console.log('ProductList', itemsList?.data.length);
  //     setItems(itemsList?.data);
  //     // setLoading(false);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   getItems();
  // }, [addLiked]);

  const handleLiked = (pk) => {
    setLoading(false);
    var tempItems = itemAllKinds.productKinds;
    tempItems.forEach((item) => {
      if (item.pk === pk) {
        item.is_liked = !item.isLiked;

        const addLike = axios.put(
          '/wishlists/',
          {
            product_pk: item.pk,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        setAddLiked(addLike);

        console.log('clicked', addLike);
      }
    });
    // setItems([...items]);
    setItems(tempItems);
  };

  const handleOptionChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // const getFilteredList = () => {
  //   if (!selectedCategory) {
  //     return itemAllKinds;
  //   }
  //   return itemAllKinds.filter((item) => item.category === selectedCategory);
  // };

  // var filteredList = useMemo(getFilteredList, [selectedCategory, itemAllKinds]);

  // useEffect(() => {
  //   // var tempKinds = itemAllKinds.productKinds;
  //   setItemKinds(itemAllKinds.productKinds);
  //   console.log('itemKinds', itemKinds);
  //   var i;
  //   var arr = itemKinds[i];

  // const handleSum = () => {
  //   // var tempLength = itemAllKinds?.productKinds?.length;

  //   var total =
  //   for(var i = 0; i<=itemAllKinds?.productKinds?.length; i++) {

  //   }

  //   itemAllKinds?.productKinds?.map(
  //     (kind) =>
  //     (
  //       {kind?.products?.length}
  //     ) console.log('kind', kind)

  //     // return <p>{total}</p>;
  //   );
  // };
  //   for (i = 0; i <= itemKinds.length; i++) {
  //     arr++;
  //     setTotal(arr);
  //   }
  //   console.log('total', total);
  //   return total;

  //   // const arrSum = itemAllKinds.reduce((acc, { initial }) => acc + initial, 0);
  //   // setTotal(arrSum);
  // }, []);

  // useEffect(() => {
  //   handleTotal();
  // }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <ProductsWrap>
        {/* <h1>All Products</h1> */}
        <h1>{itemAllKinds.name}</h1>
        <ProductsListWrapper>
          <ProductCategories>
            {/* <span>Categories Filter section</span> */}
          </ProductCategories>
          <ProductsList>
            <ListTop>
              <span style={{ fontSize: '13px' }}>
                {/* Total {handleSum} */}
                {/* Total {total} */}
                {itemAllKinds?.productKinds?.map((kind) => {
                  return <p>{kind?.products?.length}</p>;
                })}
              </span>
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

            {itemAllKinds?.productKinds?.map((item) => {
              return (
                <ListMidWrap key={item.pk}>
                  <h2>{item.name}</h2>
                  <ListMid>
                    {item.products?.map((all) => {
                      return (
                        <ProductsEach to={`/products/${all.pk}`} key={all.pk}>
                          <ProductEachPhoto
                            src={all.photos[0].picture}
                            alt=''
                          />

                          {meData && (
                            <ToggleLike
                              onClick={(e) => {
                                e.preventDefault();
                                handleLiked(all.pk);
                              }}
                            >
                              <ProductLike>
                                {all.is_liked ? (
                                  <FavoriteIcon sx={{ color: '#e20000' }} />
                                ) : (
                                  <FavoriteIcon color='disabled' />
                                )}
                              </ProductLike>
                            </ToggleLike>
                          )}
                          <ProductEachDetails>
                            <ProductTitle>{all.name}</ProductTitle>
                            <ProductDesc>{all.detail}</ProductDesc>
                            <ProductPrice>${all.price}</ProductPrice>
                          </ProductEachDetails>
                        </ProductsEach>
                      );
                    })}
                  </ListMid>
                </ListMidWrap>
              );
            })}
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductsListPage;
