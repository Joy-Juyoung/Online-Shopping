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
  AdInfoIcon,
  AdLeftIcon,
  AdLeftSide,
  AdPermLink,
  AdRightIcon,
  AdRightSide,
  AdSide,
  AdUserIcon,
  AdUserLink,
} from './Sidebar/SidebarElements';
import PersonIcon from '@mui/icons-material/Person';

const AdminHeader = ({ meData, setIsAdminBoard }) => {
  const navigate = useNavigate();

  const [me, setMe] = useState(null);
  const [logout, setLogout] = useState();

  const [loading, setLoading] = useState(false);

  // console.log('me', me);

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
      <AdRightSide>
        <AdUserIcon>
          <AdUserLink to='/' onClick={() => setIsAdminBoard(false)}>
            Go to User Mode
            <PersonIcon />
          </AdUserLink>
        </AdUserIcon>
        <AdInfoIcon>
          <AdRightIcon>{meData?.username.toUpperCase()}</AdRightIcon>
          <AdRightIcon>
            <AdPermLink>
              <LogoutIcon fontSize='medium' onClick={handleLogout} />
            </AdPermLink>
          </AdRightIcon>
        </AdInfoIcon>
      </AdRightSide>
    </AdSide>
  );
};

export default AdminHeader;
