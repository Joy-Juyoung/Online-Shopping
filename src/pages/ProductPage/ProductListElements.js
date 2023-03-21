import styled from 'styled-components';

export const ProdutsListContainer = styled.div`
  width: 100%;
`;

export const ProductsListWrap = styled.div`
  margin: 0 auto;
`;

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(min-content, max-content));
  grid-gap: 10px;
`;

export const ProductsEach = styled.div`
  /* width: 100%;
  height: 350px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    object-fit: cover;
    width: 100%;
    height: 80%;
  }
`;
