import React, { useEffect, useState } from 'react';
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
  DetailBodyTwo
} from './ProductDetailElements';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Loading from '../../components/Loading';

// const PRODUCTDETAILS_URL = '/products/${id}';

const ProductDetailPage = ({ meData }) => {
  const [itemsDetail, setItemsDetail] = useState([]); //useState([]);
  const { id } = useParams();
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);

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
  }, [id,addLiked]);
  console.log('id', id);

  const [isOpen, setIsOpen] = useState(false);
  const handleLiked = (pk) => {
    setLoading(false);
    var tempItems = itemsDetail;
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
    setItemsDetail(tempItems);

  };
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

          <DetailRightInfoBottom>
          {/* {itemsDetail.map((item) => {
            return (
                    <LikeBtnWrapper key={item.pk}>
                      {meData && (
                        <LikeBtn  onClick={(e) => { e.preventDefault(); handleLiked(item.pk);}}>
                          {item.is_liked ? (
                              <FavoriteBorderIcon fontSize='medium' sx={{ color: '#e20000' }} />
                            ) : (
                              <FavoriteBorderIcon fontSize='medium' color='disabled'/>
                            )}
                          </LikeBtn>
                        )}
                    </LikeBtnWrapper>
                  );
            })} */}
            <LikeBtnWrapper>
            <FavoriteBorderIcon fontSize='medium' color='disabled'/>
            </LikeBtnWrapper>
            <ButtonLarges onClick={() => setIsOpen(true)}>
              Add to Cart
            </ButtonLarges>
            {isOpen && <SidebarMenu onClose={() => setIsOpen(false)} />}
          </DetailRightInfoBottom>
        </DetailRightInfo>
      </DetailWrapperOne>
      <DetailWrapperTwo>
        <DetailInfoWrap>
            <DetailInfoList>
              <InfoListDetail>
                <ListDetailBtn>
                  <span>DESCRIPTION</span>
                </ListDetailBtn>
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
              </InfoListDetail>
              <InfoListDetailTwo>
                <ListDetailBtn>
                  <span>SIZE GUIDE</span>
                </ListDetailBtn>
                {/* <DetailDescription>
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
                </DetailDescription> */}
              </InfoListDetailTwo>
              <InfoListDetailTwo>
                <ListDetailBtn>
                  <span>SHIPPING & RETURNS</span>
                </ListDetailBtn>
                {/* <DetailDescription>
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
                </DetailDescription> */}
              </InfoListDetailTwo>
              <InfoListDetailTwo>
                <ListDetailBtn>
                  <span>REVIEWS</span>
                </ListDetailBtn>
                {/* <DetailDescription>
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
                </DetailDescription> */}
              </InfoListDetailTwo>
            </DetailInfoList>
        </DetailInfoWrap>
      </DetailWrapperTwo>
    </DetailContainer>
  );
};

export default ProductDetailPage;
