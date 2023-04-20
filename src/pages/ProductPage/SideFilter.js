import React, { useEffect, useState } from 'react';
import {
  ListSub,
  ListTitle,
  SideFilterContainer,
  SideFilterLl,
  SideFilterUl,
  SideFilterWrapper,
} from './ProductListElements';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import axios from '../../api/axios';
import { Link, useParams } from 'react-router-dom';

const SideFilter = ({ meData, getAllKinds, items }) => {
  const [categories, setCategories] = useState([]);
  const [isCategoryDrop, setIsCategoryDrop] = useState(true);
  const [isPriceDrop, setIsPriceDrop] = useState(true);
  const { all } = useParams();

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

  return (
    <SideFilterContainer>
      <SideFilterWrapper>
        <SideFilterUl>
          <SideFilterLl>
            <ListTitle>
              <div>CATEGORY</div>
              <div onClick={() => setIsCategoryDrop(!isCategoryDrop)}>
                {isCategoryDrop ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </div>
            </ListTitle>
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
                    {categories?.map((cat) => {
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
          <SideFilterLl>
            <ListTitle>
              <div>PRICE</div>
              <div onClick={() => setIsPriceDrop(!isPriceDrop)}>
                {isPriceDrop ? <ExpandMoreIcon /> : <ExpandLessIcon />}
              </div>
            </ListTitle>
            {isPriceDrop && (
              <ListSub>
                <ul>
                  <li>~$50</li>
                  <li>$50 ~ $100</li>
                  <li>$100 ~ $150</li>
                  <li>$150 ~ $200</li>
                  <li>$200 ~ $250</li>
                  <li>$250 ~</li>
                </ul>
              </ListSub>
            )}
          </SideFilterLl>
        </SideFilterUl>
      </SideFilterWrapper>
    </SideFilterContainer>
  );
};

export default SideFilter;
