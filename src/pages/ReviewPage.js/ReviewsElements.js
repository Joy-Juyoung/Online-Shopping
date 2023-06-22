import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ReviewItemInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;

  img {
    width: 80px;
    height: 80px;
  }
`;

export const ReviewListEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin: 100px 0; */
  height: 20vh;
  font-weight: 400;

  /* svg {
    margin: 20px 0;
    color: gray;
    font-size: 100px;
    opacity: 0.8;
  } */
`;

export const ReviewItemDetails = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  font-size: 14px;
`;

export const ReviewRate = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;
`;

export const ReviewText = styled.div`
  border-bottom: 0.5px solid lightgray;
  padding: 20px 0;

  textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
  }
`;

export const ReviewBtn = styled.div`
  /* border-bottom: 0.5px solid lightgray; */
  padding: 20px 0;
`;
