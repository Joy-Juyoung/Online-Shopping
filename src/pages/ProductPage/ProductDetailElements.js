import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import Rating from '@mui/material/Rating';




export const DetailContainer = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    padding: 0 20px;
`;


export const DetailWrapperOne = styled.section`
    display:flex ;
    justify-content: center;
    padding-top: 40px;
`;

export const DetailLeftInfo = styled.div`
    width: 450px;
    margin-right: 40px;
    position: relative;

    img {
        width: 450px;
    }
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
    font-size: 22px;
    font-weight: bolder;
`;
export const DetailProductName = styled.div`

`;

export const DetailTitle= styled.p`
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
    padding-top: 12px;
`;
export const DetailPrice = styled.div`
    align-items: center;
    font-size: 25px;
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

export const LikeBtnWrapper = styled.div`
    width: 62px;
    margin-right: 8px;
    justify-content: flex-end;
    position: relative;
    display: flex;
    border-radius: 6px;
    border: 1px solid #c1c4c9;
    align-items: center;
`;

export const LikeBtn = styled.button`

    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: none;
    border: none;
`;
export const ButtonLargeWrap = styled.div`

`;

export const ButtonLarges = styled.button`
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
  /* margin: 0 0 10px; */

  /* &:hover {
    background: #fff;
    color: #0a0f18;
    box-shadow: 0px 0px 4px 1px #0a0f18;
  } */
`;

export const DetailWrapperTwo = styled.section`
    margin-top: 77px;
    border: 0px;
    scroll-margin-top: 300px;
    position: relative;
    background-color: rgb(255, 255, 255);
`;

export const DetailInfoWrap = styled.div`
    padding: 0px;
    margin: 0px;
`;

export const DetailInfoList = styled.ul`
    padding: 0px;
    overflow: hidden;
    list-style: none;
`;
export const InfoListDetail = styled.li`
    display: inline;
`;

export const InfoListDetailTwo = styled.li`
    display: inline;
    margin-left: 40px;
    border: 0px;
`;

export const ListDetailBtn = styled.button`
    flex-grow: 0;
    justify-content: center;
    height: 60px;
    transform: rotate(0deg);
    display: inline-flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    appearance: none;
    border: 0px;
    background: none;

    span {
            font-weight: 600;
            font-size: 16px;
            color: rgb(10, 15, 24);
            line-height: 1.5;
            text-align: left;
        }
`;

export const DetailDescription = styled.div`
    float: left;
    width: 100%;
    padding-bottom: 50px;
    border-top: 2px solid rgb(231, 233, 236);
    display: block;
`;

export const DescriptionList = styled.div`
    padding: 50px 0px 0px;
    max-height: none;
    position: relative;
    overflow: hidden;
`;

export const DescriptionListDetail = styled.div`
    h2{
        /* margin-left: 10px; */
        margin-bottom: 20px
    }
`;
export const ReviewListDetail = styled.div`
    display: block;
    margin-bottom: 30px;        
    margin-left: 20px;

    span {
        font-size: 14px;
        color: #565959
    }
`;

export const ReviewListOne = styled.div`
    margin-bottom: 4px;
`;

export const ListOneLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    display: table;
`;

export const ListOneAvatar = styled.div`
    padding-right: 9px;
    width: 43px;
    display: table-cell;
`;

export const ListOneName = styled.div`
    display: table-cell;
    vertical-align: middle;

    span {
        font-size: 13px;
        position: relative;
    }
`;

export const ReviewListTwo = styled.div`
    display: flex;
    span {

        color: #000;
        margin-right: 20px;

    }
`;
export const ReviewListThree = styled.div`
    margin-bottom: 8px;

    span {
        color: #000;
        font-size: 14px;
    }
`;
export const ListDetailBody = styled.dl`
    padding-bottom: 25px;
    display: block;
`;

export const DetailBodyOne = styled.dt`
    position: relative;
    padding-left: 20px;
    color: rgb(10, 15, 24);
    font-size: 16px;
    /* display: inline; */
    vertical-align: top;

    img {
        width: 100%;
    }

    p {
        margin-top: 10px;
        margin-left: 12px;
    }
`;

export const DetailBodyTwo = styled.dt`
    position: relative;
    padding-left: 20px;
    color: rgb(10, 15, 24);
    font-size: 16px;
    /* display: inline; */
    vertical-align: top;
    margin-top: 50px;
    
    p{
        margin-top: 10px;
        margin-left: 12px;
    }
`;

