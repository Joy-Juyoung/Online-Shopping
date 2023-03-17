import React from 'react';
import { ButtonSmall } from '../../components/ButtonElements';

const ProductsCard = ({ product }) => {
  // console.log(product);

  return (
    <div>
      <ul>
        {product.photos.map((pic) => (
          <li key={pic.pk}>
            <img src={pic.picture} alt='' />
            <h2>{product.name}</h2>
            {/* <p>{product.description}</p> */}
            <span>${product.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsCard;
