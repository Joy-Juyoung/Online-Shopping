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
                      <li>
                        <strong>ALL PRODUCTS</strong>
                      </li>
                    ) : (
                      <Link to='/products/all'>
                        <li>ALL PRODUCTS</li>
                      </Link>
                    )}
                    {catData?.map((cat) => {
                      return (
                        <Link key={cat.pk} to={`/products/category/${cat.pk}`}>
                          {cat?.name === getAllKinds?.name ? (
                            <li
                              style={{
                                fontWeight: '700',
                                fontSize: '15px',
                              }}
                            >
                              <strong>{cat?.name.toUpperCase()}</strong>
                            </li>
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
                      <li
                        onClick={() => rangeNone()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        All
                      </li>
                    ) : (
                      <li onClick={() => rangeNone()}>All</li>
                    )}
                    {priceRange === 0 ? (
                      <li
                        onClick={() => range0()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        $0 ~ $50
                      </li>
                    ) : (
                      <li onClick={() => range0()}>$0 ~ $50</li>
                    )}
                    {priceRange === 1 ? (
                      <li
                        onClick={() => range1()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        $50 ~ $100
                      </li>
                    ) : (
                      <li onClick={() => range1()}>$50 ~ $100</li>
                    )}
                    {priceRange === 2 ? (
                      <li
                        onClick={() => range2()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        $100 ~ $150
                      </li>
                    ) : (
                      <li onClick={() => range2()}>$100 ~ $150</li>
                    )}
                    {priceRange === 3 ? (
                      <li
                        onClick={() => range3()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        $150 ~ $200
                      </li>
                    ) : (
                      <li onClick={() => range3()}>$150 ~ $200</li>
                    )}
                    {priceRange === 4 ? (
                      <li
                        onClick={() => range4()}
                        style={{
                          fontWeight: '700',
                          fontSize: '15px',
                        }}
                      >
                        $200 ~
                      </li>
                    ) : (
                      <li onClick={() => range4()}>$200 ~</li>
                    )}
                  </ul>
                </ListSub>
              )}
            </SideFilterLl>
          ) : (
            <SideFilterLl>
              <SideListDetails>
                <SideListTitle>PRICE</SideListTitle>
                <SideIcon onClick={() => setIsPriceDrop(!isPriceDrop)}>
                  {/* {isPriceDrop ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
                </SideIcon>
              </SideListDetails>
            </SideFilterLl>
          )}
        </SideFilterUl>
      </SideFilterWrapper>
    </SideFilterContainer>
  );
};

export default SideFilter;
