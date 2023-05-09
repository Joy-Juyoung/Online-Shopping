import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Image1 from '../../asset/Hoodie017.jpg';
import Image2 from '../../asset/jeans01.jpg';
import Image3 from '../../asset/short-top03.jpg';
import Image4 from '../../asset/Hoodie022.jpg';
import axios from '../../api/axios';

const Container = styled.div`
  /* width: 100%; */
  /* height: 50vh; */
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  transition: all 1s ease;
  /* transform: translateX(${(props) => props.slideIndex * -100}vw); */
  transform: translateX(${(props) => props.slideIndex * -315}px);

  @media screen and (max-width: 1024px) {
    transform: translateX(${(props) => props.slideIndex * -250}px);
  }

  @keyframes scroll {
    0% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;

const Slide = styled.div`
  width: 315px;
  height: 400px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  background-color: #${(props) => props.bg};
  padding: 0 10px;

  p {
    width: 85%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 300px;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 280px;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
`;

const Slider = ({ items }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(items > 0 && slideIndex - 1);
    } else {
      // setSlideIndex(slideIndex < items.length / 2 && slideIndex + 1);
      setSlideIndex(slideIndex < 4 && slideIndex + 1);
    }
  };

  return (
    <Container>
      <Arrow direction='left' onClick={() => handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {items?.slice(0, 8).map((item) => (
          <Slide key={item?.pk}>
            <Image src={item?.photos[0].picture} />
            <div style={{ paddingTop: '20px' }}>
              <p style={{ fontWeight: '600' }}>{item?.name.toUpperCase()}</p>
              <p>{item?.detail}</p>
              <p style={{ marginTop: '10px' }}>${item?.price}</p>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction='right' onClick={() => handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
