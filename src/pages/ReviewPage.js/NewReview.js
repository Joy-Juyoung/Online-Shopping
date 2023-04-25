import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Loading from '../../components/Loading';
import {
  PaymentContainer,
  PaymentWrapper,
} from '../OrderPage/OrderDetailsElements';
import { Rating } from '@mui/material';
import {
  ReviewBtn,
  ReviewItemDetails,
  ReviewItemInfo,
  ReviewRate,
  ReviewText,
} from './ReviewsElements';
import {
  DetailDescription,
  DetailName,
  DetailOption,
  ListsImgLink,
} from '../PaymentPage/PaymentElements';
import { OrderContainer, OrderWrapper } from '../OrderPage/OrderElements';
import { ButtonLarge } from '../../components/ButtonElements';

// const StyledRating = styled(Rating)(
//   {
//   '& .MuiRating-iconFilled': {
//     color: '#ffb41e',
//   },
//   '& .MuiRating-iconHover': {
//     color: '#ffb41e',
//   },
// });

const NewReview = ({ meData }) => {
  const [getItem, setGetItem] = useState([]);
  // const [selectedItem, setSelectedItem] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reviewValue, setReviewValue] = useState('');
  const [reviewRating, setReviewRating] = useState('');
  const { reviewId } = useParams();

  const getProduct = async () => {
    const { data } = await axios.get(`/products/${reviewId}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setLoading(false);
    console.log('getItem', data);
    setGetItem(data);
  };

  useEffect(() => {
    setLoading(true);
    getProduct();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [reviewId]);

  useEffect(() => {
    var tempReview = getItem?.reviews;
    tempReview?.forEach((rv) => {
      if (rv.user.username === meData.username) {
        setReviewValue(rv.payload);
        setReviewRating(rv.rating);
      } else {
        setReviewValue();
        setReviewRating();
      }
    });
  }, [getItem]);

  const handleReviewChange = (e) => {
    // e.preventDefault();
    setReviewValue(e.target.value);
  };
  // console.log('reviewValue', reviewValue);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      <OrderWrapper>
        <h1>Create Review</h1>
        <form>
          <ReviewItemInfo>
            <ListsImgLink to={`/products/${getItem?.id}`}>
              <img src={getItem?.photos?.[0].picture} alt={getItem?.name} />
            </ListsImgLink>
            <ReviewItemDetails to={`/products/${getItem?.id}`}>
              <DetailName>{getItem?.name}</DetailName>
              <DetailDescription>{getItem?.detail}</DetailDescription>
              {/* <DetailOption>
                {getItem?.productOptions === null ? (
                  'Free'
                ) : (
                  <>{optionDetail}</>
                )}
              </DetailOption> */}
            </ReviewItemDetails>
          </ReviewItemInfo>

          <ReviewRate>
            <h2>Rate Features</h2>
            <div>
              <Rating size='large' value={reviewRating || null} />
            </div>
          </ReviewRate>
          <ReviewText>
            <h2>Add a written review</h2>
            <textarea
              id='payload'
              name='payload'
              value={reviewValue}
              onChange={handleReviewChange}
            />
          </ReviewText>
          <ReviewBtn>
            <ButtonLarge>Submit</ButtonLarge>
          </ReviewBtn>
        </form>
      </OrderWrapper>
    </OrderContainer>
  );
};

export default NewReview;
