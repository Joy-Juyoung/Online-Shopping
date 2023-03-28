import React, { useEffect, useRef } from 'react'
import { 
            ButtonLarges, 
            OptionsSelect, 
            SidebarMenuClose, 
            SidebarMenuContainer, 
            SidebarMenuKinds, 
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

  return (
    <SidebarMenuContainer ref={ref}>
        <SidebarMenuWrapper>
            <SidebarMenuKinds>
                <SidebarMenuTop>
                    <SidebarMenuClose onClick={onClose}>
                        <p>x</p>
                    </SidebarMenuClose>
                </SidebarMenuTop>
                <OptionsSelect/>
                <ButtonLarges>ADD TO BAG</ButtonLarges>
            </SidebarMenuKinds>
        </SidebarMenuWrapper>
    </SidebarMenuContainer>
  )
}

export default SidebarMenu