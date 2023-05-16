import React, { useEffect, useState, useMemo } from 'react';
import {
  AdContainer,
  AdListBottom,
  AdListMid,
  AdListSearch,
  AdListTop,
  AdListUtils,
  AdTable,
  AdTBody,
  AdTBodyCell,
  AdTBodyRow,
  AdTHead,
  AdTHeadCell,
  AdTHeadeRow,
  BodyImg,
  CheckInput,
} from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/AdminComponents//Pagination';
import { ButtonSmall } from '../../../components/ButtonElements';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const ItemList = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getProducts = async () => {
    const itemList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('itemList', itemList.data);
    setProducts(itemList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products?.slice(firstPostIndex, lastPostIndex);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>All Products</h1>
      <AdListTop>
        <AdListSearch>
          <input type='text' placeholder='Search' />
        </AdListSearch>
        <AdListUtils>
          <ButtonSmall>Add</ButtonSmall>
          <ButtonSmall>Delete</ButtonSmall>
        </AdListUtils>
      </AdListTop>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              <AdTHeadCell className='check'>
                <input type='checkbox' />
              </AdTHeadCell>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='photo'>PHOTO</AdTHeadCell>
              <AdTHeadCell className='name'>NAME</AdTHeadCell>
              <AdTHeadCell className='price'>PRICE</AdTHeadCell>
              {/* <AdTHeadCell>CATEGORY</AdTHeadCell> */}
              <AdTHeadCell className='sub'>SUB CATEGORY</AdTHeadCell>
              {/* <AdTHeadCell>IN STOCK</AdTHeadCell> */}
              <AdTHeadCell className='createAt'>CREATE AT</AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts?.map((product) => {
            return (
              <AdTBody key={product?.pk}>
                <AdTBodyRow>
                  <AdTBodyCell className='check'>
                    <CheckInput type='checkbox' />
                  </AdTBodyCell>
                  <AdTBodyCell className='id'>{product?.pk}</AdTBodyCell>
                  <AdTBodyCell className='photo'>
                    <BodyImg
                      src={product?.photos[0]?.picture}
                      alt={product?.name}
                    />
                  </AdTBodyCell>
                  <AdTBodyCell className='name'>
                    {product?.name?.length > 30 ? (
                      `${product?.name?.substring(0, 30)}...`
                    ) : (
                      <> {product?.name}</>
                    )}
                  </AdTBodyCell>
                  <AdTBodyCell className='price'>
                    ${product?.price?.toLocaleString()}
                  </AdTBodyCell>
                  {/* <AdTBodyCell>{product?.name}</AdTBodyCell> */}
                  <AdTBodyCell className='sub'>
                    {product?.kind?.name}
                  </AdTBodyCell>
                  {/* <AdTBodyCell>{product?.instock}</AdTBodyCell> */}
                  <AdTBodyCell className='createAt'>
                    {new Date(product?.created_at).toLocaleString('en-ca')}
                  </AdTBodyCell>
                </AdTBodyRow>
              </AdTBody>
            );
          })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <Pagination
          totalPosts={products?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </AdListBottom>
    </AdContainer>
  );
};

export default ItemList;
