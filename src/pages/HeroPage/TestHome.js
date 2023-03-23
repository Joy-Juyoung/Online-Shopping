// import { useEffect, useState } from 'react';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// // import GoalForm from '../components/GoalForm'
// // import GoalItem from '../components/GoalItem'
// import Spinner from '../../components/Loading';
// // import { getGoals } from '../../redux/goals/goalSlice';
// import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// // import { Link, useNavigate } from 'react-router-dom';
// import { getMe, logout, reset } from '../../redux/auth/authSlice';
// import axios from '../../api/axios';

// const TestHome = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [meData, setMeData] = useState();

//   const { user, isLoading, isError, message } = useSelector(
//     (state) => state.auth
//   );

//   const onLogout = () => {
//     dispatch(logout());
//     dispatch(reset());
//     navigate('/');
//   };

//   // const { id } = useParams();

//   const getMe = async () => {
//     const me = await axios.get(
//       '/users/me',
//       // {
//       //   username: user.username,
//       //   password: user.password,
//       // },
//       // {
//       //   headers: { 'Content-Type': 'application/json' },
//       //   withCredentials: true,
//       // }
//     );
//     console.log('me', me?.data);
//     setMeData(me?.data);
//   };
//   // console.log('me', meData);

//   useEffect(() => {
//     getMe();
//   }, []);

//   useEffect(() => {
//     if (isError) {
//       console.log(message);
//     }

//     if (!user) {
//       navigate('/');
//     }
//     // dispatch(getMe());
//     // getMe();

//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, isError, message, dispatch]);

//   if (isLoading) {
//     return <Spinner />;
//   }

//   // console.log('user', user);
//   // console.log('me', meData);

//   return (
//     <>
//       <section className='heading'>
//         <ul>
//           {user ? (
//             <>
//               {/* <h1>Welcome {user && user.username && meData.username}</h1> */}
//               <h1>Welcome {meData?.username}</h1>
//               <li>
//                 <button className='btn' onClick={onLogout}>
//                   <FaSignOutAlt /> Logout
//                 </button>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link to='/testLogin'>
//                   <FaSignInAlt /> Login
//                 </Link>
//               </li>
//               <li>
//                 <Link to='/testRegister'>
//                   <FaUser /> Register
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </section>
//     </>
//   );
// };

// export default TestHome;
