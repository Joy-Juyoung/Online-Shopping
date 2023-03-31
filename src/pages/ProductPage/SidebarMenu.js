import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { 
            ButtonLarges, 
            OptionsSelect, 
            SidebarMenuBottom, 
            SidebarMenuClose, 
            SidebarMenuContainer, 
            SidebarMenuKinds, 
            SidebarMenuMid, 
            SidebarMenuTop, 
            SidebarMenuWrapper 
        } from './SidebarMenuElements'
import CloseIcon from '@mui/icons-material/Close';
        

const SidebarMenu = ({ onClose }) => {
    const ref = useRef();
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        // if (ref.current && !ref.current.contains(e.target)) {
        //   onClose();
        // }
        if (ref.current.contains(e.target)) {
          onClose();
        }
      };
      document.addEventListener("click", checkIfClickedOutside);
      return () => {
        document.removeEventListener("click", checkIfClickedOutside);
      };
    }, [onClose]);

    const [selectOptions, setSelectOptions] = useState();
    const OptionHandleChange = (e) => {
        setSelectOptions(e.target.value)
    }
    // const options = [
    //     { label: 'Select Color or Size', value: 'none'},
    //     { label: 'Large', value: 'L' },
    //     { label: 'Medium', value: 'M' },
    //     { label: 'Small', value: 'S' },
    //   ];
    //   const [selectOptions, setSelectOptions] = useState('');
      const { id } = useParams();
      const getSelectOptions = async () => {
          const sideOption = await axios.get(`/products/${id}`,{
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
            );            
          console.log("sideOption", sideOption.data)
          setSelectOptions(sideOption.data)
          }
      useEffect(() => {
          getSelectOptions();
      },[id])

      console.log("id", id);


  return (
    <SidebarMenuContainer >
        <SidebarMenuWrapper>
            <SidebarMenuKinds>
                <SidebarMenuTop ref={ref}>
                    <SidebarMenuClose onClick={onClose}>
                        <CloseIcon fontSize='medium'/>
                    </SidebarMenuClose>
                </SidebarMenuTop>
                <SidebarMenuMid>
                    <select onChange={OptionHandleChange}>    
                        <option value='none'>Select color or size</option>
                        {selectOptions?.productOptions?.map((option) => (
                            <option key={option.pk} value={option.name}>{option.description}</option>
                        ))}     
                    </select>
                    {/* <select 
                        value={selectOptions}
                        defaultValue={'none'}
                        onChange={OptionHandleChange}
                    >    
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}     
                    </select> */}
                </SidebarMenuMid>
                <SidebarMenuBottom>
                    <p>Total :</p>
                    <ButtonLarges>ADD TO BAG</ButtonLarges>
                </SidebarMenuBottom>
            </SidebarMenuKinds>
        </SidebarMenuWrapper>
    </SidebarMenuContainer>
  )
}

export default SidebarMenu