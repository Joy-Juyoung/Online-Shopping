import React from 'react';
import { ButtonSmall } from '../../components/ButtonElements';
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
  ParagraghBody,
  SectionTwo,
  SectionTwoWrapper,
  SectionTwoLeftInfo,
  SectionTwoRightInfo,
  TwoLeftInfoUp,
  TwoLeftInfoDown,
  ParagraghTwoTitle,
  ParagraghTwoBody,
  SecondImg,
  SectionThree,
  SectionThreeWrapper,
  SectionThreeLeftInfo,
  ThirdImg,
  SectionThreeRightInfo,
  ThreeRightInfoUp,
  ThreeRightInfoDown,
  ParagraghThreeTitle,
  ParagraghThreeBody,
  SectionFour,
  SectionFourWrapper,
  SectionFourLeftInfo,
  FourLeftInfoUp,
  FourLeftInfoDown,
  ParagraghFourTitle,
  ParagraghFourBody ,
  SectionFourthRightInfo,
  FourthImg

} from './HeroElements';
import FirstImage from '../../asset/firstimage.png';
import SecondImage from '../../asset/couple.png';
import ThirdImage from '../../asset/fashion.png';
import FourthImage from '../../asset/newjeans.png';


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
                      <ParagraghTitle>
                        NEW IN : SPRING SUMMER 2023
                      </ParagraghTitle>
                      <ParagraghBody>
                        Leave your heavy outer behind, it's time for lighter layers and
                        brighter colors. Get a head start on your spring wardrobe with
                        12 brand new styles from trending K-brands.
                      </ParagraghBody>
                    </ParagraphOne>
                  </a>
                </OneRightInfoUp>
                <OneRightInfoDown>
                  <ButtonSmall>Shop Now</ButtonSmall>
                </OneRightInfoDown>
              </SectionOneRightInfo>
            </SectionOne>

            <SectionTwo>
              <SectionTwoWrapper>
                <SectionTwoLeftInfo>
                  <TwoLeftInfoUp>
                      <a 
                        href='https://www.youtube.com/musinsatv/'>
                          <ParagraghTwoTitle>
                            FOCUS: SWEATSHIRTS
                          </ParagraghTwoTitle>
                          <ParagraghTwoBody>
                            Sweatshirts are perfect for the weather. Meet sweatshirts at MUSINSA up to 60% discount rates.
                          </ParagraghTwoBody>
                      </a>
                    </TwoLeftInfoUp>
                    <TwoLeftInfoDown>
                      <ButtonSmall>Shop Now</ButtonSmall>
                    </TwoLeftInfoDown>
                </SectionTwoLeftInfo>

                <SectionTwoRightInfo>
                  {/* 추후 링크로 변경  */}
                  <a 
                  href='https://www.youtube.com/musinsatv/'>
                  <SecondImg src={SecondImage} />
                  </a>
                </SectionTwoRightInfo>
              </SectionTwoWrapper>
            </SectionTwo>

            <SectionThree>
              <SectionThreeWrapper>
                <SectionThreeRightInfo>
                    <ThreeRightInfoUp>
                        <a 
                          href='https://www.youtube.com/musinsatv/'>
                            <ParagraghThreeTitle>
                              Milan Fashion Week Highlights
                            </ParagraghThreeTitle>
                            <ParagraghThreeBody>
                              SPOTTED: The hottest street fashion highlights, just in from Milan Fashion Week.
                            </ParagraghThreeBody>
                        </a>
                      </ThreeRightInfoUp>
                      <ThreeRightInfoDown>
                        <ButtonSmall>Shop Now</ButtonSmall>
                      </ThreeRightInfoDown>
                </SectionThreeRightInfo>
                <SectionThreeLeftInfo>
                    {/* 추후 링크로 변경  */}
                    <a 
                    href='https://www.youtube.com/musinsatv/'>
                    <ThirdImg src={ThirdImage} />
                    </a>
                </SectionThreeLeftInfo>
              </SectionThreeWrapper>
            </SectionThree>

            <SectionFour>
              <SectionFourWrapper>
                <SectionFourLeftInfo>
                  <FourLeftInfoUp>
                      <a 
                        href='https://www.youtube.com/musinsatv/'>
                          <ParagraghFourTitle>
                            OMG! NewJeans checked in at MUSINSA!
                          </ParagraghFourTitle>
                          <ParagraghFourBody >
                            NewJeans show off their Gen Z version of office-wear. Take notes on how the rookie group styled themselves for their special day at the office!
                          </ParagraghFourBody>
                      </a>
                    </FourLeftInfoUp>
                    <FourLeftInfoDown>
                      <ButtonSmall>Shop Now</ButtonSmall>
                    </FourLeftInfoDown>
                </SectionFourLeftInfo>

                <SectionFourthRightInfo>
                  {/* 추후 링크로 변경  */}
                  <a 
                  href='https://www.youtube.com/musinsatv/'>
                  <FourthImg src={FourthImage} />
                  </a>
                </SectionFourthRightInfo>
              </SectionFourWrapper>
            </SectionFour>
          </MidInfo>
        </MidWrapper>
      </MainWrapper>
    </MainContainer>
  );
};

export default HeroPage;
