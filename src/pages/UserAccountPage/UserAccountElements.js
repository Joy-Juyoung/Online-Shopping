import styled from 'styled-components';

export const AccountContainer = styled.div`
  h1 {
    margin: 40px 0 20px;
  }
`;

export const AccountWrap = styled.div`
  display: flex;
`;

export const SideSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const SideMenu = styled.ul`
  width: 80%;
  /* border: 1px solid; */
  /* border-radius: 10px; */
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

export const SideMenuList = styled.li`
  list-style: none;
  padding: 10px;
  border-bottom: 1px solid;
  /* display: flex;
  align-items: center; */
  cursor: pointer;
  /* width: 100%; */

  span {
    padding: 5px 50px 5px 5px;

    &:hover {
      background: lightblue;
      border-radius: 10px;
    }
  }
`;

export const SideMenuSub = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MenuSub = styled.ul`
  margin-top: 10px;
  font-size: 15px;
`;

export const MenuSubList = styled.li`
  list-style: none;
  margin-bottom: 8px;
`;

export const MainSection = styled.div`
  flex: 3;

  h2 {
    margin-bottom: 40px;
  }
`;

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

export const MainInfoTop = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const MainInfoBottom = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
`;

export const DelBtn = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 40px 0;
`;

export const MainLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* input {
    margin: 10px auto;
    border: 1px solid;
  } */
`;

export const MainRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;

  label {
    display: flex;
    flex-direction: column;
  }

  Input {
    width: 80%;
  }
`;

export const MainBtn = styled.div`
  margin: 40px 0;
  display: flex;
  justify-content: center;
`;
