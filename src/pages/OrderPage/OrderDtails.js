import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Loading from '../../components/Loading';

import RateReviewIcon from '@mui/icons-material/RateReview';

import {
  ExtraInfo,
  ItemTotalPrice,
  PaymentPsersonalInfo,
  PaymentInfoDetails,
  TotalTitle,
  ItemSummary,
  PaymentContainer,
  PaymentWrapper,
  PaymentBodyWrap,
  PaymentLeftInfo,
  PaymentListTitle,
  PaymentListWrap,
  PaymentRightInfo,
  PaymentRightTop,
  PaymentSummaryInfo,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  PaymentStatusInfo,
  ReviewBtn,
  ReviewDisableBtn,
} from './OrderDetailsElements';

const OrderDtails = ({ meData }) => {
  const { id } = useParams();
  const [ordered, setOrdered] = useState([]);
  const [loading, setLoading] = useState(false);

  const ShippingFee = ordered?.total_price >= 200 ? 0 : 15;
  const Taxes = ordered?.total_price * 0.05;
  // const TotalPriceTag = ordered?.total_price + ShippingFee + Taxes + Discounts;
  const Discounts =
    ordered?.total_price - ordered?.final_total_price + ShippingFee + Taxes;

  const getOrdersById = async () => {
    const orderedData = await axios.get(`/orders/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setLoading(false);
    console.log('orderedData', orderedData?.data);
    setOrdered(orderedData?.data);
  };

  console.log('ordered out', ordered);

  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getOrdersById();
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PaymentContainer>
      <h1>My Order Details</h1>
      <PaymentWrapper>
        <PaymentBodyWrap>
          <PaymentLeftInfo>
            <PaymentStatusInfo>
              ORDER STATUS
              {ordered?.status === 'pending' && (
                <span
                  style={{
                    background: '#FEF3C7',
                    color: '#b74a01',
                  }}
                >
                  {ordered?.status.toUpperCase()}
                </span>
              )}
              {ordered?.status === 'inprogress' && (
                <span
                  style={{
                    background: '#c2f3fc',
                    color: '#005260',
                  }}
                >
                  {ordered?.status.toUpperCase()}
                </span>
              )}
              {ordered?.status === 'delivered' && (
                <span
                  style={{
                    background: '#c2fcd5',
                    color: '#006b21',
                  }}
                >
                  {ordered?.status.toUpperCase()}
                </span>
              )}
              {ordered?.status === 'cancelled' && (
                <span
                  style={{
                    background: '#FEE2E2',
                    color: '#7a0000',
                  }}
                >
                  {ordered?.status.toUpperCase()}
                </span>
              )}
            </PaymentStatusInfo>
            <PaymentPsersonalInfo>
              <PaymentListTitle>Shipping address</PaymentListTitle>
              <PaymentInfoDetails>
                <h3>{meData?.name}</h3>
                <p>{meData?.phone_number}</p>
                <p>{ordered?.address}</p>
              </PaymentInfoDetails>
            </PaymentPsersonalInfo>
            <PaymentListWrap>
              <PaymentListTitle>
                Product information
                <span>{ordered?.soldProduct?.length} Items</span>
              </PaymentListTitle>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Product Name</Th>
                    <Th>Product Option</Th>
                    <Th>Product Qty</Th>
                    <Th>Product Price</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                {ordered.soldProduct?.map((sold) => {
                  return (
                    <Tbody key={sold?.pk}>
                      <Tr>
                        <Td>
                          <Link to={`/products/${sold?.product?.pk}`}>
                            {sold?.product.name.toUpperCase()}
                          </Link>
                        </Td>
                        {sold?.product_option === null ? (
                          <Td>Free</Td>
                        ) : (
                          <Td>{sold?.product_option?.name}</Td>
                        )}

                        <Td>{sold?.number_of_product}</Td>
                        <Td>
                          ${sold?.product?.price * sold?.number_of_product}
                        </Td>
                        <Td>
                          {/* <Link to={`/review/${sold?.product?.pk}`}> */}
                          {ordered?.status === 'delivered' ? (
                            <Link to={`/review/${sold?.product?.pk}`}>
                              <ReviewBtn>Go to Review</ReviewBtn>
                            </Link>
                          ) : (
                            <ReviewDisableBtn disabled>
                              Go to Review
                            </ReviewDisableBtn>
                          )}
                          {/* </Link> */}
                        </Td>
                      </Tr>
                    </Tbody>
                  );
                })}
              </Table>
            </PaymentListWrap>
          </PaymentLeftInfo>

          <PaymentRightInfo>
            <PaymentRightTop>
              <TotalTitle>Summary</TotalTitle>
              {/* <span>${TotalPriceTag.toLocaleString()}</span> */}
            </PaymentRightTop>

            <PaymentSummaryInfo>
              <ItemSummary>
                Price
                <span>${ordered?.total_price?.toLocaleString()}</span>
              </ItemSummary>
              <ItemSummary>
                Shipping fee
                <span>${ShippingFee.toLocaleString()}</span>
              </ItemSummary>
              <ItemSummary>
                Duties amd Taxes
                <span>${Taxes.toLocaleString()}</span>
              </ItemSummary>
              <ItemSummary>
                Discounts
                <span>${Discounts.toLocaleString()}</span>
              </ItemSummary>
              <ItemTotalPrice>
                Total
                <span>${ordered?.final_total_price?.toLocaleString()}</span>
                {/* <span>${ordered?.final_total_price?.toLocaleString()}</span> */}
              </ItemTotalPrice>
              <ExtraInfo>
                <li>
                  * No additional duties and taxes are charged on delivery, as
                  they are included in the final price..
                </li>
              </ExtraInfo>
            </PaymentSummaryInfo>
          </PaymentRightInfo>
        </PaymentBodyWrap>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default OrderDtails;
