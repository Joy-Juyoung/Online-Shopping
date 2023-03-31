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

// const UserAccountPage = ({ meData }) => {
//   console.log('account me', meData);
//   // const [meAccunt = meData, setMeAccunt] = useState();
//   // const handleDeleteAccount = () => {
//   //   // alert('Do you want to delete this account?');
//   //   console.log('Make delete confirm modal');

//   // };

//   const [isDrop, setIsDrop] = useState(false);

//   const clickMore = () => {
//     setIsDrop(!isDrop);
//   };

//   return (
//     <AccountContainer>
//       <h1>MY ACCOUNT</h1>
//       <AccountWrap>
//         <SideSection>
//           <SideMenu>
//             <SideMenuList>
//               <Link to='/userAccount'>
//                 <span>My Profile</span>
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
//                           <span>Order Status</span>
//                         </Link>
//                       </MenuSubList>
//                       <MenuSubList>
//                         <Link to='/orderHistory'>
//                           <span>Order History</span>
//                         </Link>
//                       </MenuSubList>
//                     </MenuSub>
//                   </>
//                 )}
//               </SideMenuSub>
//             </SideMenuList>
//             <SideMenuList>
//               <Link to='/whishlist'>
//                 <span>My Wishlist</span>
//               </Link>
//             </SideMenuList>

//             <SideMenuList>
//               <Link to='/balance'>
//                 <span>My Balance</span>
//               </Link>
//             </SideMenuList>
//             <SideMenuList>
//               <Link to='/coupon'>
//                 <span>My Coupons</span>
//               </Link>
//             </SideMenuList>
//           </SideMenu>
//         </SideSection>
//         <MainSection>
//           <MainHeader>
//             <h2>MY PROFILE</h2>
//           </MainHeader>
//           <form>
//             <MainInfo>
//               <MainInfoTop>
//                 <MainLeft>
//                   <ConfigProvider colors={['red', 'grey', 'green', 'yellow']}>
//                     <Avatar name={meData.username} round={true} size={200} />
//                   </ConfigProvider>
//                   {/* <input type='file' /> */}
//                   {/* <ButtonSmall>Edit</ButtonSmall> */}
//                 </MainLeft>
//                 <MainRight>
//                   <label htmlFor='username'>
//                     username
//                     <Input
//                       type='text'
//                       // placeholder={meData.username}
//                       value={meData.username}
//                       id='username'
//                       disabled
//                     />
//                   </label>
//                   <label htmlFor='email'>
//                     email
//                     <Input
//                       type='text'
//                       value={meData.email}
//                       id='email'
//                       disabled
//                     />
//                   </label>
//                   <label htmlFor='name'>
//                     name
//                     <Input type='text' value={meData.name} id='name' disabled />
//                   </label>
//                 </MainRight>
//               </MainInfoTop>
//               <MainInfoBottom>
//                 <label htmlFor='phone'>
//                   phone
//                   <Input type='text' value='phone' id='phone' disabled />
//                 </label>
//                 <label htmlFor='address1'>
//                   address1
//                   <Input type='text' value='address1' id='address1' disabled />
//                 </label>
//                 <label htmlFor='address2'>
//                   address2
//                   <Input type='text' value='address2' id='address2' disabled />
//                 </label>
//               </MainInfoBottom>

//               <DelBtn>
//                 {/* onClick={handleDeleteAccount} */}
//                 <ButtonLarge style={{ width: '80%' }}>
//                   Delete Account
//                 </ButtonLarge>
//               </DelBtn>
//             </MainInfo>
//           </form>
//         </MainSection>
//       </AccountWrap>
//     </AccountContainer>
//   );
// };

// export default UserAccountPage;
