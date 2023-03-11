import React from 'react';
import {
  MainContainer,
  MainWrapper,
  TopWrapper,
  FreeInfo,
  FreeInfoTitle,
  MidWrapper,
  MidInfo,
  SectionOne,
  SectionOneLeftInfo,
  FirstImg,
  SectionOneRightInfo,
  OneRightInfoUp,
  OneRightInfoDown,
  ParagraphOne,
  ParagraghTitle,
  ParagraghBody

} from './HeroElements';
import FirstImage from '../../asset/firstimage.png';


const HeroPage = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <TopWrapper>
          <FreeInfo>
            <FreeInfoTitle>
              <p>FREE SHIPPING on all orders $200+</p>
            </FreeInfoTitle>
          </FreeInfo>
        </TopWrapper>
        <MidWrapper>
          <MidInfo>
            <SectionOne>
              <SectionOneLeftInfo>
                {/* 추후 링크로 변경  */}
              <a 
                href='https://www.youtube.com/musinsatv/'>
                <FirstImg src={FirstImage} />
              </a>
              </SectionOneLeftInfo>

              <SectionOneRightInfo>
                <OneRightInfoUp>
                  <a 
                    href='https://www.youtube.com/musinsatv/'>
                    <ParagraphOne>
                      <ParagraghTitle>NEW IN : SPRING SUMMER 2023</ParagraghTitle>
                        <ParagraghBody>
                          Leave your heavy outer behind, it's time for lighter layers and
                          brighter colors. Get a head start on your spring wardrobe with
                          12 brand new styles from trending K-brands.
                        </ParagraghBody>
                    </ParagraphOne>
                  </a>
                </OneRightInfoUp>
                <OneRightInfoDown>

                </OneRightInfoDown>
              </SectionOneRightInfo>
            </SectionOne>

          </MidInfo>
        </MidWrapper>
      </MainWrapper>
    </MainContainer>
  );
};

export default HeroPage;
