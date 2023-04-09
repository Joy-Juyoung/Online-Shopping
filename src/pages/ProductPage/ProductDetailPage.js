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
  ButtonLarges,
  OffCanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  CloseButton,
  OffcanvasBody,
} from './ProductDetailElements';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';

// const PRODUCTDETAILS_URL = '/products/${id}';

const ProductDetailPage = () => {
  const [itemsDetail, setItemsDetail] = useState([]); //useState([]);
  const { id } = useParams();
  const getProduct = async () => {
    const { data } = await axios.get(`/products/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    console.log(data);
    setItemsDetail(data);
  };
  useEffect(() => {
    getProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);
  console.log('id', id);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <DetailContainer>
      <DetailWrapper>
        <DetailLeftInfo>
          <img src={itemsDetail.photos?.[0].picture} alt='' />
        </DetailLeftInfo>
        <DetailRightInfo>
          <DetailRightInfoTop>
            <DetailName>{itemsDetail.name}</DetailName>
            <DetailProductName>
              <DetailTitle>{itemsDetail.detail}</DetailTitle>
              <DetailPrice>${itemsDetail.price}</DetailPrice>
              {/* coupon*/}
              <DetailCoupon>Product Coupon</DetailCoupon>
            </DetailProductName>
          </DetailRightInfoTop>

          <DetailRightInfoBottom>
            <LikeBtnWrapper>
              <LikeBtn>
                <FavoriteBorderIcon fontSize='medium' color='disabled' />
                {/* <span>{itemLike}</span> */}
              </LikeBtn>
            </LikeBtnWrapper>
            {/* <ButtonLarges>
              Add to Cart
            </ButtonLarges> */}
            <ButtonLarges onClick={() => setIsOpen(true)}>
              Add to Cart
            </ButtonLarges>
            {isOpen && <AddToCart onClose={() => setIsOpen(false)} />}
          </DetailRightInfoBottom>
        </DetailRightInfo>
      </DetailWrapper>
    </DetailContainer>
  );
};

export default ProductDetailPage;
