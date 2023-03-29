import React, { useEffect, useRef, useState } from 'react'
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

function SidebarMenu({ onClose }) {
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

    const [selectOptions, setSelectOptions] = useState('');

  return (
    <SidebarMenuContainer >
        <SidebarMenuWrapper>
            <SidebarMenuKinds>
                <SidebarMenuTop ref={ref}>
                    <SidebarMenuClose onClick={onClose}>
                        <p>x</p>
                    </SidebarMenuClose>
                </SidebarMenuTop>
                <SidebarMenuMid>
                    <select 
                        // value={selectOptions}
                        onChange={ e => setSelectOptions(e.target.value)}
                        placeholder='Select Items Options'
                    >
                        <option value="L">Large</option>
                        <option value="M">Medium</option>
                        <option value="S">Small</option>
                    </select>
                </SidebarMenuMid>
                <SidebarMenuBottom>
                    <p>Total :{selectOptions}</p>
                    <ButtonLarges>ADD TO BAG</ButtonLarges>
                </SidebarMenuBottom>
            </SidebarMenuKinds>
        </SidebarMenuWrapper>
    </SidebarMenuContainer>
  )
}

export default SidebarMenu