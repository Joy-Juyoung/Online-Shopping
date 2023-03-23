// // import { useState, useEffect } from 'react';
// // import { FaSignInAlt } from 'react-icons/fa';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { useNavigate } from 'react-router-dom';
// // import { toast } from 'react-toastify';
// // import { login, reset, getMe } from '../../redux/auth/authSlice';
// // import Spinner from '../../components/Loading';
// // import axios from '../../api/axios';
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { login } from '../../redux/auth/authSlice';
// import { clearMessage } from '../../redux/auth/messageSlice';

// // login 하면 user가 있으면 getMe
// const TestLogin = () => {
//   let navigate = useNavigate();

//   const [loading, setLoading] = useState(false);

//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const { message } = useSelector((state) => state.message);

//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(clearMessage());
//   }, [dispatch]);

//   const initialValues = {
//     username: '',
//     password: '',
//   };

//   // const validationSchema = Yup.object().shape({
//   //   username: Yup.string().required("This field is required!"),
//   //   password: Yup.string().required("This field is required!"),
//   // });

//   const handleLogin = () => {
//     // const { username, password } = formValue;
//     setLoading(true);
//     const userData = {
//       username,
//       password,
//       type: 'user',
//     };

//     dispatch(login({ username, password }))
//       .unwrap()
//       .then(() => {
//         navigate('/profile');
//         window.location.reload();
//       })
//       .catch(() => {
//         setLoading(false);
//       });
//   };

//   if (isLoggedIn) {
//     return <Navigate to='/profile' />;
//   }

//   return (
//     <>
//       <section className='heading'>
//         <h1>Login</h1>
//         <p>Login and start setting goals</p>
//       </section>

//       <section className='form'>
//         <form onSubmit={onSubmit}>
//           <div className='form-group'>
//             <input
//               type='text'
//               className='form-control'
//               id='username'
//               name='username'
//               value={username}
//               placeholder='Enter your username'
//               onChange={onChange}
//             />
//           </div>
//           <div className='form-group'>
//             <input
//               type='password'
//               className='form-control'
//               id='password'
//               name='password'
//               value={password}
//               placeholder='Enter password'
//               onChange={onChange}
//             />
//           </div>

//           <div className='form-group'>
//             <button type='submit' className='btn btn-block'>
//               Submit
//             </button>
//           </div>
//         </form>
//       </section>
//     </>
//   );
// };

// export default TestLogin;
