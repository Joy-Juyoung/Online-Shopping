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
import {
  DeliveredCheck,
  DeliveredInput,
  DeliveredLabel,
  DeliveredSlider,
  DeliveredToggle,
  DetailsInfo,
  ReviewBtn,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './OrderStyle';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import PaginationOrigin from '../../../components/AdminComponents/Pagination';

import AdminModal from '../../../components/AdminComponents/AdminModal';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  AdButtonAccept,
  AdButtonCancel,
  AdButtonUtils,
} from '../../../components/AdminComponents/AdminButtons';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import { AdButtonUtils } from '../../../components/AdminComponents/AdminButtons';

const OrderPending = ({ meData }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState();

  const [modalShown, toggleModal] = useState(false);
  const [orderById, setOrderById] = useState();

  const [searchValue, setSearchValue] = useState();
  const [userInput, setUserInput] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const getOrders = async () => {
    const orederList = await axios.get('/orders/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('orederList', orederList.data);
    setOrders(orederList?.data?.filter((po) => po?.status === 'pending'));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getOrders();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = orders?.slice(firstPostIndex, lastPostIndex);

  const handleDetails = async (pk) => {
    toggleModal(!modalShown);

    const orderedData = await axios.get(`/orders/${pk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('orderedData', orderedData?.data);
    setOrderById(orderedData?.data);
  };

  const handleCancel = async (pk) => {
    // console.log('pk', pk);

    const statusChange = await axios.put(
      `/orders/${pk}`,
      {
        status: 'cancelled',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    // console.log('statusChange', statusChange?.data);
    navigate('/admin/orders/all');
  };

  const handleAccept = async (pk) => {
    const statusChange = await axios.put(
      `/orders/${pk}`,
      {
        status: 'inprogress',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    // console.log('statusChange', statusChange?.data);
    navigate('/admin/orders/all');
  };

  // const handleSearch = (e) => {
  //   setSearchValue(e.target.value);
  // };
  // console.log('searchValue', searchValue);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>Pending Orders</h1>
      <AdListTop>
        <AdListSearch>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setUserInput(e.target.value)}
          />
        </AdListSearch>
        <AdListUtils>{/* <ButtonSmall>Add</ButtonSmall> */}</AdListUtils>
      </AdListTop>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='username'>USER</AdTHeadCell>
              <AdTHeadCell className='qty'>QTY</AdTHeadCell>
              <AdTHeadCell className='qty'></AdTHeadCell>
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
            .map((pendingOrder) => {
              return (
                <AdTBody key={pendingOrder?.pk}>
                  <AdTBodyRow>
                    <AdTBodyCell className='id'>{pendingOrder?.pk}</AdTBodyCell>
                    <AdTBodyCell className='username'>
                      {pendingOrder?.user?.username}
                    </AdTBodyCell>
                    <AdTBodyCell className='username'>
                      {pendingOrder?.total_products}
                    </AdTBodyCell>
                    <AdTBodyCell className='qty'>
                      <AdButtonUtils
                        onClick={(e) => {
                          handleDetails(pendingOrder?.pk);
                        }}
                      >
                        View
                      </AdButtonUtils>
                    </AdTBodyCell>
                    <AdTBodyCell className='totalPrice'>
                      ${pendingOrder?.total_price?.toLocaleString()}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '25%' }}>
                      {new Date(pendingOrder?.created_at).toLocaleString(
                        'en-ca'
                      )}
                    </AdTBodyCell>
                    <AdTBodyCell>{pendingOrder?.status}</AdTBodyCell>
                    <AdTBodyCell style={{ width: '18%' }}>
                      <AdButtonCancel
                        onClick={() => handleCancel(pendingOrder?.pk)}
                      >
                        CANCEL
                      </AdButtonCancel>
                      <AdButtonAccept
                        onClick={() => handleAccept(pendingOrder?.pk)}
                      >
                        ACCEPT
                      </AdButtonAccept>
                    </AdTBodyCell>
                  </AdTBodyRow>
                </AdTBody>
              );
            })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <PaginationOrigin
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
          <div
            style={{
              margin: '10px',
            }}
          >
            <DetailsInfo>Order no.: {orderById?.pk}</DetailsInfo>
            <DetailsInfo>
              Order User: {orderById?.soldProduct[0]?.user?.username}
            </DetailsInfo>
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
            <Tbody>
              {orderById?.soldProduct?.map((sold, index) => {
                return (
                  <Tr key={sold?.pk}>
                    <Td>{sold?.product.name.toUpperCase()}</Td>
                    {sold?.product_option === null ? (
                      <Td>Free</Td>
                    ) : (
                      <Td>{sold?.product_option?.name}</Td>
                    )}

                    <Td>{sold?.number_of_product}</Td>
                    <Td>${sold?.product?.price * sold?.number_of_product}</Td>
                  </Tr>
                );
              })}
              <Tr>
                <Td
                  colSpan='3'
                  style={{
                    background: '#fff',
                    fontWeight: '600',
                  }}
                >
                  Order Total
                </Td>
                <Td style={{ background: '#fff', fontWeight: '600' }}>
                  ${orderById?.final_total_price?.toLocaleString()}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </div>
      </AdminModal>
    </AdContainer>
  );
};

export default OrderPending;
