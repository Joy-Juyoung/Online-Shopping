import React, { useState } from 'react';
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
import { Category } from '@mui/icons-material';

const side = [
  {
    id: 1,
    title: 'Category',
    submenu: [
      { subTitle: 'Tops' },
      { subTitle: 'Bottoms' },
      { subTitle: 'Outers' },
      { subTitle: 'Shoes' },
      { subTitle: 'Accessories' },
    ],
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

const SideFilter = () => {
  const [isDrop, setIsDrop] = useState(false);

  const clickMore = (id) => {
    // var tempside = side;
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
              <SideFilterLl key={menu.id} style={{ display: 'flex' }}>
                {isDrop ? (
                  <>
                    <ListTitle>
                      <div>{menu.title}</div>
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
                      <div>{menu.title}</div>
                      <div>
                        <ExpandLessIcon
                          onClick={(e) => {
                            e.preventDefault();
                            clickMore(menu.id);
                          }}
                        />
                      </div>
                    </ListTitle>
                    {menu.submenu.map((sub) => {
                      return (
                        <ul key={sub.id}>
                          <li>{sub.subTitle}</li>
                        </ul>
                      );
                    })}
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
