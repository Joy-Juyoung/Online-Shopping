import React from 'react'
import { useState,  useRef, useEffect  } from 'react';
import styled from 'styled-components';
import axios from '../../api/axios';
import { useParams } from 'react-router';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';



const ImageSlide = styled.div`
  position: relative;
  width: 500px;
  margin: auto;
  padding-bottom: 30px;
  `;


const SlideBox = styled.div`
    position: relative;
    width: 100%;
    margin: auto;
    overflow-x: hidden;
`;
const SlideList = styled.div`
      width: 2800px;
      overflow: hidden;
`;

const SlideContent = styled.div`
        display: table;
        float: left;
        width: 500px;
        height: 500px;
        picture {
          display: table-cell;
          vertical-align: middle;
          text-align: center;

          img {
            width: 100%;
            height: auto;
            
          }
        }
`;
    
const ButtonPrev = styled.button`
      position: absolute;
      top: 250px;
      border: none;
      padding-top: 5px;
      background:none;
      vertical-align: middle;
      
      svg {
        width: 40px;
        height: 40px;
      }

      /* &:hover {
        left: 0;
        transition: left 0.5s;
      } */

`;

const ButtonNext = styled.button`
      position: absolute;
      top: 250px;
      padding-top: 5px;
      background:none;
      vertical-align: middle;
      right: 5px;
      border: none;
      transition: all ease 0.5s;

      svg {
        width: 40px;
        height: 40px;
      }

      /* &:hover {
        right: 0;
        transition: right 0.5s;
      } */

`;
 
// const PaginationBox = styled.div`
//   position: relative;
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
//   width: 100%;
//   grid-column-gap: 1px;

//   picture {
//     width: 100%;

//     img {
//       width: 100%;
//       cursor: pointer;
//     }
//   }
// `;

const DetailSlider = () => {
    const [slideIndex, setSlideIndex] = useState([]);
    const [slideInd, setSlideInd] = useState(0);
    const { id } = useParams();
    const slideRef = useRef(null);
    const IMG_WIDTH = 500;
    const slideRange = slideInd * IMG_WIDTH;

    useEffect(() => {
      slideRef.current.style.transition = "all 0.5s ease-in-out";
      slideRef.current.style.transform = `translateX(-${slideRange}px)`;
    }, [slideInd]);
  
    const moveToNextSlide = () => {
      if (slideInd === 2) return;
      setSlideInd(slideInd + 1);
    };
  
    const moveToPrevSlide = () => {
      if (slideInd === 0) return;
      setSlideInd(slideInd - 1);
    };

    // const onChangeImage = (index) => {
    //   if (slideIndex?.photos?.length <= index) index = 0;
    //   if (index < 0) index = slideIndex?.photos?.length - 1;
  
    //   setSlideInd({ slideInd: index });
    // };

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
      <ImageSlide>
          <SlideBox>
            {slideIndex?.photos?.length === 1 ? (
                <SlideList ref={slideRef}>
                {slideIndex?.photos?.map((image, no) => (
                  <SlideContent key={no}>
                    <picture>
                      <img src={image.picture} />
                    </picture>
                  </SlideContent>
                ))}
              </SlideList>
            ):(
              <>
                <SlideList ref={slideRef}>
                  {slideIndex?.photos?.map((image, no) => (
                    <SlideContent key={no}>
                      <picture>
                        <img src={image.picture} />
                      </picture>
                    </SlideContent>
                  ))}
                </SlideList>
                <ButtonPrev onClick={moveToPrevSlide}>
                  <ArrowCircleLeftIcon fontSize='large'/>
                </ButtonPrev>
                <ButtonNext onClick={moveToNextSlide}>
                  <ArrowCircleRightIcon fontSize='large'/>
                </ButtonNext>
                {/* <PaginationBox>
                  {slideIndex?.photos?.map((image, no) => (
                    <div
                      key={no}
                      onClick={() => {
                        onChangeImage(no);
                      }}
                    >
                      <picture>
                        <img src={image.picture} />
                      </picture>
                    </div>
                  ))}
                </PaginationBox> */}
              </>
            )}            
          </SlideBox>
    </ImageSlide>
  )
}

export default DetailSlider