import styled from 'styled-components';

export const ErrorMsg = styled.div`
  text-align: center;
  margin: 20px 0 -20px;
  padding: 10px 0;
  border: 1px solid #ffe9ad;
  background: #ffe9ad;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterForm = styled.form`
  /* margin: 0 0 50px; */
  /* height: 50vh; */
`;

export const RegisterInput = styled.div`
  margin: 0 0 20px;
`;

export const RegisterInputLabel = styled.label``;

export const VerificationMsg = styled.div`
  /* display: flex; */
  align-items: center;
  /* justify-content: center; */

  span {
    margin-left: 10px;
    color: grey;
  }
`;

export const GobackLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */

  span {
    margin-right: 10px;
  }
`;
export const RegisterSuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  margin: 50px auto;

  div {
    text-align: center;
    width: 100%;
  }

  h1 {
    font-size: 25px;
    margin: 20px 0;
  }
  p {
    text-align: center;
    margin: 20px 0 30px;
    padding: 15px;
    border: 1px solid #009605;
    background: #dff0d7;
    color: #009605;
    font-weight: 600;
  }
`;
