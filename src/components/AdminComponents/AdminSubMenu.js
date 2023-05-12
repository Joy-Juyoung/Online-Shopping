import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const SideShowLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  list-style: none;
  width: 100%;
`;

const SideLink = styled(Link)`
  text-decoration: none;
  background: transparent;
  color: #f5f5f5;
  font-size: 18px;
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  height: 40px;

  border-radius: 7px;

  &:hover {
    background: #404447 !important;
    color: #f5f5f5 !important;
  }
`;

const DropdownLink = styled(Link)`
  height: 40px;
  width: 80%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #a5a5a5;
  font-size: 15px;
  border-radius: 7px;
  margin-top: 7px;

  &:hover {
    background: #404447 !important;
    color: #f5f5f5 !important;
  }

  span {
    margin: 0 10px;
  }
`;

const SideIcon = styled.div`
  display: flex;
  align-items: center;
  span {
    margin: 0 10px;
  }
`;

const SideArrow = styled.div`
  display: flex;
  align-items: center;
`;

const AdminSubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const location = useLocation();
  const [navBg, setNavBg] = useState('transparent');
  const [navCorlor, setNavCorlor] = useState('#f5f5f5');

  useEffect(() => {
    if (window.location.pathname === item.path) {
      setNavBg('#404447');
      setNavCorlor('#f5f5f5');
    } else {
      setNavBg('transparent');
      setNavCorlor('#f5f5f5');
    }
  }, [location]);

  const showSubnave = () => {
    setSubnav(!subnav);
  };

  return (
    <SideShowLi>
      <SideLink
        to={item.path}
        onClick={item.subNav && showSubnave}
        style={{ backgroundColor: navBg, color: navCorlor }}
      >
        <SideIcon>
          {item.icon}
          <span>{item.title}</span>
        </SideIcon>
        <SideArrow>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </SideArrow>
      </SideLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink
              to={item.path}
              key={index}
              style={
                window.location.pathname === item.path
                  ? { backgroundColor: '#404447', color: '#f5f5f5' }
                  : { backgroundColor: 'transparent', color: '#a5a5a5' }
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </DropdownLink>
          );
        })}
    </SideShowLi>
  );
};

export default AdminSubMenu;
