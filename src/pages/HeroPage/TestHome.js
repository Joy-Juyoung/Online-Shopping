import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/Loading';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// import { getMe } from '../../redux/meSlice';
import { logout, reset } from '../../redux/authSlice';
import axios from '../../api/axios';

const TestHome = ({ meData }) => {
  // const [meData, setMeData] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  // const getMe = async () => {
  //   const me = await axios.get('/users/me', {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });

  //   setMeData(me?.data);
  // };

  // useEffect(() => {
  //   getMe(user);
  // }, [user]);
  console.log('Home Me', meData);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    }

    // return () => {
    //   dispatch(reset());
    // };
  }, [meData, user, navigate, isError, message, dispatch]);

  console.log('user', user);
  console.log('me', meData);
  // console.log('meData', meData);

  if (isLoading) {
    return <Spinner />;
  }

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    // setMeData('');
  };

  return (
    <>
      <section className='heading'>
        <ul>
          {user ? (
            <>
              <h1>Welcome {meData.username || (user && user.username)}</h1>
              <li>
                <button className='btn' onClick={onLogout}>
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/testLogin'>
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to='/testRegister'>
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </section>
    </>
  );
};

export default TestHome;
