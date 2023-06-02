import styled from 'styled-components';

export const EditPhoto = styled.div`
  margin: 10px 0;
  height: 230px;
  /* overflow-y: scroll; */
`;

export const EditTitle = styled.div`
  font-size: 15px;
  margin-top: 20px;
  background: #21201e;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const EditBox = styled.div`
  font-size: 13px;
  /* margin-bottom: 10px; */

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    /* z-index: 2; */
    background: #fff;
    transition: 0.2s ease-in-out;

    &:hover {
      transform: scale(2);
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
  }

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3px 5px;

    svg {
      cursor: pointer;
    }
  }
`;

export const PhotoInput = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  font-size: 16px;
  /* margin: 0 auto; */
  outline: none;
  cursor: text;
  /* border: 1px solid #a3a9b3; */
  border: 1px solid #a3a9b3;

  /* margin: 0 0 10px; */
  padding: 10px 0 0 10px;

  &::placeholder {
    color: #a3a9b3;
  }

  &:focus {
    border: 0.1px solid #0a0f18;
  }
`;
