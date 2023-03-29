import { Axios } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ProductsEach,
  ProductsList,
  ProductsListWrap,
  ProductsListContainer,
} from './ProductListElements';

// const TestProduct_URL = '/products/productAllChildKinds/${id}';
const TestProductKindsView = () => {

    const [itemKinds, setItemKinds] = useState(""); //useState([]);
    const { id } = useParams();
    const getKindsProduct = async () => {
        const {data} = await axios.get(`/products/productAllChildKinds/${id}`,{
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
          );
          
        console.log(data)
        setItemKinds(data)
        }
        useEffect(() => {
            getKindsProduct();
        },[])
    
  return (
    <ProductsListContainer>
        
      <ProductsListWrap>
        <h1>{itemKinds.name}</h1>
            <ProductsList>
            {itemKinds.products?.map((item) => (
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

export default TestProductKindsView;
