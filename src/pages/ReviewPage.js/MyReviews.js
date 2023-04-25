import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { ButtonUtils } from '../../components/ButtonElements';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';
import {
  ListTotal,
  ListView,
  OrderContainer,
  OrderEachStatus,
  OrderList,
  OrderListEmpty,
  OrderListTable,
  OrderListTop,
  OrderListWrap,
  OrderMenuBy,
  OrderMenuByStatus,
  OrderWrap,
  OrderWrapper,
  StatusBox,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '../OrderPage/OrderElements';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { ReviewBtn } from '../OrderPage/OrderDetailsElements';

const MyReviews = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const reviewsList = await axios.get('/reviews/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('reviewsList', reviewsList?.data);
    setReviews(reviewsList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getReviews();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>My Orders</h1>
        <OrderWrap>
          <OrderList>
            {reviews?.length === 0 ? (
              <OrderListEmpty>No reviews found.</OrderListEmpty>
            ) : (
              <OrderListWrap>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>No.</Th>
                      <Th>Date</Th>
                      <Th>Item name</Th>
                      <Th>Reviews</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {reviews?.map((review, index) => {
                      return (
                        <Tr key={review?.pk}>
                          <>
                            <Td>{index + 1}</Td>
                            <Td>
                              {new Date(review.created_at).toLocaleDateString()}
                            </Td>
                            <Td>{review.Product_Name}</Td>
                            <Td>{review?.payload}</Td>
                            <Td>
                              <Link to={`/review/${review.product}`}>
                                <ReviewBtn active={true}>View</ReviewBtn>
                              </Link>
                            </Td>
                          </>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </OrderListWrap>
            )}
          </OrderList>
        </OrderWrap>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default MyReviews;
