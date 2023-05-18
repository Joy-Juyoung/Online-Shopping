import React, { useState, useRef, useEffect } from 'react';
import axios from '../../api/axios';
import {
  HeaderUp,
  HeaderWrapper,
  LeftSide,
  MiddleSide,
  PermLink,
  RightIcon,
  RightSide,
  HeaderWrap,
} from '../Header/HeaderElements';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import {
  AdLeftIcon,
  AdLeftSide,
  AdPermLink,
  AdRightIcon,
  AdRightSide,
  AdSide,
} from './SidebarElements';

const AdminHeader = ({ meData, setIsAdminBoard, isAdminBoard }) => {
  const navigate = useNavigate();

  const [me, setMe] = useState(null);
  const [logout, setLogout] = useState();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMe(meData);
  }, [meData]);

  const handleLogout = async () => {
    setLoading(true);

    const loggedOut = await axios.post(
      '/users/log-out',
      {
        username: me.username,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('Header logout Me', loggedOut?.data);
    setLogout(loggedOut?.data);
    setMe('');
    // setIsAdminBoard(!isAdminBoard);
    setIsAdminBoard(false);
    navigate('/');
    window.location.reload('/');
    setLoading(false);
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <AdSide>
      {/* <AdLeftSide>
        <h1>Dashboard</h1>
      </AdLeftSide> */}
      <AdRightSide>
        <AdRightIcon>
          <Link to='/' onClick={() => setIsAdminBoard(false)}>
            Go to User Mode
          </Link>
        </AdRightIcon>
        <AdRightIcon>{meData?.username.toUpperCase()}</AdRightIcon>
        <AdRightIcon>
          <AdPermLink>
            <LogoutIcon fontSize='medium' onClick={handleLogout} />
          </AdPermLink>
        </AdRightIcon>
      </AdRightSide>
    </AdSide>
  );
};

export default AdminHeader;
