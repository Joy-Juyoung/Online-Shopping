import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { ButtonLarge, ButtonUtils } from '../../components/ButtonElements';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';

import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { PaymentSuccessMsg } from './PaymentElements';

const SuccessPayment = () => {
  // const [orderStatus, setOrderStatus] = useState(null);
  // const [isEmpty, setIsEmpty] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [errMsg, setErMsg] = useState('');
  // const [isSelected, setIsSelected] = useState('All');

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PaymentSuccessMsg>
      <div>
        <CheckCircleOutlineIcon color='success' sx={{ fontSize: 100 }} />
      </div>
      <h1>ORDER SUCCESSFUL</h1>
      <p>Thank you so much for your order.</p>
      <Link to='/products/all'>
        <ButtonLarge borderColor={true} fontStrong={true}>
          Countinue Shopping
        </ButtonLarge>
      </Link>
    </PaymentSuccessMsg>
  );
};

export default SuccessPayment;
