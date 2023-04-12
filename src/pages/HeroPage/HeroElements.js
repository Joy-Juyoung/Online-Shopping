import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100%;
  margin: 0 auto;
  padding: 40px 0;
`;

export const MainWrapper = styled.div`
  margin: 0 auto;
  /* padding: 40px; */
`;

export const MidInfo = styled.div`
  margin: 0 auto;
`;

export const SectionWrap = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-template-areas: 'col1 col2';

  button {
    width: 30%;
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

    button {
      width: 100%;
      margin: 24px 0;
    }
  }
`;

export const SectionInfoLeft = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10px;
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
  padding: 0 10px;
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
  width: 500px;
  height: 600px;
  object-fit: cover;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const SectionOneRightInfo = styled.div``;

export const OneRightInfoUp = styled.div``;

export const ParagraphWrap = styled.div``;

export const ParagraghTitle = styled.h1`
  font-size: 56px;
  line-height: 67px;

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
