import styled from 'styled-components';

export const MainAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const AccountForm = styled.form``;

export const AccountInput = styled.div`
  margin: 0 0 20px;
`;

export const AccountInputLabel = styled.label`
  font-weight: 600;
  font-size: 15px;
`;

export const InputEdit = styled.div`
  display: flex;
  align-items: center;

  button {
    cursor: pointer;
    margin-left: -50px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;

    &:hover {
      font-weight: 600;
    }
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

    &:hover {
      font-weight: 600;
    }
  }
`;
