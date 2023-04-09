import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  AllEachTitle,
  Categories,
  CategoriesWrap,
  ListMid,
  ListMidWrap,
  ListMidWrapper,
  ListTop,
  ProductsList,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  SelectWrap,
  SideCategoriesWrap,
  SideClearWrap,
  SideFilterWrapper,
  SidePriceWrap,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import Loading from '../../components/Loading';
import { Link, useParams } from 'react-router-dom';
import ProductsCard from './ProductCard';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const ProductsListPage = ({ meData }) => {
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [itemAllKinds, setItemAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
    };
    loadData();
  }, []);

  const getAllKindsProduct = async () => {
    const { data } = await axios.get(`/products/productAllParentsKinds/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    // console.log(data);
    setItemAllKinds(data);
    console.log('itemAllKinds', itemAllKinds);
    setKindEach(itemAllKinds.productKinds);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllKindsProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  // useEffect(() => {
  //   getAllKindsProduct();
  // }, [addLiked]);

  // const handleLiked = (pk) => {
  //   var tempItems = itemAllKinds.productKinds;

  //   tempItems.forEach((item) => {
  //     item.products.forEach((each) => {
  //       // console.log('each', each);

  //       if (each.pk === pk) {
  //         each.is_liked = !each.isLiked;

  //         const addLike = axios.put(
  //           '/wishlists/',
  //           {
  //             product_pk: each.pk,
  //           },
  //           {
  //             headers: { 'Content-Type': 'application/json' },
  //             withCredentials: true,
  //           }
  //         );
  //         setAddLiked(addLike);
  //         // console.log('clicked', addLike);
  //       }
  //     });
  //   });
  // };

  // const handleOptionChange = (e) => {
  //   setSelectedCategory(e.target.value);
  // };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>All {itemAllKinds.name}</h1>
      <ProductsWrap>
        <SideFilterWrapper>
          <SideClearWrap></SideClearWrap>
          <SideCategoriesWrap></SideCategoriesWrap>
          <SidePriceWrap></SidePriceWrap>
        </SideFilterWrapper>
        <ProductsListWrapper>
          <CategoriesWrap>
            {itemAllKinds?.productKinds?.map((kind) => {
              return (
                <Link
                  key={kind.pk}
                  to={`/products/productAllChildKinds/${kind.pk}`}
                >
                  <Categories>{kind.name}</Categories>
                </Link>
              );
            })}
          </CategoriesWrap>
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {itemAllKinds?.productKinds?.length}
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
              {itemAllKinds?.productKinds?.map((item) => {
                return (
                  <ListMidWrapper key={item.pk}>
                    <Link to={`/products/productAllChildKinds/${item.pk}`}>
                      <AllEachTitle>{item.name}</AllEachTitle>
                    </Link>
                    <ListMid>
                      {item.products?.map((all) => {
                        return (
                          <ProductsCard
                            key={all.pk}
                            all={all}
                            kindEach={kindEach}
                            meData={meData}
                          />
                        );
                      })}
                    </ListMid>
                  </ListMidWrapper>
                );
              })}
            </ListMidWrap>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductsListPage;
