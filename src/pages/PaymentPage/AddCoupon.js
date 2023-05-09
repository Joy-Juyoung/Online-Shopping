import React, { useEffect, useState, useRef } from 'react';
import axios from '../../api/axios';
import {
  OrderContainer,
  OrderList,
  OrderWrap,
  OrderWrapper,
} from '../OrderPage/OrderElements';
import {
  BackCircle,
  BackCircleLast,
  CloseCircle,
  CouponBackFrame,
  CouponBackInfo,
  CouponBackInside,
  CouponBackP,
  ReviewListEmpty,
  ViewDetails,
} from '../CouponPage/MyCouponsElements';
import CloseIcon from '@mui/icons-material/Close';
import PageviewIcon from '@mui/icons-material/Pageview';
import Modal from '../../components/Modal';
import DiscountIcon from '@mui/icons-material/Discount';
import { ButtonSmall } from '../../components/ButtonElements';

const AddCoupon = ({ meData, onClose }) => {
  let ref = useRef();
  const [coupons, setCoupons] = useState([]);
  const [couponEach, setCouponEach] = useState([]);
  const [couponDetails, setCouponDetails] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState();
  const [modalShown, toggleModal] = useState(false);

  const [selectedOption, setSelectedOption] = useState();
  const [savedCp, setSavedCp] = useState([]);
  // const [getCp, setGetCp] = useState(
  //   JSON.parse(localStorage.getItem('getCoupon'))
  // );

  const getCoupons = async () => {
    const couponList = await axios.get('/coupons/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('couponList', couponList?.data);
    setCoupons(couponList?.data);
    setSelected(coupons.pk);
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

    if (!isDrop) {
      setCouponDetails([...couponDetails, couponEach]);
    } else {
      setCouponDetails([]);
    }
  };
  console.log('couponDetails', couponDetails);

  useEffect(() => {
    getCoupons();
  }, []);

  const selectedCoupon = (pk) => {
    setSelectedOption(pk);

    coupons?.forEach((c) => {
      if (c?.pk === pk) {
        setSavedCp([c]);
      }
    });
  };

  console.log('selectedOption', selectedOption);

  const handleApply = () => {
    onClose();
  };

  useEffect(() => {
    localStorage.setItem('getCoupon', JSON.stringify(savedCp));
  }, [savedCp, selectedOption]);

  return (
    <OrderContainer>
      <OrderWrapper>
        <h1 style={{ margin: '0' }}>Your Coupons</h1>
        <OrderWrap>
          <div style={{ margin: '10px 0' }}>
            {coupons?.length === 0 ? (
              <ReviewListEmpty>
                <span>No coupons found.</span>
              </ReviewListEmpty>
            ) : (
              <div>
                <ul>
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      border: '1px dashed #000',
                      borderRadius: '5px',
                      margin: '5px 0',
                      padding: '10px 10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type='radio'
                        name='selectedCoupon'

                        // checked={selectedOption === coupon?.pk}
                        // onChange={(e) => {
                        //   e.preventDefault();
                        //   selectedCoupon(coupon?.pk);
                        // }}
                      />
                      <div style={{ marginLeft: '5px' }}>none</div>
                    </div>
                  </li>
                  {coupons?.map((coupon, index) => {
                    return (
                      <li
                        key={index}
                        ref={ref}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          border: '1px dashed #000',
                          borderRadius: '5px',
                          margin: '5px 0',
                          paddingLeft: '10px',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <input
                            type='radio'
                            name='selectedCoupon'
                            id={coupon?.pk}
                            value={coupon?.pk}
                            checked={selectedOption === coupon?.pk}
                            onChange={(e) => {
                              // e.preventDefault();
                              selectedCoupon(coupon?.pk);
                            }}
                          />
                          <div style={{ marginLeft: '5px' }}>
                            {coupon?.discount_rate}%OFF
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
                    );
                  })}
                </ul>
                <ButtonSmall
                  onClick={handleApply}
                  style={{ margin: '15px auto' }}
                >
                  Apply Coupon
                </ButtonSmall>
              </div>
            )}
          </div>
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
          <CloseCircle
            onClick={() => {
              toggleModal(false);
            }}
          >
            <CloseIcon />
          </CloseCircle>
          {/* <p>Your Coupon Is,</p> */}
          <BackCircle></BackCircle>
          <CouponBackInside>
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

          <BackCircleLast></BackCircleLast>
        </CouponBackFrame>
      </Modal>
    </OrderContainer>
  );
};

export default AddCoupon;
