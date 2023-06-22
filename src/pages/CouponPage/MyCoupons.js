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
  Circle,
  CircleLast,
  CloseCircle,
  CouponBackFrame,
  CouponBackInfo,
  CouponBackInside,
  CouponBackP,
  CouponFrame,
  CouponH,
  CouponHeader,
  CouponInfo,
  CouponInside,
  CouponListWrap,
  CouponP,
  CouponRate,
  ReviewListEmpty,
  ViewDetails,
  LoadMore,
} from './MyCouponsElements';
import CloseIcon from '@mui/icons-material/Close';
import Loading from '../../components/Loading';
import PageviewIcon from '@mui/icons-material/Pageview';
import Modal from '../../components/Modal';
import DiscountIcon from '@mui/icons-material/Discount';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  LoadMoreBtnDisabled,
  LoadMoreBtn,
} from '../../components/ButtonElements';

const MyCoupons = ({ meData }) => {
  let ref = useRef();
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [couponEach, setCouponEach] = useState([]);
  const [couponDetails, setCouponDetails] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  const [selected, setSelected] = useState();

  const [modalShown, toggleModal] = useState(false);

  const [nextList, setNextList] = useState(9);

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
  // console.log('couponDetails', couponDetails);

  useEffect(() => {
    setLoading(true);
    getCoupons();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleShowMore = () => {
    setNextList(nextList + 9);
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>My Coupons</h1>
        <OrderWrap>
          <OrderList>
            {coupons?.length === 0 ? (
              <ReviewListEmpty>
                <span>No coupons found.</span>
              </ReviewListEmpty>
            ) : (
              <CouponListWrap>
                {coupons?.slice(0, nextList).map((coupon, index) => {
                  return (
                    <CouponFrame key={index} ref={ref}>
                      <Circle></Circle>

                      <CouponInside
                        style={{
                          backgroundColor: index % 2 ? '#FEE599' : '#529292',
                        }}
                      >
                        <CouponHeader>
                          <span>COUPON</span>
                        </CouponHeader>
                        <CouponInfo>
                          <CouponRate
                            style={{
                              color: index % 2 ? '#000' : '#fff',
                            }}
                          >
                            <CouponH>{coupon?.discount_rate}</CouponH>
                            <CouponP>
                              <span className='one'>%</span>
                              <span className='two'>OFF</span>
                            </CouponP>
                          </CouponRate>
                        </CouponInfo>

                        <ViewDetails
                          onClick={(e) => {
                            handleOpenCoupon(coupon?.pk);
                          }}
                        >
                          <PageviewIcon
                            style={{
                              color: index % 2 ? '#000' : '#fff',
                            }}
                            onClick={() => {
                              toggleModal(!modalShown);
                            }}
                          />
                        </ViewDetails>
                      </CouponInside>
                      <CircleLast></CircleLast>
                    </CouponFrame>
                  );
                })}
              </CouponListWrap>
            )}
          </OrderList>
          <LoadMore>
            {nextList / coupons?.length <= 1 ? (
              <LoadMoreBtn onClick={handleShowMore}>
                Load more <ExpandMoreIcon />
              </LoadMoreBtn>
            ) : (
              <LoadMoreBtnDisabled disabled>
                Load more <ExpandMoreIcon />
              </LoadMoreBtnDisabled>
            )}
          </LoadMore>
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

          <BackCircleLast></BackCircleLast>
        </CouponBackFrame>
      </Modal>
    </OrderContainer>
  );
};

export default MyCoupons;
