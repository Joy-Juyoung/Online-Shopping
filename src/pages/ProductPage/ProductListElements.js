import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  width: 100%;
`;

export const ProductsWrap = styled.div`
  margin: 0 auto;

  h1 {
    margin: 40px 0;
  }
`;

export const ProductsListWrapper = styled.div`
  margin: 0 auto;
`;

export const ProductCategories = styled.div``;

export const ProductsList = styled.div``;

export const ListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;
export const ListMidWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* grid-template-columns: repeat(4, minmax(min-content, max-content));
  grid-gap: 10px; */
   h2{
    margin: 10px 0;
   }
`;

export const ListMid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, max-content));
  grid-gap: 10px;
`;

export const ProductsEach = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 80%;
  }
`;

export const ProductEachPhoto = styled.div`
  /* margin-bottom: 10px; */
  /* img {
    object-fit: cover;
    width: 100%;
    height: 80%;
  } */
`;

export const ToggleLike = styled.div`
  margin: -35px 10px 10px 0;
  text-align: right;
  z-index: 100;
  /* font-size: 20px; */
`;

export const FavIcon = styled.div``;

export const ProductEachDetails = styled.div`
  /* text-align: left; */
  /* margin: 10px 0; */
`;

export const ProductTitle = styled.div`
  font-weight: 600;
  margin: 10px 0 5px;
`;

export const ProductDesc = styled.div`
  margin: 5px 0;
`;

export const ProductPrice = styled.div`
  margin: 5px 0;
  font-size: 18px;
  font-weight: 400;
`;

export const ProductLike = styled.span`
  color: #b2b2b2;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 10px 0;
`;
