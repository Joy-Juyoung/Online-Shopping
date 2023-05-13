import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
`;

export const PagenationWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const ArrowKey = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #bbb;

  &:hover {
    color: #23282c;
  }
`;

export const PagenationIndex = styled.div`
  display: flex;
  align-items: center;
`;

export const PageBtn = styled.div`
  width: 30px;
  height: 30px;
  font-weight: 600;
  font-size: 14px;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: transparent;
  color: #bbb;
  border-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;

  &.active {
    font-weight: 900;
    border-color: #101010;
    background: #23282c;
    color: #fff;
  }
`;
