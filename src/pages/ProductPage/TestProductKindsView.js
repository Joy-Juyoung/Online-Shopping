import { Axios } from 'axios';
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
  // ProductsListWrap,
  ProductsListContainer,
  ProductsListWrapper,

} from './ProductListElements';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// const TestProduct_URL = '/products/productAllChildKinds/${id}';
const TestProductKindsView = () => {

    const [itemKinds, setItemKinds] = useState([]); //useState([]);
    const { id } = useParams();
    const getKindsProduct = async () => {
      const {data} = await axios.get(`/products/productAllChildKinds/${id}`,{
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
        );
        
      console.log(data)
      setItemKinds(data)
      }
    useEffect(() => {
        getKindsProduct();
    },[id])
    console.log("id", id);

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
      <h1>{itemKinds.name}</h1>
        <ProductsListWrapper>
          <ProductCategories>
            {/* <span>Categories Filter section</span> */}
          </ProductCategories>
          <ProductsList>
            <ListTop>
              <span style={{ fontSize: '13px' }}>Total {itemKinds.length} </span>
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
            <ListMid>
              {itemKinds.products?.map((item) => {
                // <ProductsCard key={item.pk} product={item} />
                return (
                  <ProductsEach  to={`/products/${item.pk}`} key={item.pk}>
                    <img src={item.photos[0].picture} alt='' />

                    {/* pk별 각각 클릭될때, 하나의 상태만 변하도록 수정 */}
                    <ToggleLike>
                      {item.is_liked ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </ToggleLike>
                    <ProductEachDetails>
                      <ProductTitle>{item.name}</ProductTitle>
                      <ProductDesc>{item.detail}</ProductDesc>
                      <ProductPrice>${item.price}</ProductPrice>
                      <ProductLike>
                        <FavoriteIcon fontSize='small' />
                        total Likes count
                      </ProductLike>
                    </ProductEachDetails>
                  </ProductsEach>
                );
              })}
            </ListMid>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
    // <ProductsListContainer>        
    //   <ListMid>
    //     <h1>{itemKinds.name}</h1>
    //         <ProductsList>
    //         {itemKinds.products?.map((item) => (
    //             <ProductsEach key={item.pk}>
    //             <img src={item.photos[0].picture} alt='' />
    //             <p>{item.name}</p>
    //             <span>${item.price}</span>
    //         </ProductsEach>
    //       ))}
    //     </ProductsList>
    //   </ListMid>
    // </ProductsListContainer>
  );
};

export default TestProductKindsView;
