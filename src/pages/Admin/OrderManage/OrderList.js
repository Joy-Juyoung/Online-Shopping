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

const OrderList = ({ meData, setIsAdminBoard, isAdminBoard }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();
  const [modalShown, toggleModal] = useState(false);
  const [isSwitch, setIsSwitch] = useState(false);

  const [isSelected, setIsSelected] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const [searchedList, setSearchedList] = useState();
  const [searchValue, setSearchValue] = useState();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const [orderById, setOrderById] = useState();

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

  const handelStatusOption = async (e, pk) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  const handelUpdateOption = async (pk) => {
    try {
      const statusChange = await axios.put(
        `/orders/${pk}`,
        {
          status: selectedOption,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log('statusChange', statusChange?.data);
      // window.location.reload();
      window.location.reload();
      // navigate('/admin/orders/all');
    } catch (err) {
      if (err.response?.status === 400) {
        // console.log('400 error');
        setLoading(false);
      } else {
        console.log('Error page or empty page');
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setSearchedList(
      !searchValue
        ? currentPosts
        : currentPosts?.filter((search, index) => {
            return (
              search?.user?.username
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              search?.status
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              search?.pk
                ?.toString()
                .toLowerCase()
                .includes(searchValue.toString().toLowerCase())
            );
          })
    );
  }, [orders, searchValue]);
  console.log('searchedList', searchedList);

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
            onChange={(e) => setSearchValue(e.target.value)}
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
          {/* ?.filter((list) => '' || list?.pk.toString().includes(searchValue)) */}
          {/* {currentPosts?.map((order) => { */}
          {searchedList?.map((order) => {
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
                  <AdTBodyCell className='status'>{order?.status}</AdTBodyCell>
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
        }}
      >
        <div>
          <h2>Order Details</h2>
          <div>
            <div>Order number: {orderById?.pk}</div>
            <div>Order User: {orderById?.soldProduct[0]?.user?.username}</div>
          </div>
          <Table>
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
          <div>
            <div style={{ display: 'flex' }}>
              Order Status:
              <select
                name='status'
                id='status'
                onChange={handelStatusOption}
                // defaultValue={orderById?.status}
              >
                {statusOptionData?.map((optionData, index) => (
                  <>
                    {orderById?.status === optionData && (
                      <option
                        key={index}
                        value={optionData || ''}
                        defaultValue={orderById?.status}
                        selected
                      >
                        {optionData}
                      </option>
                    )}
                    {orderById?.status !== optionData && (
                      <option
                        key={index}
                        value={optionData || ''}
                        defaultValue={orderById?.status}
                      >
                        {optionData}
                      </option>
                    )}
                  </>
                ))}
              </select>
              <button onClick={() => handelUpdateOption(orderById?.pk)}>
                Update
              </button>
            </div>
          </div>

          {/* <DeliveredToggle>
            Is this order delevered?
            <DeliveredCheck>
              <DeliveredInput
                type='checkbox'
                id='toggleSwitch'
                onChange={handleSwitch}
              />
              {isSwitch === false ? (
                <DeliveredLabel htmlFor='toggleSwitch'>
                  <div>Yes</div>
                  <div style={{ opacity: '0' }}>No</div>
                  <DeliveredSlider
                    style={{ transform: 'translateX(0)' }}
                  ></DeliveredSlider>
                </DeliveredLabel>
              ) : (
                <DeliveredLabel htmlFor='toggleSwitch'>
                  <div style={{ opacity: '0' }}>Yes</div>
                  <div>No</div>
                  <DeliveredSlider
                    style={{ transform: 'translateX(-32px)' }}
                  ></DeliveredSlider>
                </DeliveredLabel>
              )}
            </DeliveredCheck>
          </DeliveredToggle> */}
        </div>
      </AdminModal>
    </AdContainer>
  );
};

export default OrderList;
