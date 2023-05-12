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

const CustomersManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [customers, setCustomers] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getCustomers = async () => {
    const userList = await axios.get('/users/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('userList', userList.data);
    setCustomers(userList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getCustomers();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = customers?.slice(firstPostIndex, lastPostIndex);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Customers</h1>
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
              <AdTHeadCell className='type'>TYPE</AdTHeadCell>
              <AdTHeadCell className='username'>NAME</AdTHeadCell>
              <AdTHeadCell className='address'>ADDRESS</AdTHeadCell>
              <AdTHeadCell className='phone'>PHONE</AdTHeadCell>
              <AdTHeadCell className='balance'>BALANCE</AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts?.map((user) => {
            return (
              <AdTBody key={user?.pk}>
                <AdTBodyRow>
                  <AdTBodyCell className='check'>
                    <CheckInput type='checkbox' />
                  </AdTBodyCell>
                  <AdTBodyCell className='id'>{user?.pk}</AdTBodyCell>
                  <AdTBodyCell className='type'>{user?.type}</AdTBodyCell>
                  <AdTBodyCell className='username'>
                    {user?.username}
                  </AdTBodyCell>
                  <AdTBodyCell className='address'>{user?.address}</AdTBodyCell>
                  <AdTBodyCell className='phone'>
                    {user?.phone_number}
                  </AdTBodyCell>
                  <AdTBodyCell className='balance'>{user?.balance}</AdTBodyCell>
                </AdTBodyRow>
              </AdTBody>
            );
          })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <Pagination
          totalPosts={customers?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </AdListBottom>
    </AdContainer>
  );
};

export default CustomersManage;
