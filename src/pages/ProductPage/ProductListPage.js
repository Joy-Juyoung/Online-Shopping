import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  AllEachTitle,
  Categories,
  CategoriesWrap,
  ListAllMidWrap,
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

const ProductsListPage = ({ meData, catData }) => {
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { pId } = useParams();
  const [isChileOpen, setIsChileOpen] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);

  const getAllKindsProduct = async () => {
    const { data } = await axios.get(
      `/products/productAllParentsKinds/${pId}`,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    setGetAllKinds(data);
    console.log('getAllKinds', getAllKinds);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getAllKindsProduct();

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pId]);

  useEffect(() => {
    getAllKindsProduct();
  }, [addLiked]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>All {getAllKinds.name}</h1>
      <Category pId={pId} getAllKinds={getAllKinds} meData={meData} />
      <ProductsWrap>
        <SideFilter
          meData={meData}
          getAllKinds={getAllKinds}
          catData={catData}
        />
        <ProductsListWrapper>
          {!isChileOpen ? (
            <ProductsList>
              <ListAllMidWrap>
                {getAllKinds?.productKinds?.map((item) => {
                  return (
                    <ListMidWrapper key={item.pk}>
                      {item.products?.length !== 0 && (
                        <>
                          <Link
                            to={`/products/category/${pId}/${item?.name}/${item.pk}`}
                          >
                            <AllEachTitle>
                              {item.name.toUpperCase()}
                              <span>Total {item.products?.length}</span>
                            </AllEachTitle>
                          </Link>
                          <ListMid>
                            {item.products?.map((all) => {
                              return (
                                <ProductsCard
                                  key={all.pk}
                                  all={all}
                                  meData={meData}
                                  getAllKinds={getAllKinds}
                                  addLiked={addLiked}
                                />
                              );
                            })}
                          </ListMid>
                        </>
                      )}
                    </ListMidWrapper>
                  );
                })}
              </ListAllMidWrap>
            </ProductsList>
          ) : (
            <ProductListByCategory pId={pId} />
          )}
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductsListPage;
