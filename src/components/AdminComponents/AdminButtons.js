import styled from 'styled-components';

export const AdButtonView = styled.button`
  /* width: 100%; */
  height: 48px;
  border-radius: 6px;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0F18')};
  color: ${({ darkFont }) => (darkFont ? '#0A0F18' : '#fff')};
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

export const AdButtonUtils = styled.button`
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  background: ${({ selected }) => (selected ? '#0A0F18' : '#f2f4f7')};
  color: ${({ selected }) => (selected ? '#fff' : '#0A0F18')};

  &:hover {
    font-weight: 900;
  }
`;

export const AdButtonCancel = styled.button`
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  background: #fffff7;
  color: #e8583d;
  border: 1px solid #e8583d;

  &:hover {
    /* font-weight: 600; */
    color: #fffff7;
    background: #e8583d;
  }
`;

export const AdButtonAccept = styled.button`
  cursor: pointer;
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;

  background: #fffff7;
  color: #03ba5b;
  border: 1px solid #03ba5b;

  &:hover {
    /* font-weight: 600; */
    color: #fffff7;
    background: #03ba5b;
  }
`;
