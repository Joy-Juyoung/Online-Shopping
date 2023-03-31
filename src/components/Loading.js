import React from 'react';
import styled from 'styled-components';

const LodingContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5000;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  overflow: hidden;
`;

const LodingWrap = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;

  div {
    width: calc(100% - 15px);
    height: calc(100% - 15px);
    border: 2px solid #fff;
    border-top: 2px solid crimson;
    border-radius: 50%;
    animation: rotate 10s linear infinite alternate-reverse;
  }
  @keyframes rotate {
    50% {
      transform: rotate(80deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LodingContainer>
      <LodingWrap>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LodingWrap>
    </LodingContainer>
  );
};

export default Loading;
