import styled from 'styled-components';

export const MainContainer = styled.div`
  /* min-height: 100%; */
  margin: 0 auto;
  padding: 0.7em 10px;

  a {
    text-decoration: none;
    color: #0a0f18;
  }

  @media screen and (max-width: 1024px) {
    /* padding: 0.3em auto; */
  }
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  /* padding: 40px; */
`;

export const MidInfo = styled.div`
  margin: 0 0 5em;
  padding: 20px 15px;

  @media screen and (max-width: 1024px) {
    /* margin: 0 0 5em; */
    width: 100%;
    /* padding: 0 15px; */
  }
`;

export const SectionWrap = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  /* padding: 0 10px; */
  /* margin-bottom: 40px; */
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  button {
    margin: 40px 0;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionInfoLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }
`;

export const SectionInfoRight = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
  }
`;

export const FirstImg = styled.img`
  width: 100%;
  /* height: 90%; */
  height: 75vh;
  object-fit: cover;
  object-position: top;

  @media screen and (max-width: 1024px) {
    /* width: 80%; */
    /* height: 80%; */
    /* width: 100%; */
    height: 700px;
    /* object-position: top; */
    /* object-fit: contain; */
  }
`;

export const ParagraphWrap = styled.div`
  /* width: 100%; */
  margin-left: 40px;

  @media screen and (max-width: 1024px) {
    margin: 0;

    button {
      margin: 20px 0;
      width: 100%;
    }
  }
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
  font-size: 28px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const SectionButton = styled.div`
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    button {
      margin: 20px 0;
      width: 100%;
    }
  }
`;

export const SectionProducts = styled.div`
  display: flex;
  width: 100%;
  height: 380px;
  margin-top: 20px;
  cursor: pointer;
`;

export const ProductsWrap = styled.div`
  /* display: grid;
  grid-template-columns: repeat(4, 1fr); */
  width: 100%;
  /* grid-template-columns: repeat(2, 60px) */
  /* grid-gap: 20px; */

  img {
    /* width: 400px; */
    /* height: 450px; */
    width: 100%;
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
  /* display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 20px; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-decoration: none;
    color: #0a0f18;
  }

  /* margin: 0 10px; */

  span {
    width: 90%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 15px;
    /* margin: 0 10px; */
    text-align: center;
    font-size: 24px;
    cursor: pointer;

    &:hover {
      background: #0a0f18;
      color: #fff;
    }
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    /* justify-items: flex-start; */
    width: 100%;
    /* grid-gap: 10px; */

    span {
      padding: 10px 25px;
      font-size: 16px;
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

  p {
    text-align: right;
    font-size: 12px;
    margin: -5px 5px;
    font-style: italic;
  }
`;

export const HeroLoader = styled.div`
  display: flex;
  /* margin: 10px;
  padding-top: 10px; */

  margin: 150px auto;
`;
