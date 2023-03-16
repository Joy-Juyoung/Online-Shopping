import React, { useState, useRef, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from '../../api/axios';

import {
  HeaderContainer,
  HeaderWrapper,
  HeaderDown,
  DropdownContainer,
  DropdownButton,
  Menu,
  Ul,
  Li,
} from './HeaderElements';

const CATEGORY_URL = '/products/productAllParentsKinds';
const TestHeader = () => {
  const [categories, setCategories] = useState([]);

  const getCategory = async () => {
    const categoryData = await axios.get(CATEGORY_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('category', categoryData);
    console.log('categoryData', categoryData?.data);
    setCategories(categoryData?.data);
  };

  // console.log('category', categories?.name);

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div>
      <div>
        Test Header Page
        <div>
          <ul>
            {categories.map((category) => {
              <li key={category.pk}>{category.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
    // <HeaderContainer>
    //   <HeaderWrapper>
    //  <HeaderDown>
    //   <DropdownContainer>
    //     <DropdownButton>TOPS</DropdownButton>
    //     <Menu>
    //       <Ul>
    //         <Li>Short Sleeves</Li>
    //         <Li>Long Sleeves</Li>
    //         <Li>Shorts & Blouses</Li>
    //         <Li>Sweatshirts</Li>
    //         <Li>Hoodies</Li>
    //       </Ul>
    //     </Menu>
    //   </DropdownContainer>

    //      <DropdownContainer>
    //         <DropdownButton>BOTTOMS</DropdownButton>
    //         <Menu>
    //           <Ul>
    //             <Li>Denim</Li>
    //             <Li>Joggers</Li>
    //             <Li>Jeans</Li>
    //             <Li>Shorts</Li>
    //             <Li>Jumpsuits</Li>
    //           </Ul>
    //         </Menu>
    //       </DropdownContainer>

    //       <DropdownContainer>
    //         <DropdownButton>OUTERS</DropdownButton>
    //         <Menu>
    //           <Ul>
    //             <Li>Blazers</Li>
    //             <Li>Hooded Jackets</Li>
    //             <Li>Cardigans</Li>
    //             <Li>Coats</Li>
    //             <Li>Bomber Jackets</Li>
    //           </Ul>
    //         </Menu>
    //       </DropdownContainer>

    //       <DropdownContainer>
    //         <DropdownButton>SHOES</DropdownButton>
    //         <Menu>
    //           <Ul>
    //             <Li>Boots</Li>
    //             <Li>Sports Shoes</Li>
    //             <Li>Sneakers</Li>
    //             <Li>Loafers</Li>
    //             <Li>Sandals</Li>
    //           </Ul>
    //         </Menu>
    //       </DropdownContainer>

    //       <DropdownContainer>
    //         <DropdownButton>ACCESSORIES</DropdownButton>
    //         <Menu>
    //           <Ul>
    //             <Li>Cap & Hat</Li>
    //             <Li>Rings</Li>
    //             <Li>Watches</Li>
    //             <Li>Earrings</Li>
    //             <Li>Wallets</Li>
    //           </Ul>
    //         </Menu>
    //       </DropdownContainer>
    //      </HeaderDown>
    //   </HeaderWrapper>
    // </HeaderContainer>
  );
};

export default TestHeader;
