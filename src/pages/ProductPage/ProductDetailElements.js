import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import { right } from '@popperjs/core';

export const DetailContainer = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const DetailWrapperOne = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  height: 600px;
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
export const DetailProductName = styled.div``;

export const DetailTitle = styled.p`
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
  margin-top: 16px;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  background-color: rgb(245, 246, 247);
  margin-right: auto;
  margin-left: auto;
  position: relative;
  p {
    font-size: 20px;
    color: #000;
    font-weight: bold;
    text-shadow: 2px 2px 2px #333;
  }
   button {
    margin-left: 10px;
    width: 90px;
    border: 2px solid rgb(255, 174, 0);
    background: rgb(255, 255, 247);
    border-radius: 5px;
    cursor: pointer;

    :hover {
      border: 2px solid black;
      background: rgb(255, 174, 0);
      color: #000;
    }
   }
`;

export const DetailStock = styled.div`
  margin: 20px 0;
  font-size: 14px;
`;

export const DetailRightInfoBottom = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  padding: 10px 0 0 0;
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: none;
  border: none;
`;
export const ButtonLargeWrap = styled.div``;

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
  height: 600px;

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
  h2 {
    /* margin-left: 10px; */
    margin-bottom: 20px;
  }
`;
export const ReviewListDetail = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const ReviewListOne = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const ListOneLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  display: table;
`;

export const ReviewDeleteBtn = styled.button`
  border: 0px;
  background: none;
  cursor: pointer;
  position: absolute;
  left: 360px;
`;

export const ReviewEditBtn = styled(Link)`
  border: 0px;
  background: none;
  cursor: pointer;
  position: absolute;
  left: 330px;
  text-decoration: none;
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
    font-size: 16px;
    position: relative;
    color: #0f1111;
  }
`;

export const ReviewListTwo = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: #000;

  span{
    margin: 0;
  }
`;
export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ffb41e',
  },
  '& .MuiRating-iconHover': {
    color: '#ffb41e',
  },
  // '& .MuiRating-icon': {

  // },
});

export const RatingWrap = styled.div`
  margin-left: 15px;

`;

export const ReviewListThree = styled.div`
  margin-bottom: 8px;
  input {
    border: 1px solid;
    width: 265px;
    height: 50px;
  }
  span {
    color: #000;
    font-size: 14px;
    margin: 0;
  }
`;

export const ReviewListFour = styled.div`
  color: #565959;
  font-size: 14px;

  span{
    margin: 0;
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

  p {
    margin-top: 10px;
    margin-left: 12px;
  }
`;
