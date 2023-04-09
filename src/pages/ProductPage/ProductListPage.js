import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  Categories,
  CategoriesWrap,
  ListMid,
  ListMidWrap,
  ListTop,
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
  SelectWrap,
  SideCategoriesWrap,
  SideClearWrap,
  SideFilterWrapper,
  SidePriceWrap,
  ToggleLike,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Loading from '../../components/Loading';
import { useParams } from 'react-router-dom';

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
  const { id } = useParams();

  useEffect(() => {
    // window.location.reload();
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    loadData();
  }, []);

  const getAllKindsProduct = async () => {
    // setLoading(true);
    const { data } = await axios.get(`/products/productAllParentsKinds/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    // console.log(data);
    setItemAllKinds(data);
    console.log('itemAllKinds', itemAllKinds);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllKindsProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // setLoading(false);
  }, [id]);

  useEffect(() => {
    getAllKindsProduct();
  }, [addLiked]);

  const handleLiked = (pk) => {
    var tempItems = itemAllKinds.productKinds;

    tempItems.forEach((item) => {
      item.products.forEach((each) => {
        // console.log('each', each);

        if (each.pk === pk) {
          each.is_liked = !each.isLiked;

          const addLike = axios.put(
            '/wishlists/',
            {
              product_pk: each.pk,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          );
          setAddLiked(addLike);
          // console.log('clicked', addLike);
        }
      });
    });
  };

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
              return <Categories key={kind.pk}>{kind.name}</Categories>;
            })}
          </CategoriesWrap>
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {itemAllKinds?.productKinds?.length}
                  {/* {itemAllKinds?.productKinds?.map((kind) => {
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
              {itemAllKinds?.productKinds?.map((item) => {
                return (
                  <div key={item.pk}>
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
                  </div>
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
