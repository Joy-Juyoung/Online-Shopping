import styled from 'styled-components';

export const MainContainer = styled.div`
  /* min-height: 100%; */
  margin: 0 auto;
  padding: 1em 0;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  /* padding: 40px; */
`;

export const MidInfo = styled.div`
  margin: 0 0 7em;
`;

export const SectionWrap = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  /* padding: 0 10px; */
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas: 'col1 col2';

  button {
    /* width: 30%; */
    margin: 40px 0;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;

    &.start__left {
      grid-template-areas: 'col1' 'col2';
    }

    &.start__right {
      grid-template-areas: 'col2' 'col1';
    }

    /* button {
      width: 100%;
      margin: 24px 0;
    } */
  }
`;

export const SectionInfoLeft = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 10px; */
  grid-area: col1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    /* align-items: center; */
    /* text-align: left; */
  }
`;

export const SectionInfoRight = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 0 10px; */
  grid-area: col2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    /* align-items: center; */
    /* text-align: left; */
  }
`;

export const FirstImg = styled.img`
  width: 100%;
  height: 90%;
  /* height: 70vh; */
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SectionOneRightInfo = styled.div``;

export const OneRightInfoUp = styled.div``;

export const ParagraphWrap = styled.div`
  width: 100%;
  margin-left: 40px;
`;

export const ParagraghTitle = styled.h1`
  font-size: 56px;
  line-height: 67px;
  font-family: 'Libre Baskerville', serif;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 33.6px;
  }
`;

export const ParagraghBody = styled.p`
  font-size: 20px;
  font-weight: 400px;
  line-height: 26px;
  margin-top: 32px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
    margin-top: 8px;
  }
`;

// ------------

export const SectionTitle = styled.h1`
  font-family: 'Libre Baskerville', serif;
`;

export const SectionButton = styled.div`
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionProducts = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const ProductsWrap = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  width: 100%;
  /* grid-template-columns: repeat(2, 60px) */
  /* grid-gap: 20px; */

  img {
    /* width: 400px; */
    width: 100%;
    /* height: 450px; */
    object-fit: cover;
  }
`;

// ------------

export const SectionCategories = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const CategoriesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  grid-gap: 20px;

  span {
    /* width: 400px; */
    /* width: 100%;
    height: 450px;
    object-fit: cover; */
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background: #0a0f18;
      color: #fff;
    }
  }
`;

// ------
export const SectionTrending = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const TrendingWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  /* grid-template-columns: repeat(2, 60px) */
  grid-gap: 20px;

  img {
    /* width: 400px; */
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;
