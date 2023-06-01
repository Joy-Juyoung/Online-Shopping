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

const EditItem = ({ toggleEditModal, editPk, addPhoto, setAddPhoto }) => {
  const [isPhotoEdit, setIsPhotoEdit] = useState(false);
  const [isOptionEdit, setIsOptionEdit] = useState(false);

  const [addOption, setAddOption] = useState('Free');
  // const [addPhoto, setAddPhoto] = useState(null);

  const handleEditItem = async (e) => {
    if (e.target.id === 'productPhoto') {
      setAddPhoto(e.target.files[0]);
    }
  };
  // console.log('addPhoto', addPhoto);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('picture', addPhoto);

    const newPhoto = await axios.post(`/photos/product/${editPk}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log('newPhoto', newPhoto?.data);
    toggleEditModal(false);
  };

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
        <Box>
          <BoxH2>New Product</BoxH2>
          <BoxUl>
            <BoxH3>Add Product Information</BoxH3>
            <BoxLi>
              <BoxSpan>
                <Input
                  type='file'
                  // placeholder='Product name'
                  id='productPhoto'
                  // value={addItemName || ''}
                  onChange={handleEditItem}
                />
              </BoxSpan>
            </BoxLi>
          </BoxUl>

          <BoxBtn className='prev'>
            <button>Upload</button>
          </BoxBtn>
        </Box>
      </form>
    </PopupBox>
  );
};

export default EditItem;
