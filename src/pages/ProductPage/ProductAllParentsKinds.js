import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ProductsEach,
  ProductsList,
  ListMid,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  ListTop,
  ProductCategories,
  ToggleLike,
  ProductEachDetails,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductLike,
} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// const TestProduct_URL = '/products/productAllChildKinds/${id}';
const ProductAllParentsKinds = () => {

    const [itemAllKinds, setItemAllKinds] = useState([]); //useState([]);
    const { id } = useParams();
    const getAllKindsProduct = async () => {
      const {data} = await axios.get(`/products/productAllParentsKinds/${id}`,{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
        );
        
      console.log(data)
      setItemAllKinds(data)
      }
    useEffect(() => {
        getAllKindsProduct();
    },[id])
    console.log("itemAllKinds", itemAllKinds);

    const sort = [
        // { value: '', text: '--Choose an option--' },
      { value: 'Newest', text: 'Newest first' },
      { value: 'Popular', text: 'Most Popular' },
        // { value: 'Ratings', text: 'Ratings' },
      { value: 'HighToLow', text: 'Price: high to low' },
      { value: 'LowToHigh', text: 'Price: low to high' },
    ];
      
    const handleOptionChange = (e) => {
      console.log(e.target.value);
      };
  return (
    <ProductsListContainer>
      <ProductsWrap>
      <h1>{itemAllKinds.name}</h1>
        <ProductsListWrapper>
          <ProductCategories>
            {/* <span>Categories Filter section</span> */}
          </ProductCategories>
          <ProductsList>
            <ListTop>
              <span style={{ fontSize: '13px' }}>Total {itemAllKinds.productKinds?.products?.length} </span>
              <span>
                <select
                  onChange={handleOptionChange}
                  name='fruits'
                  id='fruit-select'
                >
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </span>
            </ListTop>
            {itemAllKinds.productKinds?.map((item) => {
                return (
                  <ListMid key={item.pk}>
                    {item.products?.map((all) => {
                      return (
                              <ProductsEach  to={`/products/${all.pk}`} key={all.pk}>
                                <img src={all.photos[0].picture} alt='' />
                                <ToggleLike>
                                  {all.is_liked ? (
                                    <FavoriteIcon />
                                  ) : (
                                    <FavoriteBorderIcon />
                                  )}
                                </ToggleLike>
                                <ProductEachDetails>
                                  <ProductTitle>{all.name}</ProductTitle>
                                  <ProductDesc>{all.detail}</ProductDesc>
                                  <ProductPrice>${all.price}</ProductPrice>
                                  <ProductLike>
                                    <FavoriteIcon fontSize='small' />
                                    Total Likes count
                                  </ProductLike>
                                </ProductEachDetails>
                              </ProductsEach>
                            );
                      })}
                  </ListMid>
                 );
              })}
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductAllParentsKinds;
