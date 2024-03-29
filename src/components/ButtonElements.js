import styled from 'styled-components';

export const ButtonLarge = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 6px;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0F18')};
  color: ${({ darkFont }) => (darkFont ? '#0A0F18' : '#fff')};
  /* font-weight: ${({ fontStrong }) => (fontStrong ? 'bold' : 'normal')}; */
  /* font-weight: ${({ fontStrong }) => (fontStrong ? 'bold' : 'normal')}; */
  padding: 0;
  font-size: 16px;
  outline: none;
  border: ${({ borderColor }) =>
    borderColor ? '1px solid #0a0f18' : '1px solid #a3a9b3'};
  text-align: center;
  cursor: pointer;
  margin: 0 0 10px;

  &:hover {
    font-weight: 600;
  }
`;

// styled.button -> styled(Link)로 변경하고 import {Link} from react-router-dom 추가
export const ButtonSmall = styled.button`
  /* width: ${({ width }) => width}; */
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid #a3a9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;

export const ButtonHover = styled.button`
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

  &:hover {
    background: #fff;
    color: #0a0f18;
    box-shadow: 0px 0px 4px 1px #0a0f18;
  }
`;

export const ButtonUtils = styled.button`
  cursor: pointer;
  /* margin-left: -50px; */
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  /* background: #f2f4f7; */
  background: ${({ selected }) => (selected ? '#0A0F18' : '#f2f4f7')};
  color: ${({ selected }) => (selected ? '#fff' : '#0A0F18')};

  &:hover {
    font-weight: 600;
  }
`;

export const LoadMoreBtn = styled.button`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid #a3a9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #0a0f18;
    color: #fff;
  }

  svg {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 5px;
  }

  &:disabled {
    background: #f7f7f7;
    color: gary !important;
    cursor: not-allowed;

    &:hover {
      background: #f7f7f7;
      color: gary !important;
    }
  }
`;

export const LoadMoreBtnDisabled = styled.button`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  /* background: #fff; */
  /* color: #0a0f18; */
  padding: 0 16px;
  font-size: 16px;
  /* outline: none; */
  /* border: 1px solid #a3a9b3; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* cursor: not-allowed; */
  text-decoration: none;

  background: #f7f7f7;
  color: gary;

  /* &:hover {
    background: #0a0f18;
    color: #fff;
  } */

  svg {
    display: flex;
    align-items: center;
    font-size: 18px;
    margin-left: 5px;
  }

  /* &:disabled {
    background: #f7f7f7;
    color: gary;
    cursor: not-allowed;

    &:hover {
      background: #f7f7f7;
      color: gary !important;
    }
  } */
`;
