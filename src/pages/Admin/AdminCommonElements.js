import styled from 'styled-components';

export const AdminGlobal = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0px auto;
  display: flex;
  align-items: center;
  background: #cbccd3;
  /* background: #ffe9c9; */
`;

export const AdminBg = styled.div`
  flex: 1;
  max-width: 1280px;
  min-height: 80vh;
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  background: #f5f5f5;
  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.3);
`;

export const AdminSideContainer = styled.div`
  margin: 0 auto;
`;

export const AdminContainer = styled.div`
  flex: 1;
  margin: 0px auto;
  padding: 25px 40px;
  color: #0a0f18;
`;

export const AdContainer = styled.div`
  margin-top: -46px;

  h1 {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #cbccd3;
  }
`;
