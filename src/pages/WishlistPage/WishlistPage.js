import React, { useEffect, useState } from 'react'
import axios from '../../api/axios';
import { WishlistContainer, WishlistDrop, WishlistWrapper } from './WishlistElements';



function WishlistPage() {
  const [itemWishList, setItemsWishList] = useState(false);
  
  const [id, setId] = useState('7');


  const getItemsWishList = async () => {
    const wishListInfo = await axios.get(`/products/${id}`, 
    {
      id,
    },{
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('itemInfo', wishListInfo?.data);
    setItemsWishList(wishListInfo?.data);
  };

  useEffect(() => {
    getItemsWishList();
  }, []);

  return (
    <WishlistContainer>
      <WishlistWrapper>
        <div>WishlistPage</div>
        <WishlistDrop>
          {itemWishList.is_liked}
          {/* {itemWishList.map((item) => (
            <div key={item.pk}>
              {item.name}
              <img src={item.photos[0].picture} alt='' />
              {item.is_liked}
            </div>
          ))} */}
        </WishlistDrop>
      </WishlistWrapper>
    </WishlistContainer>

  )
}

export default WishlistPage;