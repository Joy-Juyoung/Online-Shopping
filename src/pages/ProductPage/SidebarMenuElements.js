import styled from 'styled-components';

export const SidebarMenuContainer = styled.div`

`;
export const SidebarMenuWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 375px;
    height: auto;
    background: #fff;
    z-index: 100;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
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
    top: 9px;
    right: 15px;
    width: 30px;
    height: 30px;
    border: 0px;
    background: none;
    cursor: pointer;

`;

export const SidebarMenuMid = styled.div`
    min-height: 48px;
    margin: 0 20px;
    
    select {
                width: 95%;
                height: 48px;
                align-items: center;
                justify-content: center;
                border-radius: 6px;
                font-size: 16px;
                margin-left: 10px;
                border: 1px solid #c1c4c9;
                /* color: #a3a9b3; */
            }
            

`;
export const SidebarMenuMidWrap = styled.div`
    margin-top: 16px;
    padding-bottom: 16px;
`;

// export const OptionsSelect = styled.select`
//     width: 100%;
//     height: 48px;
//     align-items: center;
//     border-radius:10px;
  

    
// `;

export const SidebarMenuBottom = styled.div`
    padding: 16px 20px 20px;
    border-top: 1px solid #e7e9ec;

    p{
        margin-left: 10px;
        margin-bottom: 10px;
        font-weight: bold;
    }
`;

export const MenuTotalSummary = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
`;


export const ButtonLarges = styled.button`
    width: 100%;
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