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
import PaginationOrigin from '../../../components/AdminComponents/Pagination';
import { ButtonSmall, ButtonUtils } from '../../../components/ButtonElements';
import AddItemModal from './AddItemModal';
import AddNewItem from './AddNewItem';
import { AdIconDelete } from './listStyle';
import NoneImg from '../../../asset/none.png';
import DeleteIcon from '@mui/icons-material/Delete';
import EditItem from './EditItem';
import EditPhotoItem from './EditPhotoItem';

const ItemList = ({ meData, catData }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState();
  // const [searchedList, setSearchedList] = useState();
  // const [searchValue, setSearchValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [userInput, setUserInput] = useState('');

  const [modalShown, toggleModal] = useState(false);
  const [photoModalShown, togglePhotoModal] = useState(false);
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
  }, [meData, addPhoto]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = products?.slice(firstPostIndex, lastPostIndex);
  // const currentPosts = products?.slice(firstPostIndex, lastPostIndex);
  // const currentPosts = products
  //   ?.slice(firstPostIndex, lastPostIndex)
  //   ?.filter(
  //     (list) =>
  //       list.pk?.toString().includes(userInput) ||
  //       list.price?.toString().includes(userInput) ||
  //       list.name?.toLowerCase().includes(userInput.toLowerCase()) ||
  //       list.kind?.name?.toLowerCase().includes(userInput.toLowerCase()) ||
  //       list.created_at?.toLowerCase().includes(userInput.toLowerCase())
  //   );
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

  const handlePhotoItem = async (pk) => {
    togglePhotoModal(!photoModalShown);
    setEditPk(pk);
  };

  const handleEditItem = async (pk) => {
    toggleEditModal(!editModalShown);
    setEditPk(pk);
  };

  // useEffect(() => {
  //   getProducts();
  // }, [addPhoto]);

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
              {/* <AdTHeadCell></AdTHeadCell> */}
              <AdTHeadCell></AdTHeadCell>
            </AdTHeadeRow>
          </AdTHead>
          {userInput === null ? (
            <>
            {currentPosts
            ?.filter(
              (list) =>
                list.pk?.toString().includes(userInput) ||
                list.price?.toString().includes(userInput) ||
                list.name?.toLowerCase().includes(userInput.toLowerCase()) ||
                list.kind?.name?.toLowerCase().includes(userInput.toLowerCase()) ||
                list.created_at?.toLowerCase().includes(userInput.toLowerCase())
            )
            .map((product) => {
              return (
                <AdTBody key={product?.pk}>
                  <AdTBodyRow>
                    <AdTBodyCell style={{ width: '5%' }}>
                      {product?.pk}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '8%', height: '40px' }}>
                      {product?.photos?.length === 0 ? (
                        <BodyImg src={NoneImg} alt='No Image' />
                      ) : (
                        <BodyImg
                          src={product?.photos[0]?.picture}
                          alt={product?.name}
                        />
                      )}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '25%' }}>
                      {product?.name?.length > 30 ? (
                        `${product?.name?.substring(0, 30)}...`
                      ) : (
                        <> {product?.name}</>
                      )}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '7%' }}>
                      ${product?.price?.toLocaleString()}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '12%' }}>
                      {product?.kind?.name}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '18%' }}>
                      {new Date(product?.created_at).toLocaleString('en-ca')}
                    </AdTBodyCell>
                    <AdTBodyCell style={{ width: '10%' }}>
                      <AdIconDelete onClick={() => handlePhotoItem(product?.pk)}>
                        <ButtonUtils>+ Photos</ButtonUtils>
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
            </>
          ):(
            <>
              {products
                ?.filter(
                  (list) =>
                    list.pk?.toString().includes(userInput) ||
                    list.price?.toString().includes(userInput) ||
                    list.name?.toLowerCase().includes(userInput.toLowerCase()) ||
                    list.kind?.name?.toLowerCase().includes(userInput.toLowerCase()) ||
                    list.created_at?.toLowerCase().includes(userInput.toLowerCase())
                )
                .slice(firstPostIndex, lastPostIndex)
                .map((product) => {
                  return (
                    <AdTBody key={product?.pk}>
                      <AdTBodyRow>
                        <AdTBodyCell style={{ width: '5%' }}>
                          {product?.pk}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '8%', height: '40px' }}>
                          {product?.photos?.length === 0 ? (
                            <BodyImg src={NoneImg} alt='No Image' />
                          ) : (
                            <BodyImg
                              src={product?.photos[0]?.picture}
                              alt={product?.name}
                            />
                          )}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '25%' }}>
                          {product?.name?.length > 30 ? (
                            `${product?.name?.substring(0, 30)}...`
                          ) : (
                            <> {product?.name}</>
                          )}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '7%' }}>
                          ${product?.price?.toLocaleString()}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '12%' }}>
                          {product?.kind?.name}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '18%' }}>
                          {new Date(product?.created_at).toLocaleString('en-ca')}
                        </AdTBodyCell>
                        <AdTBodyCell style={{ width: '10%' }}>
                          <AdIconDelete onClick={() => handlePhotoItem(product?.pk)}>
                            <ButtonUtils>+ Photos</ButtonUtils>
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
                })
                }
            </>
          )}
        </AdTable>
      </AdListMid>
      <AddItemModal
        shown={photoModalShown}
        close={() => {
          togglePhotoModal(false);
        }}
      >
        <EditPhotoItem
          products={products}
          editPk={editPk}
          togglePhotoModal={togglePhotoModal}
          addPhoto={addPhoto}
          setAddPhoto={setAddPhoto}
        />
      </AddItemModal>

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
        <PaginationOrigin
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
