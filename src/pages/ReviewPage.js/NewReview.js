import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Loading from '../../components/Loading';
import {
  PaymentContainer,
  PaymentWrapper,
} from '../OrderPage/OrderDetailsElements';
import { Rating } from '@mui/material';

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
  const [loading, setLoading] = useState(false);
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

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PaymentContainer>
      <h1>Create Review</h1>
      <PaymentWrapper>
        <form>
          <div>
            <img src={getItem?.photos?.[0].picture} alt={getItem?.name} />
            <div>{getItem?.name}</div>
            <div>{getItem?.detail}</div>
            <div>{getItem?.productOptions}</div>
          </div>
          <div>
            <h2>Rate Features</h2>
            <div>
              <Rating size='large' value='' />
            </div>
          </div>
          <div>
            <h2>Add a written review</h2>
            <textarea id='payload' name='payload' rows='4' cols='80' value='' />
          </div>
          <div>
            <button>submit</button>
          </div>
        </form>
      </PaymentWrapper>
    </PaymentContainer>
  );
};

export default NewReview;
