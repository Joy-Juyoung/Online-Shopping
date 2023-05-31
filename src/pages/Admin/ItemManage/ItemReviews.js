import React, { useEffect, useState, useMemo } from 'react';
import { AdContainer } from '../AdminCommonElements';
import {
  AdReviewWrap,
  AdReviewLeftSide,
  AdReviewItemList,
  AdReviewTable,
  AdReviewThead,
  AdReviewHeadTr,
  AdReviewTh,
  AdReviewTbody,
  AdReviewBodyTr,
  AdReviewTd,
  AdReviewRightSide,
  AdReviewEmpty,
  AdReviewListWrap,
  AdReviewItemInfo,
  AdReviewMidSide,
  AdReviewHeader,
  AdReviewDetailWrap,
  AdReviewDetailName,
  AdReviewDetailInfo,
  AdReviewDetails,
  AdReviewDetailTop,
  AdReviewDetailAvarta,
  AdReviewDetailUser,
  AdReviewDetailRating,
  AdReviewDetailDate,
  AdReviewDetailPayload,
  AdReviewDetailBtn,
  AdReviewDetailUserInfo,
  AdReviewNextTbody,
} from './reviewStyle';
import Avatar from '@mui/material/Avatar';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import { ButtonUtils } from '../../../components/ButtonElements';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ReplyIcon from '@mui/icons-material/Reply';
import AdminModal from '../../../components/AdminComponents/AdminModal';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdButtonUtils } from '../../../components/AdminComponents/AdminButtons';

const ItemReviews = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState();
  const [newList, setNewList] = useState();
  const [modalShown, toggleModal] = useState(false);
  const [reviewByUser, setReviewByUser] = useState();

  const [searchedProductList, setSearchedProductList] = useState();
  const [searchProductValue, setSearchProductValue] = useState();
  const [searchedReviewList, setSearchedReviewList] = useState();
  const [searchReviewValue, setSearchReviewValue] = useState();

  const getReviews = async () => {
    const reviewList = await axios.get('/reviews/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('reviewList', reviewList.data);
    setReviews(reviewList?.data);

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getReviews();
  }, []);

  // let uniqueList = reviews?.filter(
  //   (rv, index, rf) => rf?.pk?.toString().indexOf(rv?.pk?.toString()) !== index
  // );

  let s = new Set();
  let uniqueList = reviews?.filter((d) => {
    if (!s.has(d?.Product_Name)) {
      s.add(d?.Product_Name);
      return d;
    }
  });

  const handleViewReviews = async (pk) => {
    const productReview = await axios.get(`/products/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setNewList(productReview?.data);
  };
  // console.log('newList', newList);

  const handleProductSearch = (e) => {
    setSearchProductValue(e.target.value);
  };

  useEffect(() => {
    setSearchedProductList(
      !searchProductValue
        ? uniqueList
        : uniqueList.filter((search, index) => {
            return (
              search?.Product_Name?.toString()
                .toLowerCase()
                .includes(searchProductValue.toString().toLowerCase()) ||
              search?.product
                ?.toString()
                .toLowerCase()
                .includes(searchProductValue.toString().toLowerCase())
            );
          })
    );
  }, [reviews, searchProductValue]);

  const handleReviewSearch = (e) => {
    setSearchReviewValue(e.target.value);
  };

  useEffect(() => {
    setSearchedReviewList(
      !searchReviewValue
        ? newList?.reviews
        : newList?.reviews?.filter((search, index) => {
            return (
              search?.Product_Name?.toString()
                .toLowerCase()
                .includes(searchReviewValue.toString().toLowerCase()) ||
              search?.user?.username
                .toString()
                .toLowerCase()
                .includes(searchReviewValue.toString().toLowerCase()) ||
              search?.payload
                ?.toString()
                .toLowerCase()
                .includes(searchReviewValue.toString().toLowerCase()) ||
              search?.product
                ?.toString()
                .toLowerCase()
                .includes(searchReviewValue.toString().toLowerCase())
            );
          })
    );
  }, [newList, searchedProductList, searchProductValue, searchReviewValue]);

  const handleView = async (pk) => {
    toggleModal(!modalShown);
    const review = await axios.get(`/reviews/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('Review', review.data);
    setReviewByUser(review.data);
  };

  const handleReviewDelete = async (pk) => {
    // console.log('pk', pk);
    if (window.confirm('Are you sure you want to delete this review?')) {
      const reviewDel = await axios.delete(`/reviews/${pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('Review', reviewDel.data);
      window.location.reload();
    }
    // else {
    //   }
    // setReviewByUser(review.data);
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Product Reviews</h1>
      <AdReviewWrap>
        <AdReviewLeftSide>
          <AdReviewHeader>
            <h2>Select Product</h2>
            <input
              type='text'
              placeholder='Search'
              onChange={handleProductSearch}
            />
          </AdReviewHeader>
          <AdReviewItemList>
            <AdReviewListWrap>
              <AdReviewTable>
                <AdReviewThead>
                  <AdReviewHeadTr>
                    <AdReviewTh style={{ width: '15%', textAlign: 'center' }}>
                      NO.
                    </AdReviewTh>
                    <AdReviewTh>PRODUCT NAME</AdReviewTh>
                  </AdReviewHeadTr>
                </AdReviewThead>
                {searchedProductList?.map((un, index) => {
                  {
                    /* {uniqueList?.map((un, index) => { */
                  }
                  return (
                    <AdReviewTbody key={index}>
                      <AdReviewBodyTr
                        onClick={() => handleViewReviews(un?.product)}
                        style={
                          un?.product === newList?.id
                            ? {
                                backgroundColor: '#ffcd6b',
                                padding: '3px 10px',
                              }
                            : {}
                        }
                      >
                        <AdReviewTd
                          style={{ width: '15%', textAlign: 'center' }}
                        >
                          {un?.product}
                        </AdReviewTd>

                        <AdReviewTd>{un?.Product_Name}</AdReviewTd>
                      </AdReviewBodyTr>
                    </AdReviewTbody>
                  );
                })}
              </AdReviewTable>
            </AdReviewListWrap>
          </AdReviewItemList>
        </AdReviewLeftSide>
        <AdReviewMidSide>
          <KeyboardDoubleArrowRightIcon />
        </AdReviewMidSide>
        <AdReviewRightSide>
          <AdReviewHeader>
            <h2>Reviews</h2>
            <input
              type='text'
              placeholder='Search'
              onChange={handleReviewSearch}
            />
          </AdReviewHeader>
          <AdReviewItemList>
            {newList === undefined ? (
              <AdReviewEmpty>
                <ReplyIcon />
                <p>Select a product</p>
                <p>to view the review list</p>
              </AdReviewEmpty>
            ) : (
              <AdReviewListWrap>
                <AdReviewItemInfo>
                  <span className='imgSpan'>
                    <img
                      src={newList?.photos?.[0]?.picture}
                      alt={newList?.name}
                      style={{ width: '50px' }}
                    />
                  </span>
                  <span className='nameSpan'>
                    {newList?.id}. {newList?.name}
                  </span>
                </AdReviewItemInfo>
                <AdReviewTable>
                  <AdReviewThead>
                    <AdReviewHeadTr>
                      <AdReviewTh style={{ width: '7%', textAlign: 'center' }}>
                        ID
                      </AdReviewTh>
                      <AdReviewTh>USERNAME</AdReviewTh>
                      <AdReviewTh>RATING</AdReviewTh>
                      <AdReviewTh>PAYLOAD</AdReviewTh>
                      <AdReviewTh>UPDATEAT</AdReviewTh>
                      <AdReviewTh></AdReviewTh>
                    </AdReviewHeadTr>
                  </AdReviewThead>
                  {/* {newList?.reviews?.map((nrv, index) => { */}
                  {searchedReviewList?.map((nrv, index) => {
                    return (
                      <AdReviewTbody key={index}>
                        <AdReviewBodyTr>
                          <AdReviewTd
                            style={{ width: '7%', textAlign: 'center' }}
                          >
                            {nrv?.user?.pk}
                          </AdReviewTd>
                          <AdReviewTd>{nrv?.user?.username}</AdReviewTd>
                          <AdReviewTd>{nrv?.rating}</AdReviewTd>
                          <AdReviewTd style={{ width: '30%' }}>
                            {nrv?.payload?.length > 15 ? (
                              `${nrv?.payload?.substring(0, 15)}...`
                            ) : (
                              <> {nrv?.payload}</>
                            )}
                          </AdReviewTd>
                          <AdReviewTd>
                            {new Date(nrv?.updated_at).toLocaleDateString()}
                          </AdReviewTd>
                          <AdReviewTd>
                            <ButtonUtils onClick={() => handleView(nrv?.pk)}>
                              View
                            </ButtonUtils>
                            {/* View modal -> review more and delete */}
                          </AdReviewTd>
                        </AdReviewBodyTr>
                      </AdReviewTbody>
                    );
                  })}
                </AdReviewTable>
              </AdReviewListWrap>
            )}
          </AdReviewItemList>
        </AdReviewRightSide>
      </AdReviewWrap>
      <AdminModal
        className='coupon'
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <AdReviewDetailWrap>
          <h2>
            {reviewByUser?.product}. {reviewByUser?.Product_Name}
          </h2>
          <AdReviewDetailInfo>
            {/* <AdReviewDetails> */}
            <AdReviewDetailUserInfo>
              <AdReviewDetailAvarta>
                <Avatar sx={{ width: 30, height: 30 }}>
                  {reviewByUser?.user?.username?.substring(0, 1)}
                </Avatar>
              </AdReviewDetailAvarta>
              <AdReviewDetailUser>
                <span>{reviewByUser?.user?.username}</span>
              </AdReviewDetailUser>
              <AdReviewDetailRating
                size='small'
                value={reviewByUser?.rating || 0}
                readOnly
              />
            </AdReviewDetailUserInfo>

            <AdReviewDetailDate>
              <span>Reviewed on</span>
              {new Date(reviewByUser?.updated_at).toLocaleString('en-ca')}
            </AdReviewDetailDate>

            <AdReviewDetailPayload>
              <span>{reviewByUser?.payload}</span>
            </AdReviewDetailPayload>
            {/* </AdReviewDetails> */}
          </AdReviewDetailInfo>

          <AdReviewDetailBtn>
            <AdButtonUtils onClick={() => handleReviewDelete(reviewByUser?.pk)}>
              Delete
            </AdButtonUtils>
          </AdReviewDetailBtn>
        </AdReviewDetailWrap>
      </AdminModal>
    </AdContainer>
  );
};

export default ItemReviews;
