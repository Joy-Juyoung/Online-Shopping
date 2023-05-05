import React, { useEffect, useState, useRef } from 'react';
import axios from '../../api/axios';
import {
  OrderContainer,
  OrderList,
  OrderListWrap,
  OrderWrap,
  OrderWrapper,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '../OrderPage/OrderElements';
import {
  BackCircle,
  BackCircleLast,
  Circle,
  CircleLast,
  CouponBackFrame,
  CouponBackInfo,
  CouponBackInside,
  CouponBackP,
  CouponBackSide,
  CouponExpired,
  CouponFrame,
  CouponH,
  CouponHeader,
  CouponInfo,
  CouponInside,
  CouponListWrap,
  CouponP,
  CouponRate,
  Line,
  ReviewListEmpty,
  ViewDetails,
} from '../CouponPage/MyCouponsElements';
import Loading from '../../components/Loading';
import PageviewIcon from '@mui/icons-material/Pageview';
import Modal from '../../components/Modal';
import DiscountIcon from '@mui/icons-material/Discount';
import { ButtonSmall } from '../../components/ButtonElements';

const AddCoupon = ({ meData }) => {
  let ref = useRef();
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [couponEach, setCouponEach] = useState([]);
  const [couponDetails, setCouponDetails] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalShown, toggleModal] = useState(false);
  const [indexEven, setIndexEven] = useState(false);

  const getCoupons = async () => {
    const couponList = await axios.get('/coupons/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('couponList', couponList?.data);
    setCoupons(couponList?.data);
    setSelected(coupons.pk);
    setLoading(false);
  };

  const handleOpenCoupon = async (pk) => {
    const couponEachList = await axios.get(`/coupons/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('couponEachList', couponEachList?.data);
    setCouponEach(couponEachList?.data);
    setSelected(couponEach.pk);
    setIsDrop(!isDrop);
    // setIndexEven(!indexEven);

    if (!isDrop) {
      setCouponDetails([...couponDetails, couponEach]);
    } else {
      setCouponDetails([]);
    }
  };
  // console.log('couponEach', couponEach);
  console.log('couponDetails', couponDetails);

  useEffect(() => {
    setLoading(true);
    getCoupons();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>Your Coupons</h1>
        <OrderWrap>
          <OrderList>
            {coupons?.length === 0 ? (
              <ReviewListEmpty>
                <span>No coupons found.</span>
              </ReviewListEmpty>
            ) : (
              <div>
                {coupons?.map((coupon, index) => {
                  return (
                    <ul key={index} ref={ref}>
                      <li style={{ display: 'flex' }}>
                        <input type='radio' name='selectedCoupon' />
                        <div>
                          <div>{coupon?.discount_rate}</div>
                          <div>
                            <span className='one'>%</span>
                            <span className='two'>OFF</span>
                          </div>
                        </div>

                        <ViewDetails
                          onClick={() => {
                            handleOpenCoupon(coupon?.pk);
                          }}
                        >
                          <PageviewIcon
                            onClick={() => {
                              toggleModal(!modalShown);
                            }}
                          />
                        </ViewDetails>
                      </li>
                    </ul>
                  );
                })}
                <ButtonSmall>Apply Coupon</ButtonSmall>
              </div>
            )}
          </OrderList>
        </OrderWrap>
      </OrderWrapper>
      <Modal
        className='coupon'
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <CouponBackFrame>
          <h3>{couponEach?.discount_rate}% Coupon</h3>
          <BackCircle></BackCircle>
          <CouponBackInside>
            {/* <CouponBackInside>
            <CouponBackInfo> */}
            <CouponBackInfo>
              <CouponBackP className='name'>{couponEach?.name}</CouponBackP>
              <CouponBackP className='description'>
                {couponEach?.description}
              </CouponBackP>
              <CouponBackP className='expire'>
                from {new Date(couponEach?.start_date).toLocaleDateString()}
                to {new Date(couponEach?.end_date).toLocaleDateString()}
              </CouponBackP>
            </CouponBackInfo>
          </CouponBackInside>
          {/* </CouponBackInfo>
          </CouponBackInside>
          <CircleLast></CircleLast> */}
          <BackCircleLast></BackCircleLast>
        </CouponBackFrame>
      </Modal>
    </OrderContainer>
  );
};

export default AddCoupon;
