import styled from 'styled-components';

export const AccountForm = styled.form`
  margin-bottom: 50px;
`;

export const AccountInput = styled.div`
  p {
    margin: 5px 0;

    &.empty {
      font-weight: 200;
    }
  }
`;

export const BasicInfo = styled.div``;

export const InfoEach = styled.div`
  margin-bottom: 15px;
`;

export const AccountInputTitle = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-right: 15px;
`;

export const LeftInfo = styled.div``;

export const ShippingInfo = styled.div`
  margin: 40px 0 20px;
  display: flex;
  align-items: center;

  h2 {
    font-weight: 700;
    margin-right: 15px;
  }
`;

export const AccountInputLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;

export const InputEdit = styled.div`
  margin-bottom: 15px;
`;

export const DelBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 40px 0;
  border-bottom: 0.5px solid gray;

  button {
    cursor: pointer;
    border: none;
    padding: 10px;
    background: none;
    /* border-bottom: 0.5px solid gray; */

    &:hover {
      font-weight: 600;
    }
  }
`;
