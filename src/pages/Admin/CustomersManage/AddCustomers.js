import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';


export const InputWrapper = styled.div`
    display: flex;
`;


const AddCustomers = ({onClose}) => {
  return (
    <div>      
        <div onClick={onClose}>
            <CloseIcon fontSize='large' />
        </div>
        <InputWrapper>  
        <input type="text" name="name" placeholder="UserName" />
        <input type="text" name="password" placeholder="Password" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="type" placeholder="UserType" />
        </InputWrapper>
    </div>
  )
}

export default AddCustomers;