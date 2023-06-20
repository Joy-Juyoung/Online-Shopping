import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
  PaymentSuccessMsg,
} from '../PaymentPage/PaymentElements';
import { OrderContainer, OrderWrapper } from '../OrderPage/OrderElements';
import { ButtonLarge } from '../../components/ButtonElements';
// import SuccessPayment from '../PaymentPage/SuccessPayment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

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
  const [reviewEditId, setReviewEditId] = useState('');
  const { reviewId } = useParams();
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  // const [reviews, setReviews] = useState([]);

  // const getReviews = async () => {
  //   const reviewsList = await axios.get(`/reviews/${reviewEditId}`, {
  //     headers: { 'Content-Type': 'application/json' },
  //     withCredentials: true,
  //   });
  //   console.log('reviewsList', reviewsList?.data);
  //   setReviews(reviewsList?.data);
  // };

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
    // getReviews();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [reviewId]);

  useEffect(() => {
    var tempReview = getItem?.reviews;
    tempReview?.forEach((rv) => {
      console.log(rv);
      if (rv?.user?.username === meData?.username) {
        setReviewValue(rv.payload);
        setReviewRating(rv.rating);
        setReviewEditId(rv.pk);
      } else {
        setReviewValue();
        setReviewRating();
        setReviewEditId();
      }
    });
  }, [getItem]);

  // console.log(
  //   'temp',
  //   getItem?.reviews
  //     ?.filter((rf) => rf?.user?.username !== meData?.username)
  //     .map((m) => m)
  // );

  const handleReviewChange = (e) => {
    // e.preventDefault();
    setReviewValue(e.target.value);
  };
  // console.log('getItem.reviwes.length', getItem?.reviews[0]);

  const handleReviewSubmit = async () => {
    var tempReview = getItem?.reviews;
    // console.log('active', tempReview.length);
    if (
      tempReview
        ?.filter((rf) => rf?.user?.username === meData?.username)
        .map((m) => m)
    ) {
      console.log('Review 0');
      try {
        await axios.post(
          '/reviews/',
          {
            product_id: reviewId,
            payload: reviewValue,
            rating: reviewRating,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        setSuccess(true);
      } catch (err) {
        console.log(err.message);
        alert('Please check the rating or write the review.');
      }
    } else {
      console.log('Review 1');
      try {
        await axios.put(
          `/reviews/${reviewEditId}`,
          {
            payload: reviewValue,
            rating: reviewRating,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
        setSuccess(true);
      } catch (err) {
        console.log(err.message);
        alert('Put Request Error');
      }
    }
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <OrderContainer>
      {success ? (
        <PaymentSuccessMsg>
          <div>
            <CheckCircleOutlineIcon color='success' sx={{ fontSize: 100 }} />
          </div>
          <h1>Your review has been written successfully.</h1>
          {/* <p>Thank you so much for your order.</p> */}
          <Link to='/myReviews'>
            <ButtonLarge borderColor={true} fontStrong={true}>
              Manage My Reviews
            </ButtonLarge>
          </Link>
        </PaymentSuccessMsg>
      ) : (
        <OrderWrapper>
          <h1>Write Review</h1>
          {/* <form onSubmit={handleReviewSubmit}> */}
          <ReviewItemInfo>
            <ListsImgLink to={`/products/${getItem?.id}`}>
              <img src={getItem?.photos?.[0]?.picture} alt={getItem?.name} />
            </ListsImgLink>
            <ReviewItemDetails to={`/products/${getItem?.id}`}>
              <DetailName>{getItem?.name}</DetailName>
              <DetailDescription>{getItem?.detail}</DetailDescription>
            </ReviewItemDetails>
          </ReviewItemInfo>

          <ReviewRate>
            <h2>Rate Features</h2>
            <div>
              <Rating
                size='large'
                value={getItem?.rating || null}
                // value={reviewRating || null}
                onChange={(event, newValue) => {
                  setReviewRating(newValue);
                }}
              />
            </div>
          </ReviewRate>
          <ReviewText>
            <h2>Add a written review</h2>
            <textarea
              id='payload'
              name='payload'
              // value={reviewValue}
              value={getItem?.reviews?.[0]?.payload}
              onChange={handleReviewChange}
            />
          </ReviewText>
          <ReviewBtn>
            <ButtonLarge onClick={handleReviewSubmit}>Submit</ButtonLarge>
          </ReviewBtn>
          {/* </form> */}
        </OrderWrapper>
      )}
    </OrderContainer>
  );
};

export default NewReview;
