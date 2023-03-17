import styled  from 'styled-components';





export const DetailContainer = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 20px 100px;
`;


export const DetailWrapper = styled.div`
    display:flex ;
    justify-content: center;
    padding-top: 40px;
`;

export const DetailLeftInfo = styled.div`
    width: 450px;
    margin-right: 40px;
    position: relative;
`;

export const DetailRightInfo = styled.div`
    flex-basis: 450px;
    /* min-width: 0; */
`;

export const DetailRightInfoTop = styled.div`
    display: flex;
    flex-direction: column;
`;


export const DetailName = styled.div`
    margin-bottom: 24px;
    align-items: center;
    margin: 10px 0 20px;
    font-size: 16px;
`;
export const DetailProductName = styled.div`

`;

export const DetailTitle= styled.p`
    margin-bottom: 16px;
    font-size: 22px;
    padding-top: 12px;
`;
export const DetailPrice = styled.div`
    align-items: center;
`;
export const DetailCoupon = styled.div`
    padding: 14px 20px;
    margin-top: 12px;
`;

export const DetailRightInfoBottom = styled.div`
    display: flex;
    width: 100%;
    background: #fff;
    padding: 40px 0;
    position: relative;
    /* bottom: inherit; */
`;
export const ButtonLarge = styled.button`
  /* width: ${({ width }) => width}; */
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
  margin: 0 0 10px;

  /* &:hover {
    background: #fff;
    color: #0a0f18;
    box-shadow: 0px 0px 4px 1px #0a0f18;
  } */
`;