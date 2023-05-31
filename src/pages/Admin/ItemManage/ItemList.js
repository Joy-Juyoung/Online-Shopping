import React, { useEffect, useState, useMemo } from 'react';
import {
  AdContainer,
  AdListBottom,
  AdListMid,
  AdListSearch,
  AdListTop,
  AdListUtils,
  AdTable,
  AdTBody,
  AdTBodyCell,
  AdTBodyRow,
  AdTHead,
  AdTHeadCell,
  AdTHeadeRow,
  BodyImg,
  CheckInput,
} from '../AdminCommonElements';
import axios from '../../../api/axios';
import Loading from '../../../components/Loading';
import Pagination from '../../../components/AdminComponents//Pagination';
import { ButtonSmall } from '../../../components/ButtonElements';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import DeleteIcon from '@mui/icons-material/Delete';
import AddItemModal from './AddItemModal';
import AddNewItem from './AddNewItem';
import { AdIconDelete } from './listStyle';

const ItemList = ({ meData, catData }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  // const [searchedList, setSearchedList] = useState();
  // const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const [userInput, setUserInput] = useState("");
  // const [isHorizontal, setIsHorizontal] = useState(false);

  const [modalShown, toggleModal] = useState(false);

  // const [checkedItem, setCheckedItem] = useState('');
  // const [selectedItem, setSelectedItem] = useState('');

  // const handleCheckedItems = (e) => {
  //   setCheckedItem({ ...checkedItem, [e.target.value]: e.target.checked });
  // };
  // console.log('checkedItem', checkedItem);

  // useEffect(() => {
  //   setSelectedItem(
  //     Object.entries(checkedItem)
  //       .filter(([key, value]) => value)
  //       .map((added, index) => added[0])
  //   );
  // }, [checkedItem]);
  // console.log('selectedItem', selectedItem);

  // useEffect(() => {
  //   if (selectedItem) {
  //     setSelectedItem(
  //       products?.filter((item) => selectedItem?.includes(item?.pk.toString()))
  //     );
  //   }
  // }, [selectedItem]);

  const getProducts = async () => {
    const itemList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('itemList', itemList.data);
    setProducts(itemList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products?.slice(firstPostIndex, lastPostIndex);

  // useEffect(() => {
  //   setSearchedList(
  //     !searchValue
  //       ? currentPosts
  //       : currentPosts?.filter((search, index) => {
  //           return (
  //             search?.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //             search?.kind?.name
  //               .toLowerCase()
  //               .includes(searchValue.toLowerCase()) ||
  //             search?.pk
  //               ?.toString()
  //               .toLowerCase()
  //               .includes(searchValue.toString().toLowerCase()) ||
  //             search?.price
  //               ?.toString()
  //               .toLowerCase()
  //               .includes(searchValue.toString().toLowerCase()) ||
  //             search?.created_at
  //               ?.toString()
  //               .toLowerCase()
  //               .includes(searchValue.toString().toLowerCase())
  //           );
  //         })
  //   );
  // }, [products, searchValue]);

  const handleDeleteItem = async (pk) => {
    // console.log('pk', pk);
    if (window.confirm('Are you sure you want to delete this Item?')) {
      const delItem = await axios.delete(`/products/${pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('delItem', delItem.data);
      window.location.reload();
    }
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <AdContainer>
      <h1>All Products</h1>
      <AdListTop>
        <AdListSearch>
          <input
            type='text'
            placeholder='Search'
            // onChange={(e) => setSearchValue(e.target.value)}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </AdListSearch>
        <AdListUtils>
          <ButtonSmall onClick={() => toggleModal(!modalShown)}>
            Add
          </ButtonSmall>
        </AdListUtils>
      </AdListTop>

      <AddItemModal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
        // isHorizontal={true}
      >
        <AddNewItem products={products} catData={catData} />
      </AddItemModal>

      <AdListMid>
        <AdTable>
          <AdTHead>
            <AdTHeadeRow>
              {/* <AdTHeadCell className='check'>
                <input type='checkbox' />
              </AdTHeadCell> */}
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='photo'>PHOTO</AdTHeadCell>
              <AdTHeadCell className='name'>NAME</AdTHeadCell>
              <AdTHeadCell className='price'>PRICE</AdTHeadCell>
              {/* <AdTHeadCell>CATEGORY</AdTHeadCell> */}
              <AdTHeadCell className='sub'>SUB CATEGORY</AdTHeadCell>
              {/* <AdTHeadCell>IN STOCK</AdTHeadCell> */}
              <AdTHeadCell className='createAt'>CREATE AT</AdTHeadCell>
              <AdTHeadCell></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {/* {searchedList?.map((product) => {  */}
          {currentPosts?.filter((list) => 
            list.pk?.toString().includes(userInput)
              || list.price?.toString().includes(userInput)
              || list.name?.toLowerCase().includes(userInput.toLowerCase())
              || list.kind?.name?.toLowerCase().includes(userInput.toLowerCase())
              || list.created_at?.toLowerCase().includes(userInput.toLowerCase())
          ) 
          .map((product) => {
            return (
              <AdTBody key={product?.pk}>
                <AdTBodyRow>
                  {/* <AdTBodyCell className='check'>
                    <CheckInput
                      type='checkbox'
                      // name='couponpUser'
                      // id='couponpUser'
                      // value={product?.pk}
                      // onChange={(e) => handleCheckedItems(e)}
                      // checked={checkedItem[product?.pk] || ''}
                    />
                  </AdTBodyCell> */}
                  <AdTBodyCell className='id'>{product?.pk}</AdTBodyCell>
                  <AdTBodyCell className='photo'>
                    <BodyImg
                      src={product?.photos[0]?.picture}
                      alt={product?.name}
                    />
                  </AdTBodyCell>
                  <AdTBodyCell className='name'>
                    {product?.name?.length > 30 ? (
                      `${product?.name?.substring(0, 30)}...`
                    ) : (
                      <> {product?.name}</>
                    )}
                  </AdTBodyCell>
                  <AdTBodyCell className='price'>
                    ${product?.price?.toLocaleString()}
                  </AdTBodyCell>
                  {/* <AdTBodyCell>{product?.name}</AdTBodyCell> */}
                  <AdTBodyCell className='sub'>
                    {product?.kind?.name}
                  </AdTBodyCell>
                  {/* <AdTBodyCell>{product?.instock}</AdTBodyCell> */}
                  <AdTBodyCell className='createAt'>
                    {new Date(product?.created_at).toLocaleString('en-ca')}
                  </AdTBodyCell>
                  <AdTBodyCell style={{ width: '5%' }}>
                    <AdIconDelete onClick={() => handleDeleteItem(product?.pk)}>
                      <DeleteIcon />
                    </AdIconDelete>
                  </AdTBodyCell>
                </AdTBodyRow>
              </AdTBody>
            );
          })}
        </AdTable>
      </AdListMid>
      <AdListBottom>
        <Pagination
          totalPosts={products?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </AdListBottom>
    </AdContainer>
  );
};

export default ItemList;
