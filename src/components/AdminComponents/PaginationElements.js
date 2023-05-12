import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  /* width: 250px; */
`;

export const PagenationWrap = styled.div`
  display: flex;
  align-items: center;
  /* width: 240px;
  padding: 0 20px;
  display: flex;
  position: relative;
  overflow: hidden; */
`;

export const ArrowKey = styled.div`
  /* width: 50px; */
  /* height: 50px; */
  /* background-color: #fff7f7;
  border-radius: 50%; */
  /* display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '0px'};
  right: ${(props) => props.direction === 'right' && '0px'};
  margin: auto;
  /* padding: 10px; */
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PagenationIndex = styled.div`
  display: flex;
  align-items: center;
  /* transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -250}px);
  display: flex;

  @keyframes scroll {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  } */
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
