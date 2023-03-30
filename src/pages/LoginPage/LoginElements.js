import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

// export const InputPassword = styled.div`
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export const EyeIcon = styled.div`
//   color: #a3a9b3;
//   margin: 0 8px 10px -28px;
//   cursor: pointer;
// `;

export const ErrorMsg = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #a8003a;
  /* border-radius: 10px; */
  background: #fff6f6;
  color: #a8003a;
  font-weight: 600;
`;

export const VerificationMsg = styled.div`
  /* display: flex; */
  align-items: center;
  /* justify-content: center; */

  span {
    margin-left: 10px;
    color: grey;
  }
`;

export const LoginCheck = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginOptions = styled.fieldset`
  margin: 40px 0 20px;
  text-align: center;
  border: none;
  border-top: 1px solid #a3a9b3;
`;

export const LoginOptionsLegend = styled.legend`
  margin: 25px auto;
  padding: 0 15px;
`;

// Router Link to 로 바꾸기
export const RegisterLink = styled(Link)`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: none;
  text-decoration: underline;
  cursor: pointer;

  /* &:visited {
  color: #0a0f18;
} */
`;
