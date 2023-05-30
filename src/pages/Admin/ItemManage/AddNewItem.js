import React, { useEffect, useState } from 'react';
import {
  AddNextBtn,
  Box,
  BoxBtn,
  BoxCatChild,
  BoxCategory,
  BoxCategoryH3,
  BoxCatList,
  BoxCatParents,
  BoxChild,
  BoxChildLi,
  BoxChildSpan,
  BoxChildTbody,
  BoxChildTr,
  BoxH2,
  BoxH3,
  BoxLi,
  BoxNotice,
  BoxParentsLi,
  BoxParentsSpan,
  BoxParentsThead,
  BoxParentsTr,
  BoxSelect,
  BoxSpan,
  BoxSuccess,
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
import { ButtonSmall } from '../../../components/ButtonElements';
import Soon from '../../../asset/soon.jpg';

const AddNewItem = ({ products, catData }) => {
  const [isNext, setIsNext] = useState(false);
  const [isLast, setIsLast] = useState(false);

  const [newItem, setNewItem] = useState('');
  const [parentskinds, setParentskinds] = useState('');
  const [childsPk, setChildPk] = useState('');

  const [addItemName, setAddItemName] = useState('');
  const [addItemPrice, setAddItemPrice] = useState('');
  const [addItemDetail, setAddItemDetail] = useState('');
  const [addItemInstock, setAddItemInstock] = useState('');

  const [allProducts, setAllproducts] = useState('');

  useEffect(() => {
    setParentskinds(catData);
    setAllproducts(products);
  }, [products, newItem]);

  // console.log('products', products);
  // console.log('products?.length + 1', products?.[products?.length - 1]?.pk);

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

  const selectedChild = (pk) => {
    setChildPk(pk);
  };

  console.log('childsPk', childsPk);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (childsPk === null) {
      console.log('Please select the category child');
      setIsLast(false);
    } else {
      const newProduct = await axios.post(
        '/products/',
        {
          kind_id: childsPk,
          name: addItemName,
          detail: addItemDetail,
          price: Number(addItemPrice),
          in_stock: Number(addItemInstock),
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log('newItem', newProduct?.data);
      setNewItem(newProduct?.data);
      setIsLast(true);
      // handleOptionDefault();
      // handlePhotoDefault();
    }
  };

  console.log('allProducts', allProducts);
  console.log(
    'NewItem',
    products
      ?.filter((pf) => pf?.name.includes(newItem?.name))
      .map((m) => {
        return m;
      })
  );

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
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
                    min='0'
                  />
                </BoxSpan>
                <BoxSpan>
                  <Input
                    type='number'
                    placeholder='In stock'
                    id='productInstock'
                    value={addItemInstock || ''}
                    onChange={handleAddNewItem}
                    min='0'
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
            <BoxCategoryH3>Select a Category</BoxCategoryH3>
            <BoxCategory>
              {parentskinds?.map((category) => {
                return (
                  <BoxCatList key={category?.pk}>
                    <BoxCatParents>
                      {category?.name.toUpperCase()}
                    </BoxCatParents>
                    <BoxCatChild>
                      {category?.productKinds?.map((child) => {
                        return (
                          <p
                            key={child?.pk}
                            onClick={() => selectedChild(child?.pk)}
                          >
                            {child?.name}
                          </p>
                        );
                      })}
                    </BoxCatChild>
                  </BoxCatList>
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
            <BoxBtn className='next'>
              <AddNextBtn onClick={() => setIsNext(!isNext)}>Back</AddNextBtn>
              <ButtonSmall>Create</ButtonSmall>
            </BoxBtn>
          </Box>
        )}
      </form>
      {isLast && (
        <Box>
          <BoxH2>
            <BoxSuccess>
              <CheckCircleOutlineIcon color='success' sx={{ fontSize: 50 }} />
              SUCCESSFULLY ADDED NEW PRODUCT!
            </BoxSuccess>
          </BoxH2>
          <BoxUl>
            <BoxNotice>
              Please add a product picture and product option.
              <p>*There are default image and option(option: Free)</p>
            </BoxNotice>
            <BoxLi>
              <BoxSpan>
                <Input type='date' id='couponStart' />
              </BoxSpan>
              <BoxSpan>
                <Input type='date' id='couponEnd' />
              </BoxSpan>
            </BoxLi>
          </BoxUl>

          <BoxBtn className='prev'>
            <AddNextBtn>Upload</AddNextBtn>
          </BoxBtn>
        </Box>
      )}
    </PopupBox>
  );
};

export default AddNewItem;
