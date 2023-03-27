import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
import Spinner from '../../components/Loading';
// import { getGoals, reset } from '../features/goals/goalSlice'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
import { logout, reset } from '../../redux/authSlice';

const TestHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
  };

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/');
    }
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  console.log('user', user);

  return (
    <>
      <section className='heading'>
        <ul>
          {user ? (
            <>
              <h1>Welcome {user && user.username}</h1>
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
