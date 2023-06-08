import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  /* max-width: 1250px; */
  width: 100%;
  border-top: 1px solid lightgray;
  background-color: white;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const FooterWrapper = styled.div`
  max-width: 1250px;
  margin: 0 auto;
  /* padding: 28px 20px; */
  /* box-sizing: border-box; */
`;

export const FooterLineOne = styled.div`
  display: block;
`;

export const AboLink = styled.div`
  padding-top: 0px;
  margin-right: 60px;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  color: #a9a9a9;
  a {
    text-decoration: none;
    color: #a9a9a9;
  }
`;

export const TerLink = styled.div`
  padding-top: 0px;
  margin-right: 60px;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  a {
    text-decoration: none;
    color: #a9a9a9;
  }
`;

export const PriLink = styled.div`
  padding-top: 0px;
  font-size: 12px;
  line-height: 18px;
  display: inline-block;
  font-weight: bold;
  color: #696969;
  a {
    text-decoration: none;
    color: #696969;
  }
`;

export const FooterLineTwo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  /* -webkit-box-pack: start; */
  justify-content: flex-start;
  margin: 28px 0px;
`;
export const HelpBtn = styled.button`
  /* width: 236px;
  height: 40px; */
  /* width: 250px; */
  /* height: 100px; */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  /* box-sizing: border-box; */
  /* font-size: 16px; */
  /* font-weight: bold; */
  background-color: white;
  cursor: pointer;

  a {
    text-decoration: none;
    color: black;
  }
`;
export const HelpIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
    /* margin-bottom: 5px;
    margin-right: 5px; */
  }

  span {
    display: flex;
    align-items: center;
  }
  /* margin-left: 4px; */

  /* a {
    margin-right: 5px;
  } */
`;
export const DownloadPart = styled.div`
  margin-top: 10px;
  font-size: 18px;
  padding: 20px 0px;
`;

export const DownloadTitle = styled.p`
  display: block;
  /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
  margin-bottom: 16px;
  font-size: 18px;
  color: rgb(29, 41, 57);
  line-height: 27px;
  display: block;
  font-weight: 700;
`;

export const DownApp = styled.button`
  display: inline-block;
  border: none;
  background-color: white;
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const AppImg = styled.img`
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const DownGoo = styled.button`
  display: inline-block;
  border: none;
  background-color: white;
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const GooImg = styled.img`
  width: 130px;
  height: 40px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SocialPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* align-self: flex-start; */
  /* margin-top: 28px; */

  button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 28px;
`;

export const InstarTab = styled.div`
  height: 100%;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const InstarImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const TwitTab = styled.div`
  margin-left: 28px;
  height: 100%;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const TwitImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const YoutubTab = styled.div`
  margin-left: 28px;
  height: 100%;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const YoutubImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const FooterLineThree = styled.div``;

export const LocationInfoBtn = styled.button`
  display: flex;
  /* -webkit-box-align: center; */
  align-items: center;
  line-height: 18px;
  appearance: none;
  border: 0px;
  background: none;
  cursor: pointer;
`;

export const CompanyInfo = styled.p`
  margin-top: 28px;
  font-size: 12px;
  color: #a9a9a9;
`;

export const GoTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoTopBtn = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  color: #fff;
  background: #0a0f18;
  padding: 5px 10px;
  cursor: pointer;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 50px; */
  /* margin-right: 20px; */
  /* font-weight: 600; */

  span {
    /* margin-left: 40px; */
  }

  svg {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    margin-right: -5px;
    /* margin-left: 5px; */
  }

  &:hover {
    background: #ffae00;
    color: #0a0f18;
    font-weight: 600;
    /* border: 1px solid #0a0f18; */
  }
`;
