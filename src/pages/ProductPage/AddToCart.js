import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ButtonLarges,
  MenuTotalSummary,
  OptionsSelect,
  SidebarMenuBottom,
  SidebarMenuClose,
  SidebarMenuContainer,
  SidebarMenuKinds,
  SidebarMenuMid,
  SidebarMenuMidWrap,
  SidebarMenuTop,
  SidebarMenuWrapper,
  SidebarSelect,
} from './AddToCartElements';
import CloseIcon from '@mui/icons-material/Close';

const AddToCart = ({ onClose }) => {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
      // if (ref.current.contains(e.target)) {
      //   onClose();
      // }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [onClose]);

  const [selectOptions, setSelectOptions] = useState();
  // const optionLists = selectOptions.map((lists) => {
  //     return <option value={lists}>{lists}</option>
  // })
  const OptionHandleChange = (e) => {
    setSelectOptions(e.target.value);
  };
  const { id } = useParams();
  const getSelectOptions = async () => {
    const sideOption = await axios.get(`/products/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    console.log('sideOption', sideOption.data);
    setSelectOptions(sideOption.data);
  };
  useEffect(() => {
    getSelectOptions();
  }, [id]);

  console.log('id', id);

  return (
    <SidebarMenuContainer>
      <SidebarMenuWrapper>
        <SidebarMenuKinds>
          <SidebarMenuTop>
            <SidebarMenuClose onClick={onClose}>
              <CloseIcon fontSize='medium' />
            </SidebarMenuClose>
          </SidebarMenuTop>
          <SidebarMenuMid>
            <SidebarSelect onChange={OptionHandleChange}>
              <option value='none'>Select color or size</option>
              {selectOptions?.productOptions?.map((option) => (
                <option key={option.pk} value={option.name}>
                  {option.description}
                </option>
              ))}
            </SidebarSelect>
            <SidebarMenuMidWrap />
            {/* <select value={selectOptions} onChange={OptionHandleChange}>{optionLists}</select>  */}
          </SidebarMenuMid>
          <SidebarMenuBottom>
            <MenuTotalSummary>
              <p>Total </p>
              <p>$0</p>
            </MenuTotalSummary>
            <ButtonLarges>ADD TO BAG</ButtonLarges>
          </SidebarMenuBottom>
        </SidebarMenuKinds>
      </SidebarMenuWrapper>
    </SidebarMenuContainer>
  );
};

export default AddToCart;
