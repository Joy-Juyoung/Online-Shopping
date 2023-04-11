import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  width: 100%;

  h1 {
    margin: 40px 0 0;
  }

  a {
    text-decoration: none;
    color: #0a0f18;

    &:visited {
      text-decoration: none;
    }
  }
`;

export const ProductsWrap = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 40px;
`;

// -------------------Side

export const SideFilterContainer = styled.div`
  margin: 0 auto;
  padding: 0 40px 0 0;
  flex: 1;
`;

export const SideFilterWrapper = styled.div``;

export const SideFilterUl = styled.ul`
  margin: 40px 0;
`;

export const SideFilterLl = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 20px;
  padding: 0 0 20px 0;
  border-bottom: 1px solid lightgray;
  list-style: none;

  ul {
    margin: 10px 0 0 10px;
    font-weight: 400;
    font-size: 14px;
  }
  li {
    list-style: none;
    margin: 15px 0;
  }
`;

export const ListTitle = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  font-weight: 600;
  /* margin-bottom: 20px; */
`;

export const ListSub = styled.div``;

// -------------------

export const ProductsListWrapper = styled.div`
  margin: 0 auto;
  flex: 4;
`;

export const CategoriesWrap = styled.div`
  margin: 20px 0;
  display: flex;
`;

export const Categories = styled.div`
  display: flex;
  margin-right: 10px;
  font-size: 12px;
  padding: 7px;
  border-radius: 5px;
  background: #f2f4f7;
  cursor: pointer;

  &:hover {
    font-weight: 500;
  }
`;

export const CategoriesInside = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductsList = styled.div`
  /* margin: 20px; */
`;

export const ListTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
`;

export const TotalCount = styled.div``;

export const TotalCountWrap = styled.div`
  /* margin: 20px 0; */
`;

export const SelectWrap = styled.div`
  select {
    width: 150px;
    height: 30px;
    /* border: 1px solid #0a0f18; */
    border: none;
    /* font-size: 18px; */
    /* color: #1c87c9; */
    background-color: #f2f4f7;
    border-radius: 5px;
    /* box-shadow: 4px 4px #ccc; */
    padding: 0 5px;
  }

  option {
    padding: 5px;
  }
`;

export const ListMidWrap = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`;

export const ListMidWrapper = styled.div``;

export const AllEachTitle = styled.h2`
  width: 100%;
  border-top: 1px dotted gray;
  font-size: 18px;
  padding: 5px 0;
`;

export const ListMid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const ProductsEach = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin: 0 0 50px;
  overflow: hidden;
`;

export const ProductEachPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;

export const ToggleLike = styled.div`
  margin: -35px 10px 10px 0;
  text-align: right;
  z-index: 2;
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
  font-size: 14px;

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

export const EmptyWhishlist = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  font-weight: 400;
`;
