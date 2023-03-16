import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const PRODUCTS_URL = '/products';
const ProductsListPage = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const itemsList = await axios.get(PRODUCTS_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('Product', itemsList?.data);
    setItems(itemsList?.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div>
        Product Page
        <div>
          <ul>
            {items.map((item) => (
              <li key={item.pk}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsListPage;
