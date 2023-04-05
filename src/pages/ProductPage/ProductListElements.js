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

export const ProductsList = styled.div`
  /* margin: 0 auto; */
  /* width: 80%; */
  margin: 20px;
`;

export const ListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
`;

export const SelectWrap = styled.div`
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;

  select {
    /* appearance: none; */
    background-color: transparent;
    /* border: 1px solid blue; */
    border-radius: 5px;
    padding: 0.2em 0.5em;
    margin: 0;
    width: 100%;
    /* font-family: inherit; */
    /* font-size: inherit; */
    cursor: inherit;
    line-height: inherit;

    z-index: 1;

    &:focus {
      border: 2px solid blue;
      option {
        &:checked {
          /* box-shadow: 0 0 10px 100px #000 inset; */
          /* background-color: yellow !important; */
        }
      }
    }

    &::-ms-expand {
      display: none;
    }

    option {
      &:hover {
        box-shadow: 0 0 10px 100px #000 inset;
        /* background-color: yellow !important; */
      }
    }
  }

  select,
  &::after {
    grid-area: select;
  }

  /* min-width: 15ch;
  max-width: 30ch; */

  /* border: 1px solid var(--select-border); */
  /* border: 2px solid blue; */
  /* border-radius: 0.25em; */
  /* padding: 0.25em 0.5em; */

  /* font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%); */
`;

export const ListMid = styled.div`
  /* margin: 0 40px; */
  /* width: 80%; */
  /* width: 250px; */
  display: grid;
  justify-content: center;
  /* align-items: center; */
  /* grid-template-columns: repeat(4, 200px); */
  /* grid-template-columns: repeat(4, minmax(min-content, max-content)); */
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  /* object-fit: cover; */
`;

export const ProductsEach = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
`;

export const ProductEachPhoto = styled.img`
  object-fit: cover;
  /* object-fit: fill; */
  /* object-fit: contain; */
  width: 100%;
  height: 300px;
`;

export const ToggleLike = styled.div`
  margin: -35px 10px 10px 0;
  text-align: right;
  z-index: 2;
  /* font-size: 20px; */
`;

export const ProductEachDetails = styled.div`
  height: 20%;
`;

export const ProductTitle = styled.div`
  width: 200px;
  font-weight: 600;
  margin: 10px 0 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductDesc = styled.div`
  margin: 5px 0;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ProductPrice = styled.div`
  margin: 5px 0;
  font-size: 18px;
  font-weight: 400;
`;

export const ProductLike = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  /* transition: all 0.8s; */

  &:active {
    transform: translateY(4px);
  }
`;
