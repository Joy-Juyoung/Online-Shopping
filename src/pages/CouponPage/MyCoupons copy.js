// import React, { useEffect, useState, useRef } from 'react';
// import axios from '../../api/axios';
// import {
//   OrderContainer,
//   OrderList,
//   OrderListWrap,
//   OrderWrap,
//   OrderWrapper,
//   Table,
//   Tbody,
//   Td,
//   Th,
//   Thead,
//   Tr,
// } from '../OrderPage/OrderElements';
// import { ReviewListEmpty, ViewDetails } from './MyCouponsElements';
// import Loading from '../../components/Loading';
// import PageviewIcon from '@mui/icons-material/Pageview';
// import Modal from '../../components/Modal';

// const MyCoupons = ({ meData }) => {
//   let ref = useRef();
//   const [loading, setLoading] = useState(false);
//   const [coupons, setCoupons] = useState([]);
//   const [couponEach, setCouponEach] = useState([]);
//   const [couponDetails, setCouponDetails] = useState([]);
//   const [isDrop, setIsDrop] = useState(false);
//   const [selected, setSelected] = useState();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modalShown, toggleModal] = useState(false);

//   const getCoupons = async () => {
//     const couponList = await axios.get('/coupons/', {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });
//     console.log('couponList', couponList?.data);
//     setCoupons(couponList?.data);
//     setSelected(coupons.pk);
//     setLoading(false);
//   };

//   const getCouponById = async (pk) => {
//     const couponEachList = await axios.get(`/coupons/${pk}`, {
//       headers: { 'Content-Type': 'application/json' },
//       withCredentials: true,
//     });
//     // console.log('couponEachList', couponEachList?.data);
//     setCouponEach(couponEachList?.data);
//     setSelected(couponEach.pk);
//     setIsDrop(!isDrop);

//     if (!isDrop) {
//       setCouponDetails([...couponDetails, couponEach]);
//     } else {
//       setCouponDetails([]);
//     }
//   };
//   // console.log('couponEach', couponEach);
//   console.log('couponDetails', couponDetails);

//   useEffect(() => {
//     setLoading(true);
//     getCoupons();
//     window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
//   }, []);

//   if (loading)
//     return (
//       <div>
//         <Loading />
//       </div>
//     );
//   return (
//     <OrderContainer>
//       <OrderWrapper>
//         <h1>My Coupons</h1>
//         <OrderWrap>
//           <OrderList>
//             {coupons?.length === 0 ? (
//               <ReviewListEmpty>
//                 <span>No coupons found.</span>
//               </ReviewListEmpty>
//             ) : (
//               <OrderListWrap>
//                 <Table>
//                   <Thead>
//                     <Tr>
//                       <Th>No.</Th>
//                       <Th>Discount rate</Th>
//                       <Th>Expire Date</Th>
//                       <Th></Th>
//                     </Tr>
//                   </Thead>
//                   <Tbody>
//                     {coupons?.map((coupon, index) => {
//                       return (
//                         <Tr key={index} ref={ref}>
//                           <Td>{index + 1}</Td>
//                           <Td>{coupon?.discount_rate}%</Td>
//                           <Td>
//                             {new Date(coupon.end_date).toLocaleDateString()}
//                           </Td>
//                           <Td onClick={() => getCouponById(coupon?.pk)}>
//                             <ViewDetails>
//                               <PageviewIcon
//                                 onClick={() => {
//                                   toggleModal(!modalShown);
//                                 }}
//                               />
//                             </ViewDetails>
//                           </Td>
//                         </Tr>
//                       );
//                     })}
//                   </Tbody>
//                 </Table>
//               </OrderListWrap>
//             )}
//           </OrderList>
//           {/* <Modal
//             shown={modalShown}
//             close={() => {
//               toggleModal(false);
//             }}
//           >
//             <Table>
//               <Tr>
//                 <Td colSpan={2}>{couponDetails[0]?.name}</Td>
//                 <Td colSpan={2}>{couponDetails[0]?.description}</Td>
//               </Tr>
//             </Table>
//           </Modal> */}
//         </OrderWrap>
//       </OrderWrapper>
//     </OrderContainer>
//   );
// };

// export default MyCoupons;
