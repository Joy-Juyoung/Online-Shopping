// import React from 'react';
// import { Input } from '../../components/InputElements';
// import {
//   AccountContainer,
//   AccountWrap,
//   DelBtn,
//   MainHeader,
//   MainInfo,
//   MainInfoBottom,
//   MainInfoTop,
//   MainLeft,
//   MainRight,
//   MainSection,
//   MenuSub,
//   MenuSubList,
//   SideMenu,
//   SideMenuList,
//   SideMenuSub,
//   SideSection,
// } from './UserAccountElements';

// import Avatar, { ConfigProvider } from 'react-avatar';
// import { ButtonLarge, ButtonSmall } from '../../components/ButtonElements';
// import { useState, useEffect } from 'react';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { Link } from 'react-router-dom';
// import S1_Profile from './S1_Profile';
// import S2_Order from './S2_OrderHistory';
// import S3_Wishlist from './S3_Wishlist';
// import S4_Balance from './S4_Balance';
// import S5_Coupon from './S5_Coupon';

// const UserAccountPage = ({ meData }) => {
//   console.log('account me', meData);
//   // const [meAccunt = meData, setMeAccunt] = useState();
//   // const handleDeleteAccount = () => {
//   //   // alert('Do you want to delete this account?');
//   //   console.log('Make delete confirm modal');

//   // };

//   const [isDrop, setIsDrop] = useState(false);
//   const [isClick, setIsClick] = useState(false);
//   const [menuNum, setMenuNum] = useState('s1');
//   const [s1, setS1] = useState(false);
//   const [s2, setS2] = useState(false);
//   const [s3, setS3] = useState(false);
//   const [s4, setS4] = useState(false);
//   const [s5, setS5] = useState(false);

//   const clickMore = () => {
//     setIsDrop(!isDrop);
//   };

//   const clickMenu_S1 = () => {
//     setS1(!s1);
//   };
//   const clickMenu_S2 = () => {
//     setS1(!s2);
//   };
//   const clickMenu_S3 = () => {
//     setS1(!s3);
//   };
//   const clickMenu_S4 = () => {
//     setS1(!s4);
//   };
//   const clickMenu_S5 = () => {
//     setS1(!s5);
//   };

//   // const [sideItems, setSideItems] = useState([]);
//   const sideItems = [
//     { title: 'My Profile', route: '/userAccount' },
//     { title: 'My Order Status', route: '/orderStatus' },
//     { title: 'My Order History', route: '/orderHistory' },
//     { title: 'My Wishlist', route: '/wishlist' },
//     { title: 'My Balance', route: '/balance' },
//     { title: 'My Coupon', route: '/coupon' },
//   ];

//   return (
//     <AccountContainer>
//       <h1>MY ACCOUNT</h1>
//       <AccountWrap>
//         <SideSection>
//           <SideMenu>
//             <SideMenuList>
//               <Link to='/userAccount'>
//                 <span onClick={clickMenu_S1}>My Profile</span>
//               </Link>
//             </SideMenuList>
//             <SideMenuList onClick={clickMore}>
//               <SideMenuSub>
//                 {isDrop ? (
//                   <div>
//                     <span>My Orders</span>
//                     <ExpandMoreIcon />
//                   </div>
//                 ) : (
//                   <>
//                     <div>
//                       <span>My Orders</span>
//                       <ExpandLessIcon />
//                     </div>
//                     <MenuSub>
//                       <MenuSubList>
//                         <Link to='/orderStatus'>
//                           <span onClick={clickMenu_S2}>Order Status</span>
//                         </Link>
//                       </MenuSubList>
//                       <MenuSubList>
//                         <Link to='/orderHistory'>
//                           <span onClick={clickMenu_S2}>Order History</span>
//                         </Link>
//                       </MenuSubList>
//                     </MenuSub>
//                   </>
//                 )}
//               </SideMenuSub>
//             </SideMenuList>
//             <SideMenuList>
//               <Link to='/whishlist'>
//                 <span onClick={clickMenu_S3}>My Wishlist</span>
//               </Link>
//             </SideMenuList>

//             <SideMenuList>
//               <Link to='/balance'>
//                 <span onClick={clickMenu_S4}>My Balance</span>
//               </Link>
//             </SideMenuList>
//             <SideMenuList>
//               <Link to='/coupon'>
//                 <span onClick={clickMenu_S5}>My Coupons</span>
//               </Link>
//             </SideMenuList>
//           </SideMenu>
//         </SideSection>
//         <MainSection>
//           {s1 && (
//             <MainSection>
//               <S1_Profile meData={meData} />
//             </MainSection>
//           )}
//           {s2 && <S2_Order meData={meData} />}
//           {s3 && <S3_Wishlist meData={meData} />}
//           {s4 && <S4_Balance meData={meData} />}
//           {s5 && <S5_Coupon meData={meData} />}
//         </MainSection>
//       </AccountWrap>
//     </AccountContainer>
//   );
// };

// export default UserAccountPage;
