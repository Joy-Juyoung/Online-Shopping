import React, { useState } from 'react';
import {
  SideContainer,
  SideHeader,
  SideHide,
  SideHideLi,
  SideHideLink,
  SideHideUl,
  SideLink,
  SideNav,
  SideShow,
  SideShowLi,
  SideShowUl,
} from './SidebarElements';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import AdminHeader from './AdminHeader';
import AdminSubMenu from './AdminSubMenu';

const AdminSidebar = ({ meData }) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <SideContainer>
      {/* <IconContext.Provider value={{ color: '#fff' }}> */}
      <SideNav>
        {/* <SideHeader>Blank Closet</SideHeader> */}
        <SideShow>
          <SideLink>
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            <h1>Blank Closet</h1>
          </SideLink>
          <SideShowUl>
            {SidebarData.map((item, index) => {
              return <AdminSubMenu item={item} key={index} />;
            })}
          </SideShowUl>
        </SideShow>
        {/* )} */}
      </SideNav>
      {/* </IconContext.Provider> */}
    </SideContainer>
  );
};

export default AdminSidebar;
