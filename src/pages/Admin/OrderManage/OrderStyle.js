import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin-bottom: 5em;
  font-size: 13px;
  text-align: center;

  tbody:nth-child(odd) {
    background-color: #fff;
  }
  tbody:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 10px;

  a {
    text-decoration: none;
    color: #0a0f18;
    padding: 0;

    svg {
      margin-left: 2px;
    }

    &:visited {
      color: #0a0f18;
    }

    &:hover {
      color: blue;
    }
  }
`;

export const ReviewBtn = styled.button`
  color: ${({ active }) => (active ? '#0a0f18' : '')};
  background: ${({ active }) => (active ? '#fff' : '')};
  border: ${({ active }) => (active ? 'none' : '')};
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  /* display: flex;
align-items: center;
justify-content: center; */
  /* font-size: 13px; */

  &:hover {
    background: ${({ active }) => (active ? '#0a0f18' : '')};
    color: ${({ active }) => (active ? '#fff' : '')};
  }
`;

export const DeliveredToggle = styled.div`
  display: flex;
  align-items: center;
`;

export const DeliveredCheck = styled.div``;

export const DeliveredInput = styled.input`
  /* &:checked {
    &.switchSlider {
      transform: translateX(32px);
    }
  } */
  display: none;
`;

export const DeliveredLabel = styled.label`
  width: 62px;
  height: 26px;
  background: #c24d4d;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const DeliveredSlider = styled.div`
  width: 25px;
  height: 22px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  /* left: 2px; */
  right: 2px;

  transition: all 0.2s ease;
`;
