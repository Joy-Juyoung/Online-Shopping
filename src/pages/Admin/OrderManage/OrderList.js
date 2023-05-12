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

const OrderList = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getOrders = async () => {
    const orederList = await axios.get('/orders/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('orederList', orederList.data);
    setOrders(orederList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = orders?.slice(firstPostIndex, lastPostIndex);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Orders</h1>
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
              <AdTHeadCell className='username'>NAME</AdTHeadCell>
              <AdTHeadCell className='qty'>QTY</AdTHeadCell>
              <AdTHeadCell className='totalPrice'>TOTAL PRCIE</AdTHeadCell>
              <AdTHeadCell className='date'>ORDER DATE</AdTHeadCell>
              <AdTHeadCell className='status'>STATUS</AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts?.map((order) => {
            return (
              <AdTBody key={order?.pk}>
                <AdTBodyRow>
                  <AdTBodyCell className='check'>
                    <CheckInput type='checkbox' />
                  </AdTBodyCell>
                  <AdTBodyCell className='id'>{order?.pk}</AdTBodyCell>
                  <AdTBodyCell className='username'>
                    {order?.user?.username}
                  </AdTBodyCell>
                  <AdTBodyCell className='qty'>
                    {order?.total_products}
                  </AdTBodyCell>
                  <AdTBodyCell className='totalPrice'>
                    {order?.total_price}
                  </AdTBodyCell>
                  <AdTBodyCell className='date'>
                    {new Date(order?.created_at).toLocaleString('en-ca')}
                  </AdTBodyCell>
                  <AdTBodyCell className='status'>{order?.status}</AdTBodyCell>
                </AdTBodyRow>
              </AdTBody>
            );
          })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <Pagination
          totalPosts={orders?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </AdListBottom>
    </AdContainer>
  );
};

export default OrderList;
