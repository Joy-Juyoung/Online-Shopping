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
import NoteAddIcon from '@mui/icons-material/NoteAdd';

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

  const [priceRange, setPriceRange] = useState('none');
  // const [itemsByPrice, setItemsByPrice] = useState([]);
  const [itemsByPrice, setItemsByPrice] = useState([]);

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
    setPriceRange('none');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pId]);

  // useEffect(() => {
  //   getAllKindsProduct();
  // }, [addLiked]);

  useEffect(() => {
    setItemsByPrice(
      getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter((pRange) => pRange?.price >= 0)
      )
    );

    if (priceRange === 0) {
      const rangeItems = getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter((pRange) => pRange?.price <= 50)
      );

      // if (rangeItems?.length === 0) {
      // console.log('nothing', rangeItems);
      // }
      setItemsByPrice(rangeItems);
    } else if (priceRange === 1) {
      const rangeItems = getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter(
          (pRange) => 50 < pRange?.price && pRange?.price <= 100
        )
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 2) {
      const rangeItems = getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter(
          (pRange) => 100 < pRange?.price && pRange?.price <= 150
        )
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 3) {
      const rangeItems = getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter(
          (pRange) => 150 < pRange?.price && pRange?.price <= 200
        )
      );
      setItemsByPrice(rangeItems);
    } else if (priceRange === 4) {
      const rangeItems = getAllKinds?.productKinds?.map((range) =>
        range?.products?.filter((pRange) => 200 < pRange?.price)
      );
      setItemsByPrice(rangeItems);
    } else {
      setItemsByPrice(
        getAllKinds?.productKinds?.map((range) =>
          range?.products?.filter((pRange) => pRange?.price >= 0)
        )
      );
    }
  }, [priceRange, pId]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <ProductsListContainer>
      <h1>All {getAllKinds?.name}</h1>
      <Category pId={pId} getAllKinds={getAllKinds} meData={meData} />
      <ProductsWrap>
        <SideFilter
          meData={meData}
          getAllKinds={getAllKinds}
          catData={catData}
          rangeNone={() => setPriceRange('none')}
          range0={() => setPriceRange(0)}
          range1={() => setPriceRange(1)}
          range2={() => setPriceRange(2)}
          range3={() => setPriceRange(3)}
          range4={() => setPriceRange(4)}
          priceRange={priceRange}
        />
        <ProductsListWrapper>
          {!isChileOpen ? (
            <ProductsList>
              <ListAllMidWrap>
                <>
                  {getAllKinds?.productKinds?.map((item) => {
                    return (
                      <ListMidWrapper key={item?.pk}>
                        {item?.products?.length !== 0 && (
                          <>
                            <Link
                              to={`/products/category/${pId}/${item?.name}/${item?.pk}`}
                            >
                              <AllEachTitle>
                                {item?.name?.toUpperCase()}
                              </AllEachTitle>
                            </Link>
                            <ListMid>
                              {priceRange === undefined ||
                              priceRange === 'none' ? (
                                <>
                                  {item?.products
                                    ?.filter((pRange) => pRange?.price >= 0)
                                    ?.map((all) => {
                                      return (
                                        <ProductsCard
                                          key={all?.pk}
                                          all={all}
                                          meData={meData}
                                          getAllKinds={getAllKinds}
                                          addLiked={addLiked}
                                        />
                                      );
                                    })}
                                </>
                              ) : (
                                <>
                                  {itemsByPrice?.map((price) =>
                                    price?.map((all) => {
                                      return (
                                        <ProductsCard
                                          key={all?.pk}
                                          all={all}
                                          meData={meData}
                                          getAllKinds={getAllKinds}
                                          addLiked={addLiked}
                                        />
                                      );
                                    })
                                  )}
                                </>
                              )}
                            </ListMid>
                          </>
                        )}
                      </ListMidWrapper>
                    );
                  })}
                </>
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
