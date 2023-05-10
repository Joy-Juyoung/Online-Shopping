import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { SideShowLi } from './SidebarElements';
// import { ItemCount } from '../Header/HeaderElements';

const SideShowLi = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 8px 0px 8px 16px; */
  padding: 8px;
  list-style: none;
  /* height: 60px; */
  width: 100%;

  /* svg {
    display: flex;
    align-items: center;
  } */
`;

const SideLink = styled(Link)`
  text-decoration: none;
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
    background: #404447;
  }

  /* span {
    padding: 0 8px;
  } */

  /* svg {
    display: flex;
    align-items: center;
  } */
`;

const DropdownLink = styled(Link)`
  height: 40px;
  width: 80%;
  padding-left: 1rem;
  display: flex;
  align-items: center;
  /* text-align: left; */
  text-decoration: none;
  color: #a5a5a5;
  font-size: 15px;
  border-radius: 7px;

  &:hover {
    background: #404447;
    color: #f5f5f5;
  }
`;

const AdminSubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnave = () => {
    setSubnav(!subnav);
  };

  return (
    <SideShowLi>
      <SideLink to={item.path} onClick={item.subNav && showSubnave}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {item.icon}
          <span>{item.title}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SideLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <span>{item.title}</span>
            </DropdownLink>
          );
        })}
    </SideShowLi>
  );
};

export default AdminSubMenu;
