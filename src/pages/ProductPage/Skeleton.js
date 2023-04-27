import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    from{
        left: -200px;
    }
    to{
    left: 100%;
}
`
const StyleSkeleton = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    box-shadow: 1px 1px 20px; rgba(0,0,0,0.2);
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    ::before {
        content: "";
        display: block;
        position: absolute;
        left: -200px;
        top:0;
        height: 500px;
        width: 450px;
        background: linear-gradient(to right, gray 0%, gray 5%, gray 100% );
        animation: ${loading} 1000ms ease-in-out infinite;
    }
`;

const Skeleton = ({width, height,number}) => {
    
  return number ? (
    [...Array(number)].map((skeleton,idx) => {
        return <StyleSkeleton width={width} height={height} key={idx}/>
    })
  ):(
    <StyleSkeleton width={width} height={height}/>
  )
//   (
//     <>
//     <StyleSkeleton width={width} height={height}/>
//     </>
//   )
}

export default Skeleton;