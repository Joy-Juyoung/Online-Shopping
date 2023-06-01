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
import { ButtonUtils } from '../../../components/ButtonElements';

const EditItem = ({ toggleEditModal, editPk, addPhoto, setAddPhoto }) => {
  const [isPhotoEdit, setIsPhotoEdit] = useState(false);
  const [isOptionEdit, setIsOptionEdit] = useState(false);

  const [addOption, setAddOption] = useState('Free');

  const [editItem, setEditItem] = useState('');
  const [addDesc, setAddDesc] = useState(null);

  const [isUpload, setIsUpload] = useState(false);

  const getItem = async () => {
    // console.log('pk', pk);
    const edit = await axios.get(`/products/${editPk}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('edit', edit?.data);
    setEditItem(edit?.data);
    setIsUpload(false);
  };

  useEffect(() => {
    getItem();
  }, [isUpload]);

  const handleEditItem = async (e) => {
    if (e.target.id === 'productPhoto') {
      setAddPhoto(e.target.files[0]);
    }
    if (e.target.id === 'productDesc') {
      setAddDesc(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('picture', addPhoto);
    formData.append('description', addDesc);

    const newPhoto = await axios.post(`/photos/product/${editPk}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    });
    console.log('newPhoto', newPhoto?.data);
    // toggleEditModal(false);

    setIsUpload(true);
  };

  const handleDeletePhoto = async (pk) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      const delPhoto = await axios.delete(`/photos/${pk}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      console.log('delPhoto', delPhoto?.data);
      setIsUpload(true);
    }
  };

  return (
    <PopupBox>
      <form onSubmit={handleSubmit}>
        <Box>
          <BoxH2>Edit Product</BoxH2>

          <BoxUl>
            <EditTitle>
              Photos
              <p style={{ fontSize: '11px' }}>
                Total {editItem?.photos?.length}
              </p>
            </EditTitle>
            {/* <BoxH3>Add Photo</BoxH3> */}
            <EditPhoto>
              {/* <p style={{ fontSize: '13px' }}>
                Total {editItem?.photos?.length} photos
              </p> */}
              <EditList>
                {editItem?.photos?.map((ph, index) => {
                  return (
                    <EditBox key={ph?.pk}>
                      <img src={ph?.picture} alt='' />
                      <p>
                        {index + 1}.
                        <DeleteIcon
                          fontSize='small'
                          onClick={() => handleDeletePhoto(ph?.pk)}
                        />
                      </p>
                    </EditBox>
                  );
                })}
              </EditList>
            </EditPhoto>
            <EditTitle>Add New Photo</EditTitle>
            <BoxLi>
              <BoxSpan>
                <PhotoInput
                  type='file'
                  id='productPhoto'
                  onChange={handleEditItem}
                />
              </BoxSpan>
            </BoxLi>
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
            <ButtonUtils>Update</ButtonUtils>
          </BoxBtn>
        </Box>
      </form>
    </PopupBox>
  );
};

export default EditItem;
