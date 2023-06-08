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
  SocialWrap,
  GoTop,
  GoTopBtn,
} from './FooterElements';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { color } from '@mui/system';
import AppStore from '../../asset/appstore.png';
import GooPlay from '../../asset/googleplay.png';
import Instar from '../../asset/insta.png';
import Youtub from '../../asset/youtube.png';
import Twit from '../../asset/twitter.png';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import Comingsoon from '../Comingsoon';
import EmailIcon from '@mui/icons-material/Email';
import NorthIcon from '@mui/icons-material/North';

// import Smaile from '../../asset/smaile.svg';
// import Donuts from '../../asset/donuts.svg';

const Footer = ({ click, isNewWindow }) => {
  const [modalShown, toggleModal] = useState(false);
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLineOne>
          <AboLink onClick={() => toggleModal(!modalShown)}>
            About BlankCloset
          </AboLink>
          <AboLink onClick={() => toggleModal(!modalShown)}>
            Terms & Conditions
          </AboLink>
          <AboLink onClick={() => toggleModal(!modalShown)}>
            Privacy Policy
          </AboLink>
        </FooterLineOne>
        <FooterLineTwo>
          <HelpBtn>
            <Link to='mailto:dev3blank@gmail.com'>
              <HelpIcon>
                <EmailIcon fontSize='small' />
                <p>Contact Email</p>
                <span>dev3blank@gmail.com</span>
              </HelpIcon>
            </Link>
          </HelpBtn>
          <DownloadPart>
            <DownloadTitle>Download the BlankCloset app</DownloadTitle>
            <DownApp onClick={() => toggleModal(!modalShown)}>
              <AppImg src={AppStore} />
            </DownApp>

            <DownGoo onClick={() => toggleModal(!modalShown)}>
              <GooImg src={GooPlay} />
            </DownGoo>
          </DownloadPart>
          <SocialPart>
            <SocialWrap>
              <InstarTab>
                <Link
                  to='https://instagram.com/dev_blk?igshid=OGQ5ZDc2ODk2ZA=='
                  target='_blank'
                >
                  <InstarImg src={Instar} />
                </Link>
              </InstarTab>

              <TwitTab onClick={() => toggleModal(!modalShown)}>
                <TwitImg src={Twit} />
              </TwitTab>

              <YoutubTab onClick={() => toggleModal(!modalShown)}>
                <YoutubImg src={Youtub} />
              </YoutubTab>
            </SocialWrap>
            <GoTop>
              <GoTopBtn
                onClick={() =>
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              >
                <span>Top</span>
                <NorthIcon />
              </GoTopBtn>
            </GoTop>
          </SocialPart>
        </FooterLineTwo>
        <FooterLineThree>
          <CompanyInfo>
            BlankCloset may not be the direct seller but only an intermediary
            for some products. In this case, BlankCloset has limited liability
            for products, information, and transactions. Please check the
            product details page of each product.
          </CompanyInfo>
        </FooterLineThree>
      </FooterWrapper>
      <Modal
        shown={modalShown}
        close={() => {
          toggleModal(false);
        }}
      >
        <Comingsoon />
      </Modal>
    </FooterContainer>
  );
};

export default Footer;
