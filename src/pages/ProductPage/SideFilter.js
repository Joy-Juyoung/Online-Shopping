import React, { useEffect, useState } from 'react';
import {
  ListSub,
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

const SideFilter = ({ meData, itemAllKinds, itemKinds }) => {
  const [categories, setCategories] = useState([]);
  const [isDrop, setIsDrop] = useState(false);
  const [clickId, setClickId] = useState('');
  const [isCategoryDrop, setIsCategoryDrop] = useState(true);
  const [isPriceDrop, setIsPriceDrop] = useState(true);

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

  // console.log('side.id', side);

  // const clickCategoryMore = () => {

  //   setIsCategoryDrop{!isCategoryDrop}
  // };

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
                    {categories?.map((cat) => {
                      return (
                        <Link
                          key={cat.pk}
                          to={`/products/productAllParentsKinds/${cat.pk}`}
                        >
                          {cat?.name === itemAllKinds?.name ? (
                            // || cat?.name === itemKinds?.parents?.name
                            <li style={{ fontWeight: '700' }}>{cat?.name}</li>
                          ) : (
                            <li>{cat?.name}</li>
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
