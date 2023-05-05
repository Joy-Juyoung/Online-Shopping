// import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
// import { useState } from 'react';
// import styled from 'styled-components';

// import Image1 from '../../asset/Hoodie017.jpg';
// import Image2 from '../../asset/jeans01.jpg';
// import Image3 from '../../asset/short-top03.jpg';
// import Image4 from '../../asset/Hoodie022.jpg';
// // import Image5 from '../../asset/pic18.jpg';
// // import Image6 from '../../asset/pic19.jpg';
// // import Image7 from '../../asset/pic27.jpg';

// const Container = styled.div`
//   /* width: 100%; */
//   height: 50vh;
//   display: flex;
//   position: relative;
//   overflow: hidden;

//   @media screen and (max-width: 1024px) {
//     height: 100%;
//   }
// `;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: #fff7f7;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === 'left' && '10px'};
//   right: ${(props) => props.direction === 'right' && '10px'};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
// `;

// const Wrapper = styled.div`
//   /* height: 100%; */
//   display: flex;
//   /* display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 20px; */
//   /* height: 90%; */
//   transition: all 1s ease;
//   /* transform: translateX(${(props) => props.slideIndex * -100}vw); */
//   transform: translateX(${(props) => props.slideIndex * -315}px);

//   @media screen and (max-width: 1024px) {
//     /* transform: translateX(${(props) => props.slideIndex * -315}vw); */
//   }
// `;

// const Slide = styled.div`
//   width: 315px;
//   height: 400px;
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
//   background-color: #${(props) => props.bg};
//   /* margin-right: 20px; */
//   padding: 0 20px;

//   @media screen and (max-width: 1024px) {
//     width: 12.3em;
//     /* height: 100%; */
//     /* height: 30em; */
//     padding-right: 5px;
//   }
// `;

// const Image = styled.img`
//   height: 100%;
//   width: 100%;
// `;

// // const Button = styled.button`
// //   padding: 10px;
// //   font-size: 20px;
// //   background-color: transparent;
// //   cursor: pointer;
// // `;

// const sliderItems = [
//   {
//     id: 1,
//     img: Image1,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 2,
//     img: Image2,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 3,
//     img: Image3,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 4,
//     img: Image4,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 5,
//     img: Image1,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 6,
//     img: Image2,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 7,
//     img: Image3,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
//   {
//     id: 8,
//     img: Image4,
//     name: 'Test 2423ser',
//     des: 'dsfewre',
//     price: '123',
//   },
// ];

// const Slider = () => {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const handleClick = (direction) => {
//     if (direction === 'left') {
//       setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
//     } else {
//       setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 1);
//     }
//   };

//   return (
//     <Container>
//       <Arrow direction='left' onClick={() => handleClick('left')}>
//         <ArrowLeftOutlined />
//       </Arrow>
//       <Wrapper slideIndex={slideIndex}>
//         {sliderItems.map((item) => (
//           <Slide key={item.id}>
//             <Image src={item.img} />
//             <div style={{ paddingTop: '20px' }}>
//               <p>{item.name}</p>
//               <p>{item.des}</p>
//               <p>${item.price}</p>
//             </div>
//           </Slide>
//         ))}
//       </Wrapper>
//       <Arrow direction='right' onClick={() => handleClick('right')}>
//         <ArrowRightOutlined />
//       </Arrow>
//     </Container>
//   );
// };

// export default Slider;
