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
  const [reviewByProduct, setReviewByProduct] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

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

  // const lastPostIndex = currentPage * postsPerPage;
  // const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = reviews?.slice(firstPostIndex, lastPostIndex);

  // useEffect(() => {
  //   reviews?.map((rv, index) => {
  //     if (newList.length >= reviews?.length) {
  //       setNewList(newList);
  //     } else {
  //       newList.push({
  //         product_pk: rv?.product,
  //         prodct_name: rv?.Product_Name,
  //       });
  //     }
  //   });
  // setNewList({
  //   ...newList,
  //   [index]: {
  //     product_pk: rv?.product,
  //     prodct_name: rv?.Product_Name,
  //   },
  // });
  // }, [reviews]);

  let uniqueList = reviews?.filter(
    (rv, index) => rv?.Product_Name?.indexOf(rv?.Product_Name) !== index
  );

  // console.log('uniqueList', uniqueList);

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
  // console.log('newList', newList);

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
          <h2>Select Product</h2>
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
          <h2>Reviews</h2>
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
                    </AdReviewHeadTr>
                  </AdReviewThead>
                  <AdReviewTbody>
                    {newList?.reviews?.map((nrv, index) => {
                      return (
                        <AdReviewBodyTr key={index}>
                          <AdReviewTd
                            style={{ width: '7%', textAlign: 'center' }}
                          >
                            {nrv?.user?.pk}
                          </AdReviewTd>
                          <AdReviewTd>{nrv?.user?.username}</AdReviewTd>
                          <AdReviewTd>{nrv?.rating}</AdReviewTd>
                          <AdReviewTd style={{ width: '40%' }}>
                            {nrv?.payload}
                          </AdReviewTd>
                          <AdReviewTd>
                            {new Date(nrv?.updated_at).toLocaleDateString()}
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
