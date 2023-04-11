import React, { useEffect, useState } from 'react';
import {
  ListTitle,
  SideFilterContainer,
  SideFilterLl,
  SideFilterUl,
  SideFilterWrapper,
  SidePriceWrap,
} from './ProductListElements';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

const side = [
  {
    id: 1,
    title: 'Category',
    // submenu: [
    //   { id: 1, subTitle: 'Tops' },
    //   { id: 2, subTitle: 'Bottoms' },
    //   { id: 3, subTitle: 'Outers' },
    //   { id: 4, subTitle: 'Shoes' },
    //   { id: 5, subTitle: 'Accessories' },
    // ],
  },
  {
    id: 2,
    title: 'Price',
    submenu: [
      { id: 1, subTitle: '~$50' },
      { id: 2, subTitle: '$50 ~ $100' },
      { id: 3, subTitle: '$100 ~ $150' },
      { id: 4, subTitle: '$150 ~ $200' },
      { id: 5, subTitle: '$200 ~ $250' },
      { id: 6, subTitle: '$250 ~' },
    ],
  },
];

const SideFilter = ({ meData, itemAllKinds, itemKinds }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log('itemAllKinds Side', itemAllKinds);

  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCategories(categoryData?.data);
  };

  useEffect(() => {
    getCategory();
  }, [meData]);

  const clickMore = (id) => {
    console.log('isDrop', isDrop);

    if (id === side.id) {
      setIsDrop(!isDrop);
    }
    setIsDrop(!isDrop);
  };

  return (
    <SideFilterContainer>
      <SideFilterWrapper>
        <SideFilterUl>
          {side?.map((menu) => {
            return (
              <SideFilterLl key={menu?.id} style={{ display: 'flex' }}>
                {isDrop ? (
                  <>
                    <ListTitle>
                      <div>{menu?.title.toUpperCase()}</div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          clickMore(menu.id);
                        }}
                      >
                        <ExpandMoreIcon />
                      </div>
                    </ListTitle>
                  </>
                ) : (
                  <>
                    <ListTitle>
                      <div>{menu?.title.toUpperCase()}</div>
                      <div
                        onClick={(e) => {
                          e.preventDefault();
                          clickMore(menu.id);
                        }}
                      >
                        <ExpandLessIcon />
                      </div>
                    </ListTitle>
                    {menu?.id === 1 && (
                      <>
                        {categories?.map((cat) => {
                          return (
                            <ul key={cat.pk}>
                              <Link
                                to={`/products/productAllParentsKinds/${cat.pk}`}
                              >
                                {cat?.name === itemAllKinds?.name ? (
                                  // || cat?.name === itemKinds?.parents?.name
                                  <li style={{ fontWeight: '700' }}>
                                    {cat?.name}
                                  </li>
                                ) : (
                                  <li>{cat?.name}</li>
                                )}
                              </Link>
                            </ul>
                          );
                        })}
                      </>
                    )}
                    {menu?.id === 2 && (
                      <>
                        {menu?.submenu?.map((sub) => {
                          return (
                            <ul key={sub.id}>
                              <li>{sub.subTitle}</li>
                            </ul>
                          );
                        })}
                      </>
                    )}
                  </>
                )}
              </SideFilterLl>
            );
          })}
        </SideFilterUl>

        <SidePriceWrap></SidePriceWrap>
      </SideFilterWrapper>
    </SideFilterContainer>
  );
};

export default SideFilter;
