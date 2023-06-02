import React, { useEffect, useState } from 'react';
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
} from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/AdminComponents//Pagination';

import AdminModal from '../../../components/AdminComponents/AdminModal';
import { Table, Tbody, Td, Th, Thead, Tr } from './OrderStyle';
import { useNavigate } from 'react-router-dom';
import { AdButtonUtils } from '../../../components/AdminComponents/AdminButtons';
import DropStatus from './DropStatus';

const OrderList = ({ meData, setIsAdminBoard, isAdminBoard }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();
  const [modalShown, toggleModal] = useState(false);
  const [cleanupModal, setCleanupModal] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  // const [searchedList, setSearchedList] = useState();
  // const [searchValue, setSearchValue] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const [userInput, setUserInput] = useState('');

  const [orderById, setOrderById] = useState();
  const [isDrop, setIsDrop] = useState(false);

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

  const handleOrderDetails = async (pk) => {
    toggleModal(!modalShown);

    console.log('pk', pk);

    const orderedData = await axios.get(`/orders/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('orderedData', orderedData?.data);
    setOrderById(orderedData?.data);
  };

  // const handleSwitch = () => {
  //   setIsSwitch(!isSwitch);
  // };

  const statusOptionData = ['pending', 'inprogress', 'delivered', 'cancelled'];

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
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setUserInput(e.target.value)}
          />
        </AdListSearch>
        <AdListUtils></AdListUtils>
      </AdListTop>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='username'>ORDER USER</AdTHeadCell>
              <AdTHeadCell className='qty'>QTY</AdTHeadCell>
              <AdTHeadCell className='totalPrice'>TOTAL</AdTHeadCell>
              <AdTHeadCell className='date'>ORDER DATE</AdTHeadCell>
              <AdTHeadCell className='status'>STATUS</AdTHeadCell>
              <AdTHeadCell className='details'></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {currentPosts
            ?.filter(
              (list) =>
                list.pk?.toString().includes(userInput) ||
                list.total_products?.toString().includes(userInput) ||
                list.total_price?.toString().includes(userInput) ||
                list.created_at
                  ?.toLowerCase()
                  .includes(userInput.toLowerCase()) ||
                list.status?.toLowerCase().includes(userInput.toLowerCase()) ||
                list.user?.username
                  ?.toLowerCase()
                  .includes(userInput.toLowerCase())
            )
            .map((order) => {
              // {searchedList?.map((order) => {
              return (
                <AdTBody key={order?.pk}>
                  <AdTBodyRow>
                    <AdTBodyCell className='id'>{order?.pk}</AdTBodyCell>
                    <AdTBodyCell className='username'>
                      {order?.user?.username}
                    </AdTBodyCell>
                    <AdTBodyCell className='qty'>
                      {order?.total_products}
                    </AdTBodyCell>
                    <AdTBodyCell className='totalPrice'>
                      ${order?.total_price?.toLocaleString()}
                    </AdTBodyCell>
                    <AdTBodyCell className='date'>
                      {new Date(order?.created_at).toLocaleString('en-ca')}
                    </AdTBodyCell>
                    <AdTBodyCell className='status'>
                      {order?.status}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '10%' }}>
                      <AdButtonUtils
                        onClick={(e) => {
                          handleOrderDetails(order?.pk);
                        }}
                      >
                        View
                      </AdButtonUtils>
                    </AdTBodyCell>
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
      <AdminModal
        className='coupon'
        shown={modalShown}
        close={() => {
          toggleModal(false);
          setIsDrop(false);
        }}
      >
        <div>
          <h2>Order Details</h2>
          <div
            style={{
              margin: '10px',
              // display: 'flex',
              // justifyContent: 'space-between',
            }}
          >
            <div>Order no.: {orderById?.pk}</div>
            <div>Order User: {orderById?.soldProduct[0]?.user?.username}</div>
          </div>
          <Table style={{ marginTop: '20px' }}>
            <Thead>
              <Tr>
                <Th>Product Name</Th>
                <Th>Option</Th>
                <Th>Qty</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            {orderById?.soldProduct?.map((sold, index) => {
              return (
                <Tbody key={sold?.pk}>
                  <Tr>
                    <Td>{sold?.product.name.toUpperCase()}</Td>
                    {sold?.product_option === null ? (
                      <Td>Free</Td>
                    ) : (
                      <Td>{sold?.product_option?.name}</Td>
                    )}

                    <Td>{sold?.number_of_product}</Td>
                    <Td>${sold?.product?.price * sold?.number_of_product}</Td>
                  </Tr>
                </Tbody>
              );
            })}
          </Table>
          <DropStatus
            statusOptionData={statusOptionData}
            orderById={orderById}
            isDrop={isDrop}
            setIsDrop={setIsDrop}
          />
        </div>
      </AdminModal>
    </AdContainer>
  );
};

export default OrderList;
