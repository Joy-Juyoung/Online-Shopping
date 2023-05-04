import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

import {
  OrderContainer,
  OrderList,
  OrderListWrap,
  OrderWrap,
  OrderWrapper,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '../OrderPage/OrderElements';
import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import { ReviewListEmpty } from './ReviewsElements';
import { ReviewBtn } from '../OrderPage/OrderDetailsElements';
import RateReviewIcon from '@mui/icons-material/RateReview';
import DeleteIcon from '@mui/icons-material/Delete';

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

  const deleteReview = (pk) => {
    reviews.map(async (rv) => {
      if (pk === rv.pk) {
        if (window.confirm('Are you sure you want to delete this review?')) {
          try {
            await axios.delete(`/reviews/${pk}`, {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            });
            window.location.reload();
          } catch (err) {
            console.log('Error: Deleted failed. Please try again later');
          }
        } else {
          window.location.reload();
        }
      }
    });
  };

  // useEffect(() => {
  //   deleteReview();
  // }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>My Reviews</h1>
        <OrderWrap>
          <OrderList>
            {reviews?.length === 0 ? (
              <ReviewListEmpty>
                <span>No reviews found.</span>
                {/* <FormatListBulletedIcon /> */}
              </ReviewListEmpty>
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
                                <ReviewBtn active={true}>
                                  View
                                  <RateReviewIcon fontSize='small' />
                                </ReviewBtn>
                              </Link>
                            </Td>
                            <Td>
                              <Link>
                                <DeleteIcon
                                  fontSize='small'
                                  onClick={(e) => {
                                    e.preventDefault();
                                    deleteReview(review?.pk);
                                  }}
                                />
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
