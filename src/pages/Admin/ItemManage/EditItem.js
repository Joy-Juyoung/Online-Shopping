import React, { useEffect, useState } from 'react';
import {
  Box,
  BoxBtn,
  BoxH2,
  BoxH3,
  BoxLi,
  BoxSpan,
  BoxUl,
  PopupBox,
} from './listStyle';
import { Input } from '../../../components/InputElements';
import axios from '../../../api/axios';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  EditBox,
  EditTitle,
  EditList,
  EditPhoto,
  PhotoInput,
} from './EditStyle';
import { ButtonSmall, ButtonUtils } from '../../../components/ButtonElements';

const EditItem = ({ togglePhotoModal, editPk, addPhoto, setAddPhoto }) => {
  const [isPhotoEdit, setIsPhotoEdit] = useState(false);
  const [isOptionEdit, setIsOptionEdit] = useState(false);

  const [addOption, setAddOption] = useState('Free');

  const [editItem, setEditItem] = useState('');
  const [addDesc, setAddDesc] = useState(null);

  const [isUpload, setIsUpload] = useState(false);

  const getItem = async () => {
    const edit = await axios.get(`/products/${editPk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('edit', edit?.data);
    setEditItem(edit?.data);
    // setIsUpload(false);
  };

  useEffect(() => {
    getItem();
  }, []);

  const handleEditItem = async (e) => {
    if (e.target.id === 'productDesc') {
      setAddDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPhoto = await axios.post(
      `/product/${editPk}`,
      {
        kind_id: '',
        name: '',
        price: '',
        detail: '',
      },
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      }
    );
    console.log('newPhoto', newPhoto?.data);
    // toggleEditModal(false);

    setIsUpload(true);
  };

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
        <Box>
          <BoxH2>Edit Product</BoxH2>

          <BoxUl>
            <BoxH3>Product Information</BoxH3>

            <BoxLi>
              <BoxSpan>
                <Input
                  type='text'
                  id='productDesc'
                  placeholder='Enter the photo description'
                  onChange={handleEditItem}
                />
              </BoxSpan>
            </BoxLi>
          </BoxUl>

          <BoxBtn className='prev'>
            <ButtonSmall>Edit</ButtonSmall>
          </BoxBtn>
        </Box>
      </form>
    </PopupBox>
  );
};

export default EditItem;
