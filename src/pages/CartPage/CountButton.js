import React, { useState } from 'react'
import axios from '../../api/axios';
import { ItemDecreaseBtn, ItemDetailTwoWrap, ItemIncreaseBtn, ItemNumberInput } from './CartElements';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CountButton = ( {carts, cart, getAllCart} ) => {
  const [cartArr, setCartArr] = useState([])

    const handleIncrease = async (pk) => {
    const addQty =  carts.map((i) => {
      if (pk === i?.pk && i.number_of_product < 10000) {
        axios.put(
          `/carts/${pk}`,
          {
            number_of_product: i.number_of_product + 1,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
      }
    });
    setCartArr(addQty);
    getAllCart();
  };

  const handleDecrease = async (pk) => {
    const minusQty = await carts.map((i) => {
      if (pk === i?.pk && i.number_of_product > 1) {
         axios.put(

          `/carts/${pk}`,
          {
            pk: i?.pk,
            number_of_product: i.number_of_product - 1,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        );
      }
    });   
    setCartArr(minusQty);
    getAllCart();
  };

  return (
    <>
      <ItemDetailTwoWrap >
        <ItemDecreaseBtn
            onClick={(e) => {
            e.preventDefault();
            handleDecrease(cart?.pk);
            }}
        >
            <RemoveIcon fontSize='small' color='action' />
        </ItemDecreaseBtn>
        <ItemNumberInput>
            {cart?.number_of_product}
        </ItemNumberInput>
        <ItemIncreaseBtn
            onClick={(e) => {
            e.preventDefault(); 
            handleIncrease(cart?.pk);
            }}
        >
            <AddIcon fontSize='small' color='action' />
        </ItemIncreaseBtn>
      </ItemDetailTwoWrap>
    </>
  )
}

export default CountButton;