import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { 
  DetailContainer,
  DetailWrapper,
  DetailLeftInfo,
  DetailRightInfo,
  DetailRightInfoTop,
  DetailName,
  DetailProductName,
  DetailTitle,
  DetailPrice,
  DetailCoupon,
  DetailRightInfoBottom,
  LikeBtnWrapper,
  LikeBtn,
  ButtonLarges
  }
from "./ProductDetailElements";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// const PRODUCTDETAILS_URL = '/products/${id}';

// const PRODUCTLIKE_URL = '/wishlists/';

const ProductDetailPage = () => {
  const [itemsDetail, setItemsDetail] = useState([]);
  
  const [id, setId] = useState('7');


  const getItemsDetail = async () => {
    const itemInfo = await axios.get(`/products/${id}`, 
    {
      id,
    },{
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('itemInfo', itemInfo?.data);
    setItemsDetail(itemInfo?.data);
  };

  useEffect(() => {
    getItemsDetail();
  }, []);


  // const [itemLike, setItemLike] = useState(0);
  // const [itemIsClicked, setItemIsClicked] = useState[false];

  // const handleClick = () => {
  //   if (itemIsClicked) {
  //     setItemLike(itemLike - 1 );
  //   } else {
  //     setItemLike(itemLike + 1 );
  //   }
  //   setItemIsClicked(!itemIsClicked);
  // }

 return (
    <DetailContainer>
      <DetailWrapper>
        <DetailLeftInfo>
        {/* {itemsDetail.photos.picture} */}
          Product Image
        </DetailLeftInfo>
        <DetailRightInfo>
          <DetailRightInfoTop>
          <DetailName>
            {itemsDetail.name}
          </DetailName>


            {/* product name
              {itemsDetail.map((test) => 
              <DetailName key={test.id}>              

              {test.name}
              </DetailName>
            )} */}
            <DetailProductName>
               <DetailTitle>
                {itemsDetail.detail}
              </DetailTitle>

              <DetailPrice>
              {itemsDetail.price}
                {/* Product Price */}
              </DetailPrice>
              {/* coupon*/}
              <DetailCoupon>
                Product Coupon
              </DetailCoupon>
            </DetailProductName>
            
          </DetailRightInfoTop>

          <DetailRightInfoBottom>

            <LikeBtnWrapper>
              <LikeBtn >
                 <FavoriteBorderIcon fontSize='medium' color='disabled' />
                {/* <span>{itemLike}</span> */}
              </LikeBtn>

            </LikeBtnWrapper>

            <ButtonLarges to='/carts'>
              Add to Cart
            </ButtonLarges>

          </DetailRightInfoBottom>
          
        </DetailRightInfo>

      </DetailWrapper>
    </DetailContainer>
  );
};

export default ProductDetailPage;
