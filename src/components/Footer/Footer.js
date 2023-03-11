import React from 'react'
import {
  AboutLink,
  TermLink,
  PolicyLink,
  HelpButton,
  HelpLink,
  DownloadApps,
  NavBtn,
  AppImg,


} from './FooterElements';

const Footer = () => {
  return (
      
      <AboutLink to='/'>
        About MUSINSA
      </AboutLink>

      <TermLink to='/'>
        Terms & Conditions
      </TermLink>
              
      <PolicyLink to='/'>
        Privacy Policy
      </PolicyLink>
        
      <HelpButton>
        <HelpLink to='/'>
          Help center
        </HelpLink>
      </HelpButton>  
      <DownloadApps>
        <>Download the MUSINSA app</>

        <NavBtn>
          <AppImg></AppImg>
        </NavBtn>

        <NavBtn>
          <AnImg></AnImg>
        </NavBtn>

        <NavBtn>
          <InstrImg></InstrImg>
        </NavBtn>

        <NavBtn>
          <TwiImg></TwiImg>
        </NavBtn>

        <NavBtn>
          <YutuImg></YutuImg>
        </NavBtn>


      </DownloadApps>
   );  
};

export default Footer;