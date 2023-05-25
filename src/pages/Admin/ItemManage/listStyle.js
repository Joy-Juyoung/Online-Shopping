import styled from 'styled-components';

export const AdIconDelete = styled.div`
  /* margin-right: 10px; */
  cursor: pointer;
`;

// ---modal
export const PopupBox = styled.div`
  margin: 10px auto;
  padding: 0 10px;
  /* border-radius: 5px; */

  /* background: #fff;
  width: 400px !important; */
`;

export const Box = styled.div`
  margin: 0 auto;
`;

export const BoxH2 = styled.h2`
  margin-bottom: 20px 0;
  text-align: center;
`;

export const BoxUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

export const BoxUsers = styled.div`
  margin: 10px 0 20px;
`;

export const BoxH3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 15px;
  }

  p {
    font-size: 11px;
  }
`;

export const BoxSuccess = styled.div`
  color: #009605;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
  margin-top: -10px;
`;

export const BoxNotice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 14px;
  }

  p {
    font-size: 11px;
  }
`;

export const BoxUserList = styled.div`
  height: 200px;
  overflow-y: scroll;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  padding: 5px 0;
`;

export const BoxListLine = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  font-size: 14px;

  p {
    margin: 0 10px;
  }

  &:hover {
    background: lightgray;
  }
`;

export const BoxListSelecteLine = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;

  p {
    margin: 0 10px;
  }
`;

export const BoxLi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
`;

export const BoxSpan = styled.span`
  margin: 3px 0;
`;

export const BoxBtn = styled.div`
  display: flex;
  align-items: center;

  &.prev {
    justify-content: flex-end;
  }

  &.next {
    justify-content: space-between;
  }
`;

export const AddNextBtn = styled.div`
  width: auto;
  min-width: 130px;
  height: 44px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  padding: 0 16px;
  font-size: 16px;
  outline: none;
  border: 1px solid #a3a9b3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: 600;
  }
`;

// ---Next

export const BoxCategoryH3 = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxCategory = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
  border-bottom: 1px solid lightgray;

  height: 263px;
  overflow-y: scroll;
`;

export const BoxCatList = styled.div`
  padding: 5px;

  display: flex;
  align-items: center;
  text-align: center;

  border-top: 1px solid lightgray;
`;

export const BoxCatParents = styled.div`
  flex: 1;
  font-size: 13px;
  text-align: left;
`;

export const BoxCatChild = styled.div`
  padding-right: 5px;
  flex: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  font-size: 13px;

  p {
    padding: 3px 0;
    margin: 3px 0;
    border: 1px solid #000;
    border-radius: 10px;

    &:hover {
      background: #000;
      color: #fff;
      border: 1px solid #000;
      border-radius: 10px;
      cursor: pointer;
    }
  }
`;
