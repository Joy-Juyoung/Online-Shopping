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

const ProductsListPage = ({ meData }) => {
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [getAllKinds, setGetAllKinds] = useState([]);
  const [kindEach, setKindEach] = useState([]);
  const { pId } = useParams();
  const [isChileOpen, setIsChileOpen] = useState(false);
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);

  // console.log('meDataList', meData);
  // const sortList = () => {

  // };

  useEffect(() => {
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
    };
    loadData();
  }, []);

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
    setKindEach(getAllKinds.productKinds);
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

  // const handleOptionChange = (e) => {
  //   setSelectOption(e.target.value);

  //   if (getAllKinds.pk === pId) {
  //     getAllKinds.
  //     if (selectOption === 'LowToHigh') {
  //       const priceLToH = itemKinds.products.sort((a, b) => a.price - b.price);
  //       setSortList(priceLToH);
  //       console.log('SortList L-H', sortList);
  //     }
  //     if (selectOption === 'HighToLow') {
  //       const priceHToL = itemKinds.products.sort((a, b) => b.price - a.price);
  //       setSortList(priceHToL);
  //       console.log('SortList H-L', sortList);
  //     }
  //   }
  // if (selectOption === 'Newest') {
  //   // setSortList(each.sort((a, b) => b - a));
  //   console.log('SortList', sortList);
  // }
  // if (selectOption === 'Popular') {
  //   // setSortList(each.sort((a, b) => b - a));
  //   console.log('SortList', sortList);
  // }
  // });
  // });
  // setItemKinds(sortList);
  // console.log('itemKinds', itemKinds);
  // };
  // console.log('SortList', sortList);

  // useEffect(() => {
  //   setSortList(itemKinds?.products);
  // }, [selectOption]);

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
        <SideFilter meData={meData} getAllKinds={getAllKinds} />
        <ProductsListWrapper>
          {!isChileOpen ? (
            <ProductsList>
              {/* <ListTop>
                <TotalCountWrap>
                  <TotalCount style={{ fontSize: '13px' }}>
                    Total {getAllKinds?.productKinds?.length}
                  </TotalCount>
                </TotalCountWrap>
                <SelectWrap>
                  <select
                    // onChange={handleOptionChange}
                    name='category-list'
                    id='category-list'
                  >
                    {sort.map((option, index) => (
                      <option
                        key={index}
                        value={option.value}
                        // onClick={handleSort}
                      >
                        {option.text}
                      </option>
                    ))}
                  </select>
                </SelectWrap>
              </ListTop> */}

              <ListAllMidWrap>
                {getAllKinds?.productKinds?.map((item) => {
                  return (
                    <ListMidWrapper key={item.pk}>
                      <Link
                        to={`/products/category/${pId}/${item?.name}/${item.pk}`}
                      >
                        <AllEachTitle>{item.name.toUpperCase()}</AllEachTitle>
                      </Link>
                      <ListMid>
                        {item.products?.map((all) => {
                          return (
                            <ProductsCard
                              key={all.pk}
                              all={all}
                              meData={meData}
                              getAllKinds={getAllKinds}
                            />
                          );
                        })}
                      </ListMid>
                    </ListMidWrapper>
                  );
                })}
              </ListAllMidWrap>
            </ProductsList>
          ) : (
            <ProductListByCategory getAllKinds={getAllKinds} pId={pId} />
          )}
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  );
};
export default ProductsListPage;
