import React, { useState } from 'react';
import {
  FooterContainer,
  FooterWrapper,
  FooterLineOne,
  AboLink,
  TerLink,
  PriLink,
  FooterLineTwo,
  HelpBtn,
  HelpIcon,
  DownloadPart,
  DownloadTitle,
  DownApp,
  AppImg,
  DownGoo,
  GooImg,
  SocialPart,
  InstarTab,
  InstarImg,
  YoutubTab,
  YoutubImg,
  TwitTab,
  TwitImg,
  FooterLineThree,
  LocationInfoBtn,
  CompanyInfo,
} from './FooterElements';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { color } from '@mui/system';
import AppStore from '../../asset/appstore.png';
import GooPlay from '../../asset/googleplay.png';
import Instar from '../../asset/insta.png';
import Youtub from '../../asset/youtube.png';
import Twit from '../../asset/twitter.png';
import { Link } from 'react-router-dom';

const Footer = ({ click, isNewWindow }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLineOne>
          {/* <AboLink>About BLANKCLOSET</AboLink> */}
          {/* <TerLink>Terms & Conditions</TerLink> */}
          {/* <PriLink>
            <strong>Privacy Policy</strong>
          </PriLink> */}
        </FooterLineOne>
        <FooterLineTwo>
          {/* <HelpBtn> */}
          {/* <HelpIcon> */}
          {/* <Link to='/helpcenter'>Help Center</Link> */}
          <ChatBubbleOutlineIcon fontSize='small' />
          Contact Us
          <span>Email: blank_dev@google.com</span>
          <span>Phone: +1 123-456-7890</span>
          {/* </HelpIcon> */}
          {/* </HelpBtn> */}
          {/* <DownloadPart>
            <DownloadTitle>Download the MUSINSA app</DownloadTitle>
            <DownApp>
              <AppImg src={AppStore} />
            </DownApp>

            <DownGoo>
              <GooImg src={GooPlay} />
            </DownGoo>
          </DownloadPart> */}
          <SocialPart>
            <InstarTab>
              <InstarImg src={Instar} />
            </InstarTab>

            <TwitTab>
              <TwitImg src={Twit} />
            </TwitTab>

            <YoutubTab>
              <YoutubImg src={Youtub} />
            </YoutubTab>
          </SocialPart>
        </FooterLineTwo>
        <FooterLineThree>
          {/* 추후 드랍다운 */}
          {/* <LocationInfoBtn>Learn more about MUSINSA Co.,Ltd.</LocationInfoBtn> */}
          <CompanyInfo>
            MUSINSA Co.,Ltd may not be the direct seller but only an
            intermediary for some products. In this case, MUSINSA has limited
            liability for products, information, and transactions. Please check
            the product details page of each product.
          </CompanyInfo>
        </FooterLineThree>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
