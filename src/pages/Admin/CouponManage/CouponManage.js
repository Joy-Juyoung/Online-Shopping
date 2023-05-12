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
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/AdminComponents//Pagination';
import { ButtonSmall } from '../../../components/ButtonElements';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CouponManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState();
  const [couponEach, setCouponEach] = useState([]);
  const [couponDetails, setCouponDetails] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getCoupons = async () => {
    const couponList = await axios.get('/coupons/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('couponList', couponList?.data);
    setCoupons(couponList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCoupons();
    getCouponEach();
  }, [meData]);

  const getCouponEach = () => {
    let result;
    coupons?.map(
      async (cp) =>
        await axios
          .get(`/coupons/${cp.pk}`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          })
          .then((response) => {
            result = response.data;
            setCouponEach(result);
            // console.log('result', result);
          })
    );

    // setCouponDetails([...couponDetails, couponEach]);
  };
  console.log('couponEachList', couponEach);
  // console.log('couponDetails', couponDetails);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coupons?.slice(firstPostIndex, lastPostIndex);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Custoemrs</h1>
      <AdListTop>
        <AdListSearch>
          <input type='text' placeholder='Search' />
        </AdListSearch>
        <AdListUtils>
          <ButtonSmall>Add</ButtonSmall>
          <ButtonSmall>Delete</ButtonSmall>
        </AdListUtils>
      </AdListTop>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              <AdTHeadCell className='check'>
                <input type='checkbox' />
              </AdTHeadCell>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              {/* <AdTHeadCell className='cName'>COUPON</AdTHeadCell> */}
              <AdTHeadCell className='discount'>DISCOUNT</AdTHeadCell>
              <AdTHeadCell className='duration'>DURATION</AdTHeadCell>
              <AdTHeadCell className='createData'>CREATE AT</AdTHeadCell>
              <AdTHeadCell className='details'></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts?.map((coupon) => {
            return (
              <AdTBody key={coupon?.pk}>
                <AdTBodyRow>
                  <AdTBodyCell className='check'>
                    <CheckInput type='checkbox' />
                  </AdTBodyCell>
                  <AdTBodyCell className='id'>{coupon?.pk}</AdTBodyCell>
                  {/* <AdTBodyCell className='cName'>Coupon name</AdTBodyCell> */}
                  <AdTBodyCell className='discount'>
                    {coupon?.discount_rate}%
                  </AdTBodyCell>
                  <AdTBodyCell className='duration'>
                    {new Date(coupon?.start_date).toDateString()} -{' '}
                    {new Date(coupon?.end_date).toDateString()}
                  </AdTBodyCell>
                  <AdTBodyCell className='createAt'>
                    {new Date(coupon?.created_at).toLocaleString('en-ca')}
                  </AdTBodyCell>
                  <AdTBodyCell className='details'>
                    <ArrowForwardIosIcon fontSize='15px' />
                  </AdTBodyCell>
                </AdTBodyRow>
              </AdTBody>
            );
          })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <Pagination
          totalPosts={coupons?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </AdListBottom>
    </AdContainer>
  );
};

export default CouponManage;
