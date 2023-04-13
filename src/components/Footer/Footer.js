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
          <AboLink>
            {/* <a href='https://about.musinsa.com/en'> */}
            <a href=''>About MUSINSA</a>
          </AboLink>
          <TerLink>
            {/* <a href='https://global.musinsa.com/ca/member/agreement/service'> */}
            <a href=''>Terms & Conditions</a>
          </TerLink>
          <PriLink>
            {/* <a
              href='https://global.musinsa.com/ca/member/agreement/privacy-policy'
              style={{ textDecoration: 'none', color: 'dimgray' }}
            > */}
            <a href=''>
              <strong>Privacy Policy</strong>
            </a>
          </PriLink>
        </FooterLineOne>
        <FooterLineTwo>
          <HelpBtn>
            <Link to='/helpcenter'>Help Center</Link>
            <HelpIcon>
              <ChatBubbleOutlineIcon fontSize='small' />
            </HelpIcon>
          </HelpBtn>
          <DownloadPart>
            <DownloadTitle>Download the MUSINSA app</DownloadTitle>
            <DownApp>
              {/* <a href='https://apps.apple.com/app/id1637547116'> */}
              <a href=''>
                <AppImg src={AppStore} />
              </a>
            </DownApp>

            <DownGoo>
              {/* <a href='https://play.google.com/store/apps/details?id=com.musinsa.global&pli=1'> */}
              <a href=''>
                <GooImg src={GooPlay} />
              </a>
            </DownGoo>
          </DownloadPart>
          <SocialPart>
            <InstarTab>
              {/* <a href='https://www.instagram.com/musinsa_global/'> */}
              <a href=''>
                <InstarImg src={Instar} />
              </a>
            </InstarTab>

            <TwitTab>
              {/* <a href='https://twitter.com/musinsa_global/'> */}
              <a href=''>
                <TwitImg src={Twit} />
              </a>
            </TwitTab>

            <YoutubTab>
              {/* <a href='https://www.youtube.com/musinsatv/'> */}
              <a href=''>
                <YoutubImg src={Youtub} />
              </a>
            </YoutubTab>
          </SocialPart>
        </FooterLineTwo>
        <FooterLineThree>
          {/* 추후 드랍다운 */}
          <LocationInfoBtn>Learn more about MUSINSA Co.,Ltd.</LocationInfoBtn>
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
