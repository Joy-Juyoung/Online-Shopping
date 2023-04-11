import React, { useEffect, useRef, useState } from 'react';
import axios from '../../api/axios';
import {
  DetailContainer,
  DetailWrapperOne,
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
  DetailWrapperTwo,
  DetailInfoWrap,
  DetailInfoList,
  InfoListDetail,
  InfoListDetailTwo,
  ListDetailBtn,
  DetailDescription,
  DescriptionList,
  DescriptionListDetail,
  ListDetailBody,
  DetailBodyOne,
  DetailBodyTwo,
  ButtonLargeWrap,
} from './ProductDetailElements';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import SizeImage from '../../asset/size.png';

import AddToCart from './AddToCart';

import Loading from '../../components/Loading';
import TestAddToCart from './AddToCart';

// const PRODUCTDETAILS_URL = '/products/${id}';
const SHIPPING_RETURN_URL = '/settings/all';

const ProductDetailPage = ({ all, meData, itemAllKinds, itemKinds, wishItems }) => {
  const [itemsDetail, setItemsDetail] = useState([]); //useState([]);
  const { id } = useParams();
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const ref = useRef();

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

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
  }, [id, addLiked]);
  console.log('id', id);

  const [shipReturn, setShipReturn] = useState([]);
  const getShipReturn = async () => {
    const shipData = await axios.get(SHIPPING_RETURN_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('shipData', shipData?.data);
    setShipReturn(shipData?.data);
  };

  useEffect(() => {
    getShipReturn();
    // setMe(meData);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [description, setDescription] = useState(true);
  const [size, setSize] = useState(false);
  const [shippingReturn, setShippingReturn] = useState(false);
  const [reviews, setReviews] = useState(false);

      const ShowDescription = () => {
      if(description === false) {
        setDescription(true)
        setSize(false)
        setShippingReturn(false)
        setReviews(false)
       } else {
        setDescription(false)
        setSize(false)
        setShippingReturn(false)
        setReviews(false)
      }
    }
    const ShowSize = () => {
      if(size === true) {
        setSize(false)
        setDescription(false)
        setShippingReturn(false)
        setReviews(false)
      } else {
        setSize(true)
        setDescription(false)
        setShippingReturn(false)
        setReviews(false)
      }
    }
    const ShowShippingReturn = () => {
      if(shippingReturn === true) {
        setShippingReturn(false)
        setSize(false)
        setDescription(false)
        setReviews(false)
      } else {
        setShippingReturn(true)
        setSize(false)
        setDescription(false)
        setReviews(false)
      }
    }
    const ShowReviews = () => {
      if(reviews === true) {
        setShippingReturn(false)
        setSize(false)
        setDescription(false)
        setReviews(false)
      } else {
        setReviews(true)
        setShippingReturn(false)
        setSize(false)
        setDescription(false)
      }
    }

  const handleLiked = (pk) => {
    if (itemsDetail.pk === pk) {
      itemsDetail.is_liked = !itemsDetail.isLiked;

      const addLike = axios.put(
        '/wishlists/',
        {
          product_pk: itemsDetail.pk,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setAddLiked(addLike);
      window.location.reload(
        `/products/${id}`
      );
      // navigate(`/products/productAllParentsKinds/${itemAllKinds.pk}`);
    }
   };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        isOpen &&
        ref.current &&
        !ref.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isOpen]);


  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );


  return (
    <DetailContainer>
      <DetailWrapperOne>
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

          <DetailRightInfoBottom >
            <LikeBtnWrapper >
              {meData && (
                <LikeBtn  onClick={(e) => {
                            e.preventDefault();
                            handleLiked(itemsDetail.pk);
                          }}>
                  {itemsDetail?.is_liked ? (
                      <FavoriteBorderIcon fontSize='medium' sx={{ color: '#e20000' }} />
                    ) : (
                      <FavoriteBorderIcon fontSize='medium' color='disabled'/>
                    )}
                  </LikeBtn>
                )};
              </LikeBtnWrapper>
{/* 
            <LikeBtnWrapper>
              <LikeBtn>
              <FavoriteBorderIcon fontSize='medium' color='disabled' />
              </LikeBtn>
            </LikeBtnWrapper> */}
            <ButtonLarges onClick={() => setIsOpen(true)}>
              Add to Cart
            </ButtonLarges>

            {/* <ButtonLargeWrap ref={ref}>
            <ButtonLarges onClick={() => setIsOpen(true)}>
              Add to Cart
            </ButtonLarges>
            </ButtonLargeWrap> */}
            {isOpen && <AddToCart onClose={() => setIsOpen(false)} />}

          </DetailRightInfoBottom>
        </DetailRightInfo>
      </DetailWrapperOne>
      <DetailWrapperTwo>
        <DetailInfoWrap>
          <DetailInfoList>
             <InfoListDetail>
              <ListDetailBtn onClick={ShowDescription}>
                <span>DESCRIPTION</span>
              </ListDetailBtn>
              {description && (
              <DetailDescription>
                <DescriptionList>
                  <DescriptionListDetail>
                    <ListDetailBody>
                      <DetailBodyOne>
                        <span>
                          * Composition : 97% cotton and 3% ployurethane
                        </span>
                      </DetailBodyOne>
                      <DetailBodyTwo>
                        <span>* Color : Red</span>
                      </DetailBodyTwo>
                      <DetailBodyTwo>
                        <span>* Country of origin : South Korea</span>
                      </DetailBodyTwo>
                      <DetailBodyTwo>
                        <span>* Product No : 123455</span>
                      </DetailBodyTwo>
                      <DetailBodyTwo>
                        <span>* For more information, click DETAIL IMAGES</span>
                      </DetailBodyTwo>
                    </ListDetailBody>
                  </DescriptionListDetail>
                </DescriptionList>
              </DetailDescription>
              )}
            </InfoListDetail>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowSize}>
                <span>SIZE GUIDE</span>
              </ListDetailBtn>
              {size && (
              <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <img src={SizeImage}/>
                        </DetailBodyOne>
                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
                )}
            </InfoListDetailTwo>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowShippingReturn}>
                <span>SHIPPING & RETURNS</span>
              </ListDetailBtn>
              {shippingReturn && (
              <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <span>
                            <strong> * Shipping : </strong> 
                            <br/>
                            <p>{shipReturn.shipping_description}</p>
                          </span>
                        </DetailBodyOne>
                        <DetailBodyTwo>
                          <span>
                            <strong>* Duties and taxes : </strong>
                            <br/>
                            <p>{shipReturn.duties_and_taxes} </p>
                          </span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>
                            <strong>* Returns and refunds : </strong> 
                            <br/>
                            <p>{shipReturn.returns_and_refunds}</p>
                          </span>
                        </DetailBodyTwo>

                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
                )}
            </InfoListDetailTwo>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowReviews}>
                <span>REVIEWS</span>
              </ListDetailBtn>
              {reviews && (
              <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <span>* Composition : 97% cotton and 3% ployurethane</span>
                        </DetailBodyOne>
                        <DetailBodyTwo>
                          <span>* Color : Red</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>* Country of origin : South Korea</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>* Product No : 123455</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>* For more information, click DETAIL IMAGES</span>
                        </DetailBodyTwo>
                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
                )}
            </InfoListDetailTwo>
          </DetailInfoList>
        </DetailInfoWrap>
      </DetailWrapperTwo>
    </DetailContainer>
  );
};

export default ProductDetailPage;
