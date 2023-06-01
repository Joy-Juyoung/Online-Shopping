import styled,{ keyframes } from 'styled-components'

export const Chart = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  position: relative;
  padding: 5px;
  margin-left: 10px;
`;


export const DountWrap = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;

  /* span {
    margin-top:20px
  } */
  
`;

export const DountInfo = styled.div`
  display: flex;
  p {
    margin-top:30px
  }
  /* span {
    margin-top:20px
  } */
  
`;

export const AniSvg = styled.svg`
  position: relative;

`;

export const circleFill = keyframes`
    0%{
        stroke-dasharray:0 ${2 * Math.PI * 90};
    }
`;

export const AnimatedCircle = styled.circle`
  animation: ${circleFill} 2s ease;
`;

export const Percent = styled.span`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: ${(props) => props.color};
`;


