import React, { useEffect, useRef } from 'react'
import { 
    TestModalBlock,
        TestModalCloseBtn, 
        TestModalContainer, 
        TestModalContent, 
        TestModalSearch,
        TestModalTop,
        TestModalWrapper
         }
from './TestModalElements';
import SearchIcon from '@mui/icons-material/Search';



const TestModal = ({ onClose }) => {
    const ref = useRef();
    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          onClose();
        }
      };
      document.addEventListener("click", checkIfClickedOutside);
      return () => {
        document.removeEventListener("click", checkIfClickedOutside);
      };
    }, [onClose]);
  

// const TestModal = ({setOpen}) => {
//     const closeModal = () => {
//         setOpen(false);
//     };

  return (
    <TestModalContainer >
        <TestModalWrapper />
            <TestModalBlock > 
                <TestModalCloseBtn onClick={onClose}>
                    x
                </TestModalCloseBtn>
                    {/* <TestModalCloseBtn onClick={closeModal}>
                            x
                    </TestModalCloseBtn> */}
                    
                <TestModalSearch placeholder='Search'>
                {/* <SearchIcon color="disabled"/> */}
                </TestModalSearch>
                <TestModalContent>
                    Popular
                </TestModalContent>
                
                {/* <TestModalContent>
                <h1>Popular</h1>
                <p>shorts</p>
                <p>shoes</p>
                </TestModalContent> */}
            </TestModalBlock>
    </TestModalContainer>
  )
}

export default TestModal;