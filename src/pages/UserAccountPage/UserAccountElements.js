import styled from 'styled-components';

export const AccountForm = styled.form`
  /* margin-bottom: 50px; */
  /* display: flex;
  justify-content: center; */
  margin: 40px auto;
`;

export const AccountInput = styled.div`
  /* padding: 0 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  p {
    margin: 5px 0;

    &.empty {
      font-weight: 200;
    }
  }
`;

export const BasicInfo = styled.div`
  margin: 0 20px;
  flex: 1;
`;

export const MainAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  cursor: pointer;
`;

export const BasicInfoEach = styled.div`
  /* margin-bottom: 15px; */
  /* padding: 10px 0; */
  display: flex;
  align-items: center;
`;

export const InfoEach = styled.div`
  /* margin-bottom: 15px; */
  padding: 10px 0;
`;

export const AccountInputTitle = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-right: 15px;
`;

export const LeftInfo = styled.div`
  margin: 0 20px;
  flex: 1;
`;

export const ShippingInfo = styled.div`
  /* margin: 40px 0 20px; */
  /* margin: 0 20px; */
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

// -----

export const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* justify-content: space-between; */
  width: 50%;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid lightgray;

  h2 {
    /* font-weight: 700; */
    margin-right: 15px;
  }
`;

export const ActivityInfoWrap = styled.div`
  /* margin: 40px 0 20px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    /* border: 1px; */
  }
`;
