import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

function CartPage() {
  const [itemCart, setItemsCart] = useState([]);

  const getItemsCart = async () => {
    const cartInfo = await axios.get('/carts/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('CartInfo', cartInfo?.data);
    setItemsCart(cartInfo?.data);
  };

  useEffect(() => {
    getItemsCart();
  }, []);

  return (
    <>
      <div>CartPage</div>
      {itemCart.map((i) => {
        return (
          <ul key={i.pk}>
            <li>{i.pk}</li>
          </ul>
        );
      })}
    </>
  );
}

export default CartPage;
