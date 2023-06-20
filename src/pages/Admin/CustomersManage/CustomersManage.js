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

  const [userInput, setUserInput] = useState('');

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
      <h1>Custoemrs</h1>
      <AdListTop>
        <AdListSearch>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setUserInput(e.target.value)}
          />
        </AdListSearch>
      </AdListTop>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='username'>NAME</AdTHeadCell>
              <AdTHeadCell className='address'>ADDRESS</AdTHeadCell>
              <AdTHeadCell className='phone'>PHONE</AdTHeadCell>
              <AdTHeadCell className='balance'>BALANCE</AdTHeadCell>
              <AdTHeadCell className='type'>TYPE</AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>

          {userInput === null ? (
            <>
              {currentPosts
                ?.filter(
                  (list) =>
                    list.username
                      .toLowerCase()
                      .includes(userInput.toLowerCase()) ||
                    list.type.toLowerCase().includes(userInput.toLowerCase()) ||
                    list.pk?.toString().includes(userInput) ||
                    list.balance?.toString().includes(userInput) ||
                    list.address?.toString().includes(userInput) ||
                    list.phone_number?.toString().includes(userInput)
                )
                .map((user) => {
                  return (
                    <AdTBody key={user?.pk}>
                      <AdTBodyRow>
                        <AdTBodyCell className='id'>{user?.pk}</AdTBodyCell>
                        <AdTBodyCell className='username'>
                          {user?.username}
                        </AdTBodyCell>
                        <AdTBodyCell className='address'>
                          {user?.address}
                        </AdTBodyCell>
                        <AdTBodyCell className='phone'>
                          {user?.phone_number}
                        </AdTBodyCell>
                        <AdTBodyCell className='balance'>
                          ${user?.balance?.toLocaleString()}
                        </AdTBodyCell>
                        {/* <select onChange={handleSelect} defaultValue={user?.type}>
                    <option value={user?.type}>{user?.type}</option>
                  </select> */}
                        <AdTBodyCell className='type'>{user?.type}</AdTBodyCell>
                      </AdTBodyRow>
                    </AdTBody>
                  );
                })}
            </>
          ) : (
            <>
              {customers
                ?.filter(
                  (list) =>
                    list.username
                      .toLowerCase()
                      .includes(userInput.toLowerCase()) ||
                    list.type.toLowerCase().includes(userInput.toLowerCase()) ||
                    list.pk?.toString().includes(userInput) ||
                    list.balance?.toString().includes(userInput) ||
                    list.address?.toString().includes(userInput) ||
                    list.phone_number?.toString().includes(userInput)
                )
                .slice(firstPostIndex, lastPostIndex)
                .map((user) => {
                  return (
                    <AdTBody key={user?.pk}>
                      <AdTBodyRow>
                        <AdTBodyCell className='id'>{user?.pk}</AdTBodyCell>
                        <AdTBodyCell className='username'>
                          {user?.username}
                        </AdTBodyCell>
                        <AdTBodyCell className='address'>
                          {user?.address}
                        </AdTBodyCell>
                        <AdTBodyCell className='phone'>
                          {user?.phone_number}
                        </AdTBodyCell>
                        <AdTBodyCell className='balance'>
                          ${user?.balance?.toLocaleString()}
                        </AdTBodyCell>
                        {/* <select onChange={handleSelect} defaultValue={user?.type}>
                    <option value={user?.type}>{user?.type}</option>
                  </select> */}
                        <AdTBodyCell className='type'>{user?.type}</AdTBodyCell>
                      </AdTBodyRow>
                    </AdTBody>
                  );
                })}
            </>
          )}
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
