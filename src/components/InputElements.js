import styled from 'styled-components';

export const Input = styled.input`
  /* width: ${({ width }) => width}; */
  width: 100%;
  height: 50px;
  border-radius: 6px;
  background: #fff;
  color: #0a0f18;
  font-size: 16px;
  outline: none;
  cursor: text;
  /* border: 1px solid #a3a9b3; */
  border: ${({ borderNone }) => (borderNone ? 'none' : '1px solid #a3a9b3')};
  border-bottom: ${({ borderBottom }) =>
    borderBottom ? '1px solid #a3a9b3' : ''};
  margin: 0 0 10px;
  padding: 0 8px;

  &::placeholder {
    color: #a3a9b3;
  }

  &:focus {
    border: 0.1px solid #0a0f18;
  }
`;

// 입력되면 전체삭제 기능 X 아이콘 생성
