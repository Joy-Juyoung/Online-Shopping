import React from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import axios from '../../api/axios';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const Container = styled.div`
  /* height: 50vh; */
  display: flex;
  position: relative;
  overflow: hidden;

`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '50px'};
  margin: auto;
  cursor: pointer;
  /* opacity: 0.5; */
  z-index: 2;
`;

const Wrapper = styled.div`

`;

const Slide = styled.div`
    width: 450px;
    margin-right: 40px;
    position: relative;
    display: flex;
  flex-direction: column;

  img {
    align-items:center;
    width: 400px;
    height: 500px;
    justify-content: center;
    margin-left: 25px;
  }
`;


const DetailSlider = () => {
    const [slideIndex, setSlideIndex] = useState([]);
    const [slideInd, setSlideInd] = useState(0);
    const { id } = useParams();
    
    
    const nextSlide = () => {
        setSlideInd(slideInd === slideIndex.length - 1 ? 0 : slideInd + 1);
      };
    
      const prevSlide = () => {
        setSlideInd(slideInd === 0 ? slideIndex.length - 1 : slideInd - 1);
      };

    const getProduct = async () => {
        const { data } = await axios.get(`/products/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        });
      setSlideIndex(data);
    };

    console.log("slideIndex", slideIndex);

    useEffect(() => {
        getProduct();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [id]);
    
    return (
    <Container>
    <Arrow direction='left' onClick={prevSlide}>
      <ArrowLeftOutlined />
    </Arrow>
    <Wrapper slideIndex={slideInd}>
      {slideIndex?.photos?.map((item, index) => (
        <Slide key={index}>
            {index === slideInd &&(
                <img src={item.picture} />
            )}
        </Slide>
      ))}
    </Wrapper>
    <Arrow direction='right' onClick={nextSlide}>
      <ArrowRightOutlined />
    </Arrow>
  </Container>
  )
}

export default DetailSlider