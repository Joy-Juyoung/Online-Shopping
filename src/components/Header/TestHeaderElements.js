import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const TestHeaderContainer = styled.div`

`;

export const TestHeaderWrapper = styled.div`

`;

export const TestHeaderDown = styled.div`

`;

export const TestHeaderMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  
`;

export const TestHeaderMenuItem= styled.li`
  display: inline-block;
  background-color: #4285f4;
  position: relative;

    a {
        text-decoration: none;
        padding: 6px 10px;
        color: #fff;
        display: block;
    }
`;

export const MeneItemTop= styled.button`

`;

export const DropMenu = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 100px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);

`;

export const DropMenuItem= styled.li`
    width: 100%;

    &:hover {
        background-color: #eee;
    }
    
    &:hover ${MenuItemKinds} {
        display: block;
        background-color: #555;
    }
    /* 
    a {
        color: #555;
    } */
`;

export const MenuItemKinds= styled.span`

`;

