import React, { useEffect, useState } from 'react';
import {
  AddNextBtn,
  Box,
  BoxBtn,
  BoxCategory,
  BoxChild,
  BoxChildLi,
  BoxChildSpan,
  BoxChildTbody,
  BoxChildTr,
  BoxH2,
  BoxH3,
  BoxLi,
  BoxParentsLi,
  BoxParentsSpan,
  BoxParentsThead,
  BoxParentsTr,
  BoxSelect,
  BoxSpan,
  BoxTable,
  BoxTr,
  BoxUl,
  PopupBox,
} from './listStyle';
import { Input } from '../../../components/InputElements';
import { VerificationMsg } from '../../LoginPage/LoginElements';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from '../../../api/axios';

const AddNewItem = ({ products, catData }) => {
  const [isNext, setIsNext] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const [newItem, setNewItem] = useState('');
  const [parentskinds, setParentskinds] = useState('');
  const [childskinds, setChildkinds] = useState('');

  const [addItemName, setAddItemName] = useState('');
  const [addItemPrice, setAddItemPrice] = useState('');
  const [addItemDetail, setAddItemDetail] = useState('');
  const [addItemInstock, setAddItemInstock] = useState('');

  const [addItemKindId, setAddItemKindId] = useState('');

  useEffect(() => {
    setParentskinds(catData);
  }, [products]);

  // console.log('parentskinds', parentskinds);
  // console.log('childskinds', childskinds);

  const handleValidNext = () => {
    if (!addItemName || !addItemPrice || !addItemDetail || !addItemInstock) {
      setIsNext(false);
    } else {
      setIsNext(true);
    }
  };

  const handleAddNewItem = (e) => {
    if (e.target.id === 'productName') {
      setAddItemName(e.target.value);
    }

    if (e.target.id === 'productDetail') {
      setAddItemDetail(e.target.value);
    }

    if (e.target.id === 'productPrice') {
      setAddItemPrice(e.target.value);
    }

    if (e.target.id === 'productInstock') {
      setAddItemInstock(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newProduct = await axios.post(
    //   '/products/',
    //   {
    //     // kind_id: addUser, add child pk
    //     // name: addCouponName,
    //     // price: addCouponDesc,
    //     // detail: addDiscount,
    //     in_stock: 100,
    //   },
    //   {
    //     headers: { 'Content-Type': 'application/json' },
    //     withCredentials: true,
    //   }
    // );
    // console.log('newItem', newProduct?.data);
    // setNewItem(newProduct?.data);
  };
  return (
    <PopupBox>
      <form onSubmit={handleSubmit}></form>
      {!isNext && !isLast && (
        <Box>
          <BoxH2>New Product</BoxH2>
          <BoxUl>
            <BoxH3>Add Product Information</BoxH3>
            <BoxLi>
              <BoxSpan>
                <Input
                  type='text'
                  placeholder='Product name'
                  id='productName'
                  value={addItemName || ''}
                  onChange={handleAddNewItem}
                />
              </BoxSpan>
              <BoxSpan>
                <Input
                  type='text'
                  placeholder='Product description'
                  id='productDetail'
                  value={addItemDetail || ''}
                  onChange={handleAddNewItem}
                />
              </BoxSpan>
              <BoxSpan>
                <Input
                  type='number'
                  placeholder='Product Price'
                  id='productPrice'
                  value={addItemPrice || ''}
                  onChange={handleAddNewItem}
                />
              </BoxSpan>
              <BoxSpan>
                <Input
                  type='number'
                  placeholder='In stock'
                  id='productInstock'
                  value={addItemInstock || ''}
                  onChange={handleAddNewItem}
                />
              </BoxSpan>
            </BoxLi>
          </BoxUl>

          <VerificationMsg
            id='uidnote'
            style={{
              display:
                !addItemName ||
                !addItemPrice ||
                !addItemDetail ||
                !addItemInstock
                  ? 'flex'
                  : 'none',
              marginBottom: '20px',
            }}
          >
            <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
            <span>Please fill in all the field.</span>
          </VerificationMsg>
          <BoxBtn className='prev'>
            <AddNextBtn onClick={handleValidNext}>Next</AddNextBtn>
          </BoxBtn>
        </Box>
      )}
      {isNext && !isLast && (
        <Box>
          <BoxH2>New Product</BoxH2>
          {/* <BoxUl> */}
          <BoxH3>Select Product Category</BoxH3>
          <BoxCategory>
            {parentskinds?.map((category) => {
              return (
                <BoxTable key={category?.pk}>
                  <BoxTr key={category?.pk}>
                    <th colSpan={category?.productKinds?.length}>
                      {category?.name.toUpperCase()}
                    </th>
                    {category?.productKinds?.map((child) => {
                      return <td key={child?.pk}>{child?.name}</td>;
                    })}
                  </BoxTr>
                </BoxTable>
              );
            })}
          </BoxCategory>
          <VerificationMsg
            id='uidnote'
            style={{
              display: !addItemName || !addItemPrice ? 'flex' : 'none',
              marginBottom: '20px',
            }}
          >
            <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
            <span>Please fill in all the field.</span>
          </VerificationMsg>
          <BoxBtn className='prev'>
            <AddNextBtn>Create</AddNextBtn>
          </BoxBtn>
        </Box>
      )}
    </PopupBox>
  );
};

export default AddNewItem;
