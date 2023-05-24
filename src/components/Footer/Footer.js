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
import Modal from '../Modal';
import Comingsoon from '../Comingsoon';

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
            <Link to='/helpcenter'>
              <HelpIcon>
                Help Center
                <ChatBubbleOutlineIcon fontSize='small' />
              </HelpIcon>
            </Link>
          </HelpBtn>
          <DownloadPart>
            <DownloadTitle>Download the BlankCloset app</DownloadTitle>
            <DownApp onClick={() => toggleModal(!modalShown)}>
              {/* <Link to='/comingsoon'> */}
              <AppImg src={AppStore} />
              {/* </Link> */}
            </DownApp>

            <DownGoo onClick={() => toggleModal(!modalShown)}>
              {/* <Link to=''> */}
              <GooImg src={GooPlay} />
              {/* </Link> */}
            </DownGoo>
          </DownloadPart>
          <SocialPart>
            <InstarTab>
              <Link
                to='https://instagram.com/dev_blk?igshid=OGQ5ZDc2ODk2ZA=='
                target='_blank'
              >
                <InstarImg src={Instar} />
              </Link>
            </InstarTab>

            <TwitTab onClick={() => toggleModal(!modalShown)}>
              {/* <Link to=''> */}
              <TwitImg src={Twit} />
              {/* </Link> */}
            </TwitTab>

            <YoutubTab onClick={() => toggleModal(!modalShown)}>
              {/* <Link to=''> */}
              <YoutubImg src={Youtub} />
              {/* </Link> */}
            </YoutubTab>
          </SocialPart>
        </FooterLineTwo>
        <FooterLineThree>
          {/* <LocationInfoBtn>Learn more about BlankCloset Co.,Ltd.</LocationInfoBtn> */}
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
