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
import Pagination from '../../../components/AdminComponents/Pagination';
import { ButtonSmall, ButtonUtils } from '../../../components/ButtonElements';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Modal from '../../../components/Modal';
import {
  CouponContents,
  CouponExDuration,
  CouponModalBottom,
  CouponModalMain,
  CouponModalTop,
  CouponModalUsers,
  CouponModalUsersList,
  CouponModalWrap,
} from './CouponStyle';
import AdminModal from '../../../components/AdminComponents/AdminModal';
import AddNewCoupon from './AddNewCoupon';

const CouponManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState();
  const [couponEach, setCouponEach] = useState();
  const [couponDetails, setCouponDetails] = useState([]);
  const [selected, setSelected] = useState();
  const [isDrop, setIsDrop] = useState(false);
  const [modalShown, toggleModal] = useState(false);
  const [addModalShown, toggleAddModal] = useState(false);

  const [searchedList, setSearchedList] = useState();
  const [searchValue, setSearchValue] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const [userInput, setUserInput] = useState("");

  // const initialState = { name: null, inStock: null, price: null, type:null }

  const getCoupons = async () => {
    const couponList = await axios.get('/coupons/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('couponList', couponList?.data);
    setCoupons(couponList?.data);
    setSelected(coupons?.pk);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCoupons();
  }, [meData]);

  const handleOpenCoupon = async (pk) => {
    toggleModal(!modalShown);
    const couponEachList = await axios.get(`/coupons/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('couponEachList', couponEachList?.data);
    setCouponEach(couponEachList?.data);
    setSelected(couponEach.pk);
    setIsDrop(!isDrop);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coupons?.slice(firstPostIndex, lastPostIndex);

  // const handleSearch = (e) => {
  //   setSearchValue(e.target.value);
  // };
  // console.log('searchValue', searchValue);

  // useEffect(() => {
  //   setSearchedList(
  //     !searchValue
  //       ? currentPosts
  //       : currentPosts?.filter((search, index) => {
  //           return (
  //             search?.discount_rate
  //               ?.toString()
  //               .toLowerCase()
  //               .includes(searchValue.toString().toLowerCase()) ||
  //             search?.pk
  //               ?.toString()
  //               .toLowerCase()
  //               .includes(searchValue.toString().toLowerCase())
  //           );
  //         })
  //   );
  // }, [coupons, searchValue]);

  const handleDeleteCoupon = async (pk) => {
    if (window.confirm('Are you sure you want to delete this coupon?')) {
      const coupondel = await axios.delete(`/coupons/${pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('coupondel', coupondel?.data);
      window.location.reload();
      toggleModal(false);
    }
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Coupons</h1>
      <AdListTop>
        <AdListSearch>
          <input 
            type='text'
            placeholder='Search' 
            // onChange={handleSearch} 
            onChange={(e) => setUserInput(e.target.value)}
          />
        </AdListSearch>
        <AdListUtils>
          <ButtonSmall
            onClick={() => {
              toggleAddModal(!addModalShown);
            }}
          >
            Add
          </ButtonSmall>
          {/* <ButtonSmall>Delete</ButtonSmall> */}
        </AdListUtils>
      </AdListTop>
      <AdminModal
        className='coupon'
        shown={addModalShown}
        close={() => {
          toggleAddModal(false);
          window.location.reload();
        }}
      >
        <AddNewCoupon />
      </AdminModal>

      <AdListMid>
        <AdTable>
          <AdTHead className='coupon'>
            <AdTHeadeRow>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='discount'>DISCOUNT</AdTHeadCell>
              <AdTHeadCell className='duration'>DURATION</AdTHeadCell>
              <AdTHeadCell className='createData'>CREATE AT</AdTHeadCell>
              <AdTHeadCell className='details'></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts?.filter((list) => 
            list.pk?.toString().includes(userInput)
             || list.discount_rate?.toString().includes(userInput)
             || list.created_at?.toLowerCase().includes(userInput.toLowerCase())
             // date 검색을 어떻게 해야 할지
             || list.start_date?.toLowerCase().includes(userInput.toLowerCase())
             || list.end_date?.toLowerCase().includes(userInput.toLowerCase())
          )          
          .map((coupon) => {
            return (
              <AdTBody key={coupon?.pk} className='coupon'>
                <AdTBodyRow>
                  <AdTBodyCell className='id'>{coupon?.pk}</AdTBodyCell>
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
                    <ButtonUtils
                      onClick={(e) => {
                        handleOpenCoupon(coupon?.pk);
                      }}
                    >
                      View
                    </ButtonUtils>
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
      <AdminModal
        className='coupon'
        shown={modalShown}
        modalShown
        close={() => {
          // setCouponEach(couponEach?.reset());
          toggleModal(false);
        }}
      >
        <CouponModalWrap>
          <CouponModalTop>
            <CouponContents>
              <h2>{couponEach?.name?.toUpperCase()}</h2>
              <p>{couponEach?.description}</p>
            </CouponContents>
            <CouponExDuration>
              <p>
                {new Date(couponEach?.start_date).toDateString()} -{' '}
                {new Date(couponEach?.end_date).toDateString()}
              </p>
            </CouponExDuration>
          </CouponModalTop>
          <CouponModalMain>
            <CouponModalUsers>
              <strong>USERS</strong> total {couponEach?.users?.length}
            </CouponModalUsers>
            <CouponModalUsersList>
              {couponEach?.users?.map((cpUser, index) => {
                return (
                  <ul key={index}>
                    <li className='num'>{index + 1}</li>
                    <li className='usrname'>{cpUser?.username}</li>
                  </ul>
                );
              })}
            </CouponModalUsersList>
          </CouponModalMain>
          <CouponModalBottom>
            <ButtonUtils onClick={() => handleDeleteCoupon(couponEach?.pk)}>
              Delete Coupon
            </ButtonUtils>
          </CouponModalBottom>
        </CouponModalWrap>
      </AdminModal>
    </AdContainer>
  );
};

export default CouponManage;
