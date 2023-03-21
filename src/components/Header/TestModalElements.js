import styled from 'styled-components';


export const TestModalContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
export const TestModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
`;
export const TestModalBlock = styled.div`
    position: absolute;
    padding: 1.5rem;
    background-color: #fff;
    width: 100%;
    height: 400%;
    animation: modal-show 0.5s;
    @keyframes modal-show {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

`;

// export const TestModalTop= styled.div`
//     width: 100%;
// `;

export const TestModalCloseBtn = styled.button`
    cursor: pointer;
    background-color: white;
    color: black;
    border-style:none;
    width: 25px;
    font-size: 30px;
    position: absolute;
    right: 2rem;
    top: 1.5rem;
`;

export const TestModalSearch = styled.input`
    width: 30%;
    height: 10%;
    border: none;
    background-color: #d7e0f2;
    margin-left:35%;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const TestModalContent = styled.div`
    margin-top: 25px;
    margin-left:35%;
`;
