import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  width: 30px;
  height: 30px;
  border: 5px solid;
  border-color: rgba(0, 0, 0, 0.5) transparent;

  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const PartLoader = () => {
  return <Loader></Loader>;
};

export default PartLoader;
