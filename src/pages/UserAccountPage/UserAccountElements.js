import styled from 'styled-components';

export const AccountForm = styled.form`
  /* margin: 0 auto;
  width: 60%; */
  margin-bottom: 50px;
`;

export const AccountInput = styled.div`
  /* margin: 0 0 20px; */
`;

export const RightInfo = styled.div`
  /* flex: 1; */
`;

export const LeftInfo = styled.div`
  /* flex: 1; */
`;

export const MainAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const AccountInputLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;

export const InputEdit = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  font-size: 13px;
  font-weight: 300;

  button {
    cursor: pointer;

    align-items: center;
    margin-left: -50px;

    &:hover {
      font-weight: 600;
    }
  }
`;

// export const DisplayInput = styled.div``;

// export const EditBtn = styled.div`
//   background: lightgray;
//   cursor: pointer;
// `;

export const ShippingInfo = styled.div`
  margin: 40px 0;
  padding: 10px;
  /* border-radius: 5px; */
  /* background: gray; */
  /* color: #fff; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`;

export const DelBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 40px 0;

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    padding: 10px;
    background: none;

    &:hover {
      font-weight: 600;
    }
  }
`;
