import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100%;
  /* max-width: 1250px; */
  font-size: 14px;
  line-height: 1.5;
  color: rgb(10, 15, 24);
`;

export const MainWrapper = styled.div``;

export const TopWrapper = styled.div`
  width: 100%;
  /* display: flex; */
  align-items: center;
  justify-content: start;
  margin: 0 auto;
`;

export const FreeInfo = styled.div`
  width: 100%;
  min-height: 40px;
  display: grid;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: 100%;
  padding: 3px 12px;
  background-color: rgb(10, 15, 24);
  box-sizing: border-box;
`;

export const FreeInfoTitle = styled.div`
  position: relative;
  grid-row-start: 1;
  grid-column-start: 1;
  height: auto;
  transition-property: z-index;
  display: block;
  animation: 0.5s linear 1s 1 normal both running lbWRkT;
  transition-delay: 1s;
  z-index: 1;
  p {
    /* max-width: 1250px; */
    margin: 0px auto;
    font-size: 16px;
    line-height: 24px;
    display: block;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    word-break: keep-all;
  }
`;

export const MidWrapper = styled.div``;

export const MidInfo = styled.div`
  padding-bottom: 120px;
`;

export const SectionOne = styled.section`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  /* max-width: 1250px; */
  margin: 50px auto 0px;
  padding: 0px 20px;
  box-sizing: border-box;
`;

export const SectionOneLeftInfo = styled.div`
  flex-shrink: 0;
  padding-bottom: 58.96%;
  width: calc(50% - 8px);
  display: block;
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 1;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const FirstImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  border: none;
  line-height: 0;
  vertical-align: top;
`;

export const SectionOneRightInfo = styled.div`
  padding: 0px;
  margin-left: 50px;
`;

export const OneRightInfoUp = styled.div`
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 0px;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 20;
  transform: translate(0px);
  background-color: rgb(255, 255, 255);

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ParagraphOne = styled.div`
  /* max-width: 1250px; */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;
export const ParagraghTitle = styled.h2`
  font-size: 56px;
  line-height: 67px;
  word-break: break-word;
  font-family: SuisseWorks;
`;

export const ParagraghBody = styled.p`
  margin-top: 32px;
  font-size: 20px;
  font-weight: 400px;
  line-height: 26px;
`;

export const OneRightInfoDown = styled.div`
  margin-top: 40px;
`;

export const SectionTwo = styled.section`
  padding-top: 80px;
`;

export const SectionTwoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  /* max-width: 1250px; */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const SectionTwoLeftInfo = styled.div`
  flex: 1 1 0%;
  padding: 0px 50px 0px 0px;
`;

export const TwoLeftInfoUp = styled.div`
  display: block;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const TwoLeftInfoDown = styled.div`
  margin-top: 40px;
`;

export const ParagraghTwoTitle = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const ParagraghTwoBody = styled.p`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.3;
  word-break: break-word;
`;

export const SectionTwoRightInfo = styled.div`
  flex-shrink: 0;
  padding-bottom: 58.96%;
  width: calc(50% - 8px);
  position: relative;
  display: block;
  background-color: rgb(255, 255, 255);
  a {
    text-decoration: none;
    color: black;
  }
`;

export const SecondImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  border: none;
  line-height: 0;
  vertical-align: top;
`;

export const SectionThree = styled.section`
  padding-top: 80px;
`;
export const SectionThreeWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  flex-direction: row-reverse;
  /* max-width: 1250px; */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const SectionThreeLeftInfo = styled.div`
  flex-shrink: 0;
  padding-bottom: 30.888%;
  width: calc(50% - 8px);
  position: relative;
  display: block;
  background-color: rgb(255, 255, 255);
  a {
    text-decoration: none;
    color: black;
  }
`;

export const ThirdImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  border: none;
  line-height: 0;
  vertical-align: top;
`;
export const SectionThreeRightInfo = styled.div`
  flex: 1 1 0%;
  padding: 0px 50px 0px 0px;
  margin-left: 50px;
`;

export const ThreeRightInfoUp = styled.div`
  display: block;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const ParagraghThreeTitle = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 600;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const ParagraghThreeBody = styled.p`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.3;
  word-break: break-word;
`;

export const ThreeRightInfoDown = styled.div`
  margin-top: 40px;
`;

export const SectionFour = styled.section`
  padding-top: 80px;
`;

export const SectionFourWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  /* max-width: 1250px; */
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
`;

export const SectionFourLeftInfo = styled.div`
  flex: 1 1 0%;
  padding: 0px 50px 0px 0px;
`;

export const FourLeftInfoUp = styled.div`
  display: block;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const FourLeftInfoDown = styled.div`
  margin-top: 40px;
`;

export const ParagraghFourTitle = styled.h2`
  font-size: 36px;
  line-height: 1.2;
  font-weight: 500;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

export const ParagraghFourBody = styled.p`
  margin-top: 32px;
  font-size: 20px;
  line-height: 1.3;
  word-break: break-word;
`;

export const SectionFourthRightInfo = styled.div`
  flex-shrink: 0;
  padding-bottom: 58.96%;
  width: calc(50% - 8px);
  position: relative;
  display: block;
  background-color: rgb(255, 255, 255);
  a {
    text-decoration: none;
    color: black;
  }
`;

export const FourthImg = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
  border: none;
  line-height: 0;
  vertical-align: top;
`;
