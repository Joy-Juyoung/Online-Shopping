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
import EditIcon from '@mui/icons-material/Edit';
import AddItemModal from './AddItemModal';
import AddNewItem from './AddNewItem';
import { AdIconDelete } from './listStyle';
import NoneImg from '../../../asset/none.png';
import DeleteIcon from '@mui/icons-material/Delete';
import EditItem from './EditItem';

const ItemList = ({ meData, catData }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  // const [searchedList, setSearchedList] = useState();
  // const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [userInput, setUserInput] = useState('');

  const [modalShown, toggleModal] = useState(false);
  const [editModalShown, toggleEditModal] = useState(false);
  const [editPk, setEditPk] = useState('');
  const [addPhoto, setAddPhoto] = useState(null);

  const getProducts = async () => {
    const itemList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('itemList', itemList.data);
    setProducts(itemList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getProducts();
  }, [meData]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = products?.slice(firstPostIndex, lastPostIndex);
  const currentPosts = products
    ?.slice(firstPostIndex, lastPostIndex)
    ?.filter(
      (list) =>
        list.pk?.toString().includes(userInput) ||
        list.price?.toString().includes(userInput) ||
        list.name?.toLowerCase().includes(userInput.toLowerCase()) ||
        list.kind?.name?.toLowerCase().includes(userInput.toLowerCase()) ||
        list.created_at?.toLowerCase().includes(userInput.toLowerCase())
    );
  const handleDeleteItem = async (pk) => {
    // console.log('pk', pk);
    if (window.confirm('Are you sure you want to delete this Item?')) {
      const delItem = await axios.delete(`/products/${pk}`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      console.log('delItem', delItem.data);
      // window.location.reload();
    }
  };

  const handleEditItem = async (pk) => {
    toggleEditModal(!editModalShown);
    setEditPk(pk);
  };

  useEffect(() => {
    getProducts();
  }, [addPhoto, currentPosts]);

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
              <AdTHeadCell className='id'>ID</AdTHeadCell>
              <AdTHeadCell className='photo'>PHOTO</AdTHeadCell>
              <AdTHeadCell className='name'>NAME</AdTHeadCell>
              <AdTHeadCell className='price'>PRICE</AdTHeadCell>
              <AdTHeadCell className='sub'>SUB CATEGORY</AdTHeadCell>
              <AdTHeadCell className='createAt'>CREATE AT</AdTHeadCell>
              <AdTHeadCell></AdTHeadCell>
              <AdTHeadCell></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {/* {searchedList?.map((product) => {  */}
          {currentPosts?.map((product) => {
            return (
              <AdTBody key={product?.pk}>
                <AdTBodyRow>
                  <AdTBodyCell className='id'>{product?.pk}</AdTBodyCell>
                  <AdTBodyCell className='photo'>
                    {product?.photos?.length === 0 ? (
                      <BodyImg src={NoneImg} alt='No Image' />
                    ) : (
                      <BodyImg
                        src={product?.photos[0]?.picture}
                        alt={product?.name}
                      />
                    )}
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
                  <AdTBodyCell className='sub'>
                    {product?.kind?.name}
                  </AdTBodyCell>
                  <AdTBodyCell className='createAt'>
                    {new Date(product?.created_at).toLocaleString('en-ca')}
                  </AdTBodyCell>
                  <AdTBodyCell style={{ width: '5%' }}>
                    <AdIconDelete onClick={() => handleEditItem(product?.pk)}>
                      <EditIcon />
                    </AdIconDelete>
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
      <AddItemModal
        shown={editModalShown}
        close={() => {
          toggleEditModal(false);
        }}
      >
        <EditItem
          products={products}
          editPk={editPk}
          toggleEditModal={toggleEditModal}
          addPhoto={addPhoto}
          setAddPhoto={setAddPhoto}
        />
      </AddItemModal>
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
