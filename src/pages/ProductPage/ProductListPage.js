import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import {
  ProductsEach,
  ProductsList,
  ProductsListWrap,
  ProductsListContainer,
} from './ProductListElements';
import ProductsCard from './ProductsCard';

const PRODUCTS_URL = '/products';
const ProductsListPage = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const itemsList = await axios.get(PRODUCTS_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <ProductsListContainer>
      <ProductsListWrap>
        <h1>All Products</h1>
        <ProductsList>
          {items.map((item) => (
            // <ProductsCard key={item.pk} product={item} />
            <ProductsEach key={item.pk}>
              <img src={item.photos[0].picture} alt='' />
              <p>{item.name}</p>
              <span>${item.price}</span>
            </ProductsEach>
          ))}
        </ProductsList>
      </ProductsListWrap>
    </ProductsListContainer>
  );
};

export default ProductsListPage;
