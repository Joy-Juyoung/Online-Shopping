import React, { useEffect, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';

const ItemManage = ({ meData }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();

  const getProducts = async () => {
    const itemList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('userList', itemList.data);
    setProducts(itemList?.data);
    setLoading(false);
    // setCheckItems(new Array(cartList?.length).fill(true));
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>ItemManage</h1>
      <div>
        {/* {products?.map((product) => { */}
        {products
          ?.filter((item, idx) => idx < 20)
          .map((product) => {
            return (
              <ul key={product?.pk}>
                <li>{product?.name}</li>
              </ul>
            );
          })}
      </div>
    </AdContainer>
  );
};

export default ItemManage;
