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
  }
from "./ProductDetailElements";
import { ButtonLarge } from '../../components/ButtonElements';

// const PRODUCTDETAILS_URL = '/products/${id}';

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
            LikeBtn
            <ButtonLarge>
              Add to Cart
            </ButtonLarge>

          </DetailRightInfoBottom>
          
        </DetailRightInfo>

      </DetailWrapper>
    </DetailContainer>
  );
};

export default ProductDetailPage;
