import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  AllEachTitle,
  Categories,
  CategoriesWrap,
  ListMid,
  ListMidWrap,
  ListMidWrapper,
  ListTop,
  ProductsList,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  SelectWrap,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import Loading from '../../components/Loading';
import { Link, useParams } from 'react-router-dom';
import ProductsCard from './ProductCard';
import SideFilter from './SideFilter';
import ProductListByCategory from './ProductListByCategory';
import Category from './Category';

const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];

const ProductsListPage = ({ meData }) => {
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [itemAllKinds, setItemAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { id } = useParams();
  const [isActive, setIsActive] = useState(false);

  // console.log('meDataList', meData);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
    };
    loadData();
  }, []);

  const getAllKindsProduct = async () => {
    const { data } = await axios.get(`/products/productAllParentsKinds/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setItemAllKinds(data);
    console.log('itemAllKinds', itemAllKinds);
    setKindEach(itemAllKinds.productKinds);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllKindsProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  useEffect(() => {
    getAllKindsProduct();
  }, [addLiked]);

  // const handleOptionChange = (e) => {
  //   setSelectedCategory(e.target.value);
  // };
  console.log('id', id);

  useEffect(() => {
    if (id === itemAllKinds.pk) {
      setIsActive(true);
    }
  }, [id]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>All {itemAllKinds.name}</h1>
      <Category id={id} itemAllKinds={itemAllKinds} />
      <ProductsWrap>
        <SideFilter />
        <ProductsListWrapper>
          {itemAllKinds !== null ? (
            <ProductsList>
              <ListTop>
                <TotalCountWrap>
                  <TotalCount style={{ fontSize: '13px' }}>
                    Total {itemAllKinds?.productKinds?.length}
                  </TotalCount>
                </TotalCountWrap>
                <SelectWrap>
                  <select
                    // onChange={handleOptionChange}
                    name='category-list'
                    id='category-list'
                  >
                    {sort.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.text}
                      </option>
                    ))}
                  </select>
                </SelectWrap>
              </ListTop>

              <ListMidWrap>
                {itemAllKinds?.productKinds?.map((item) => {
                  return (
                    <ListMidWrapper key={item.pk}>
                      <Link to={`/products/productAllChildKinds/${item.pk}`}>
                        <AllEachTitle>{item.name.toUpperCase()}</AllEachTitle>
                      </Link>
                      <ListMid>
                        {item.products?.map((all) => {
                          return (
                            <ProductsCard
                              key={all.pk}
                              all={all}
                              meData={meData}
                              itemAllKinds={itemAllKinds}
                            />
                          );
                        })}
                      </ListMid>
                    </ListMidWrapper>
                  );
                })}
              </ListMidWrap>
            </ProductsList>
          ) : (
            <ProductListByCategory itemAllKinds={itemAllKinds} id={id} />
          )}
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductsListPage;
