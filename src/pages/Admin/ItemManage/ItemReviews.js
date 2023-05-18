import React, { useEffect, useState, useMemo } from 'react';
import {
  AdContainer,
  AdListBottom,
  AdListMid,
  AdListSearch,
  AdListTop,
  AdListUtils,
  AdTable,
  AdTBody,
  AdTBodyCell,
  AdTBodyRow,
  AdTHead,
  AdTHeadCell,
  AdTHeadeRow,
  BodyImg,
  CheckInput,
} from '../AdminCommonElements';

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
} from './reviewStyle';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/AdminComponents//Pagination';
import { ButtonSmall } from '../../../components/ButtonElements';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const ItemReviews = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState();
  const [newList, setNewList] = useState();

  const [searchedProductList, setSearchedProductList] = useState();
  const [searchProductValue, setSearchProductValue] = useState();
  const [searchedReviewList, setSearchedReviewList] = useState();
  const [searchReviewValue, setSearchReviewValue] = useState();

  const getReviews = async () => {
    const reviewList = await axios.get('/reviews/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('reviewList', reviewList.data);
    setReviews(reviewList?.data);

    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getReviews();
  }, []);

  let uniqueList = reviews?.filter(
    (rv, index) => rv?.Product_Name?.indexOf(rv?.Product_Name) !== index
  );

  console.log('uniqueList', uniqueList);

  const handleViewReviews = async (pk) => {
    console.log('pk', pk);

    const productReview = await axios.get(`/products/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('newList', productReview.data);
    setNewList(productReview?.data);
    // setReviewByProduct(newList?.reviews?.map((nrv) => nrv));
  };
  console.log('newList', newList);

  const handleProductSearch = (e) => {
    setSearchProductValue(e.target.value);
  };
  console.log('searchProductValue', searchProductValue);

  useEffect(() => {
    setSearchedProductList(
      !searchProductValue
        ? uniqueList
        : uniqueList.filter((search, index) => {
            return (
              search?.Product_Name?.toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) ===
                index ||
              search?.product
                ?.toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) === index
            );
          })
    );
  }, [searchProductValue]);

  const handleReviewSearch = (e) => {
    setSearchProductValue(e.target.value);
  };
  console.log('searchProductValue', searchProductValue);

  useEffect(() => {
    setSearchedReviewList(
      !searchProductValue
        ? newList?.reviews
        : newList?.reviews?.filter((search, index) => {
            return (
              search?.Product_Name?.toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) ===
                index ||
              search?.user?.username
                .toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) ===
                index ||
              search?.payload
                ?.toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) ===
                index ||
              search?.product
                ?.toString()
                .toLowerCase()
                .indexOf(searchProductValue.toString().toLowerCase()) === index
            );
          })
    );
  }, [searchProductValue]);

  const handleViewReview = (pk) => {};

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
                <AdReviewTbody>
                  {uniqueList?.map((un, index) => {
                    // {searchedProductList?.map((un, index) => {
                    return (
                      <AdReviewBodyTr
                        key={index}
                        onClick={() => handleViewReviews(un?.product)}
                      >
                        <AdReviewTd
                          style={{ width: '15%', textAlign: 'center' }}
                        >
                          {un?.product}
                        </AdReviewTd>
                        <AdReviewTd>{un?.Product_Name}</AdReviewTd>
                      </AdReviewBodyTr>
                    );
                  })}
                </AdReviewTbody>
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
                Select a product to view the review list
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
                  <AdReviewTbody>
                    {newList?.reviews?.map((nrv, index) => {
                      // {searchedReviewList.map((nrv, index) => {
                      return (
                        <AdReviewBodyTr key={index}>
                          <AdReviewTd
                            style={{ width: '7%', textAlign: 'center' }}
                          >
                            {nrv?.user?.pk}
                          </AdReviewTd>
                          <AdReviewTd>{nrv?.user?.username}</AdReviewTd>
                          <AdReviewTd>{nrv?.rating}</AdReviewTd>
                          <AdReviewTd style={{ width: '35%' }}>
                            {nrv?.payload}
                          </AdReviewTd>
                          <AdReviewTd>
                            {new Date(nrv?.updated_at).toLocaleDateString()}
                          </AdReviewTd>
                          <AdReviewTd>
                            <button onClick={() => handleViewReview(nrv?.pk)}>
                              View
                            </button>
                            {/* View modal -> review more and delete */}
                          </AdReviewTd>
                        </AdReviewBodyTr>
                      );
                    })}
                  </AdReviewTbody>
                </AdReviewTable>
              </AdReviewListWrap>
            )}
          </AdReviewItemList>
        </AdReviewRightSide>
      </AdReviewWrap>
    </AdContainer>
  );
};

export default ItemReviews;
