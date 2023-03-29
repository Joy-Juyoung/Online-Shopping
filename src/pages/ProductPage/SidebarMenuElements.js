import styled from 'styled-components';

export const SidebarMenuContainer = styled.div`

`;
export const SidebarMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 375px;
    height: 100vh;
    background: #fff;
    z-index: 100;
`;
export const SidebarMenuKinds = styled.div`
    /* position: fixed;
    width: 100%;
    height: 100%; */
`;

export const SidebarMenuTop = styled.div`
    display: block;
    position: relative;
    height: 56px;
    /* padding: 0px;
    margin: 0px; */
`;

export const SidebarMenuClose = styled.button`
    position: absolute;
    width: 56px;
    height: 56px;       
    appearance: none;
    border: 0px;
    background: none;
    cursor: pointer;
    
    p {
        font-size: 40px;
    }
`;

export const SidebarMenuMid = styled.div`
    padding-top: 15px;
    padding-bottom: 30px;

    select {
                width: 95%;
                height: 48px;
                align-items: center;
                border-radius:10px;
                margin-left: 10px;
            }

`;


// export const OptionsSelect = styled.select`
//     width: 100%;
//     height: 48px;
//     align-items: center;
//     border-radius:10px;
  

    
// `;

export const SidebarMenuBottom = styled.div`
    padding-top: 30px;
    border-top: 1px solid lightgray;

    p{
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

export const ButtonLarges = styled.button`
    width: 95%;
    height: 48px;
    border-radius: 6px;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0F18')};
    color: ${({ darkFont }) => (darkFont ? '#0A0F18' : '#fff')};
    font-weight: ${({ fontStrong }) => (fontStrong ? 'bold' : 'normal')};
    padding: 0;
    font-size: 16px;
    outline: none;
    border: ${({ borderColor }) =>
    borderColor ? '1px solid #0a0f18' : '1px solid #a3a9b3'};
    text-align: center;
    cursor: pointer;
    margin-left: 10px;
  `;