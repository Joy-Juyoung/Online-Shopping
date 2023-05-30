import React, { useEffect, useState } from 'react';
import {
  ListSub,
  ListTitle,
  SideFilterContainer,
  SideFilterLl,
  SideFilterUl,
  SideFilterWrapper,
  SideIcon,
  SideListDetails,
  SideListTitle,
} from './ProductListElements';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from '../../api/axios';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const LocateList = styled.li`
  /* font-weight: 700;
  font-size: 15px;
  background: #ffc759;
  color: #0a0f18;
  padding: 3px 10px;
  border-radius: 10px; */
  p {
    font-weight: 700;
    font-size: 15px;
    /* background: #ffc759; */
    /* border-top: 2px solid #ffae00;
    border-bottom: 2px solid #ffae00; */
    border-top: 1px solid #0a0f18;
    border-bottom: 1px solid #0a0f18;
    /* border-radius: 3px; */
    color: #0a0f18;
    padding: 3px 5px;
    width: 60%;
  }
`;

const SideFilter = ({
  meData,
  getAllKinds,
  items,
  catData,
  range0,
  range1,
  range2,
  range3,
  range4,
  rangeNone,
  priceRange,
  itemKinds,
}) => {
  const [isCategoryDrop, setIsCategoryDrop] = useState(true);
  const [isPriceDrop, setIsPriceDrop] = useState(true);

  return (
    <SideFilterContainer>
      <SideFilterWrapper>
        <SideFilterUl>
          <SideFilterLl>
            <SideListDetails>
              <SideListTitle>CATEGORY</SideListTitle>
              <SideIcon onClick={() => setIsCategoryDrop(!isCategoryDrop)}>
                {isCategoryDrop ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </SideIcon>
            </SideListDetails>
            {isCategoryDrop && (
              <>
                <ListSub>
                  <ul>
                    {items ? (
                      <LocateList>
                        <p>ALL PRODUCTS</p>
                      </LocateList>
                    ) : (
                      <Link to='/products/all'>
                        <li>ALL PRODUCTS</li>
                      </Link>
                    )}
                    {catData?.map((cat) => {
                      return (
                        <Link key={cat.pk} to={`/products/category/${cat.pk}`}>
                          {cat?.name === getAllKinds?.name ? (
                            <LocateList>
                              <p>{cat?.name.toUpperCase()}</p>
                            </LocateList>
                          ) : (
                            <li>{cat?.name.toUpperCase()}</li>
                          )}
                        </Link>
                      );
                    })}
                  </ul>
                </ListSub>
              </>
            )}
          </SideFilterLl>

          {itemKinds || items ? (
            <SideFilterLl>
              <SideListDetails>
                <SideListTitle>PRICE</SideListTitle>
                <SideIcon onClick={() => setIsPriceDrop(!isPriceDrop)}>
                  {isPriceDrop ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </SideIcon>
              </SideListDetails>
              {isPriceDrop && (
                <ListSub>
                  <ul>
                    {priceRange === 'none' ? (
                      <LocateList onClick={() => rangeNone()}>
                        <p>All</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => rangeNone()}>All</li>
                    )}
                    {priceRange === 0 ? (
                      <LocateList onClick={() => range0()}>
                        <p>$0 ~ $50</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => range0()}>$0 ~ $50</li>
                    )}
                    {priceRange === 1 ? (
                      <LocateList onClick={() => range1()}>
                        <p>$50 ~ $100</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => range1()}>$50 ~ $100</li>
                    )}
                    {priceRange === 2 ? (
                      <LocateList onClick={() => range2()}>
                        <p>$100 ~ $150</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => range2()}>$100 ~ $150</li>
                    )}
                    {priceRange === 3 ? (
                      <LocateList onClick={() => range3()}>
                        <p>$150 ~ $200</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => range3()}>$150 ~ $200</li>
                    )}
                    {priceRange === 4 ? (
                      <LocateList onClick={() => range4()}>
                        <p>$200 ~</p>
                      </LocateList>
                    ) : (
                      <li onClick={() => range4()}>$200 ~</li>
                    )}
                  </ul>
                </ListSub>
              )}
            </SideFilterLl>
          ) : // <SideFilterLl>
          //   <SideListDetails>
          //     <SideListTitle>PRICE</SideListTitle>
          //     <SideIcon onClick={() => setIsPriceDrop(!isPriceDrop)}>
          //     </SideIcon>
          //   </SideListDetails>
          // </SideFilterLl>
          null}
        </SideFilterUl>
      </SideFilterWrapper>
    </SideFilterContainer>
  );
};

export default SideFilter;
