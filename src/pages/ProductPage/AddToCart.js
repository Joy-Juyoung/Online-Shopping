import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import {
  ButtonLarges,
  MenuTotalSummary,
  OptionsSelect,
  SidebarOutsideClose,
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
import { Bounce, ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToCart = ({ onClose, onSuccess, setIsAdded, setIsSuccess }) => {
  const [selectOptions, setSelectOptions] = useState([]);
  const [options, setOptions] = useState(null);
  const ref = useRef();
  const { id } = useParams();
  // const [isAdded, setIsAdded] = useState(false);

  // const [success, setSuccess] = useState(false)

  const ErrorNotify = () => toast.warn('Please make sure to select an option.');

  const SuccessNotify = ({ text }) => (
    <div>
      <p className='text'>{text}</p>
      {/* <button className="button1" onClick={() => toast.dismiss()}>Ok!</button> */}
    </div>
  );
  const showCustomToast = () => {
    toast.success(<SuccessNotify text='Success' />);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [onClose]);

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

  const OptionHandleChange = (e) => {
    setOptions(e.target.value);
    console.log('options', options);
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    const addToCart = await axios.post(
      '/carts/',
      {
        product_id: id,
        product_option: options,
        number_of_product: 1,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('test', addToCart.data);
    // setIsSuccess(true);
    onClose();
    onSuccess();
  };

  return (
    <SidebarMenuContainer>
      <SidebarMenuWrapper>
        <form onSubmit={handleAddToCart}>
          <SidebarMenuKinds>
            <SidebarMenuTop>
              <SidebarMenuClose onClick={onClose}>
                <CloseIcon fontSize='medium' />
              </SidebarMenuClose>
            </SidebarMenuTop>
            <SidebarMenuMid>
              {selectOptions?.productOptions?.length === 0 ? (
                <SidebarSelect>
                  <option value='free'>Free</option>
                </SidebarSelect>
              ) : (
                <SidebarSelect onChange={OptionHandleChange}>
                  <option value='none'>Select color or size</option>
                  {selectOptions?.productOptions?.map((o) => (
                    <option key={o.pk} value={o.pk}>
                      {o.description}
                    </option>
                  ))}
                </SidebarSelect>
              )}

              <SidebarMenuMidWrap />
              {/* <select value={selectOptions} onChange={OptionHandleChange}>{optionLists}</select>  */}
            </SidebarMenuMid>
            <SidebarMenuBottom>
              <MenuTotalSummary>
                <p>Total {selectOptions?.length} </p>
                <p>${selectOptions?.price}</p>
              </MenuTotalSummary>
              {options === null ? (
                <>
                  <ButtonLarges onClick={ErrorNotify}>ADD TO BAG</ButtonLarges>
                  <ToastContainer
                    transition={Zoom}
                    autoClose={1000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    limit={1}
                    theme='dark' // light, dark, colored
                    pauseOnHover={true}
                    // pauseOnFocusLoss={true}
                    // icon={} // true or false
                    position='top-center'
                  />
                </>
              ) : (
                <>
                  <ButtonLarges>ADD TO BAG</ButtonLarges>
                </>
              )}
            </SidebarMenuBottom>
          </SidebarMenuKinds>
        </form>
      </SidebarMenuWrapper>
      <SidebarOutsideClose onClick={onClose} />
    </SidebarMenuContainer>
  );
};

export default AddToCart;
