import styled from 'styled-components';

export const PesnalContainer = styled.div`
  /* max-width: 1280px; */
  margin: 0 auto;
  font-size: 14px;
  color: #0a0f18;

  @media screen and (min-width: 576px) {
    max-width: 375px;
  }
`;

export const PesnalWrapper = styled.div`
  padding: 20px 20px 0;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin: 40px auto;
  }
`;

export const InputPassword = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EyeIcon = styled.div`
  color: #a3a9b3;
  margin: 0 8px 10px -28px;
  cursor: pointer;
`;
