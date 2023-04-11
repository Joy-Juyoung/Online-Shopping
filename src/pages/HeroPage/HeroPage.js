import React, { useEffect, useState } from 'react';
import { ButtonSmall } from '../../components/ButtonElements';
import {
  MainContainer,
  MainWrapper,
  MidInfo,
  SectionInfo,
  FirstImg,
  ParagraghTitle,
  ParagraghBody,
  ParagraphWrap,
  SectionInfoLeft,
  SectionInfoRight,
  SectionWrap,
  ShopNowBtn,
  SectionWrapTwo,
} from './HeroElements';
import FirstImage from '../../asset/firstimage.png';
import SecondImage from '../../asset/couple.png';
import ThirdImage from '../../asset/fashion.png';
import FourthImage from '../../asset/newjeans.png';

import Loading from '../../components/Loading';

const HeroPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <MainContainer>
      <MainWrapper>
        <MidInfo>
          <SectionWrap className='start__left'>
            <SectionInfoLeft>
              <FirstImg src={FirstImage} />
            </SectionInfoLeft>
            <SectionInfoRight>
              <ParagraphWrap>
                <ParagraghTitle>NEW IN : SPRING SUMMER 2023</ParagraghTitle>
                <ParagraghBody>
                  Leave your heavy outer behind, it's time for lighter layers
                  and brighter colors. Get a head start on your spring wardrobe
                  with 12 brand new styles from trending K-brands.
                </ParagraghBody>
              </ParagraphWrap>
              <ButtonSmall to='/products'>Shop Now</ButtonSmall>
            </SectionInfoRight>
          </SectionWrap>

          <SectionWrap className='start__right'>
            <SectionInfoRight>
              <FirstImg src={SecondImage} />
            </SectionInfoRight>

            <SectionInfoLeft>
              <ParagraphWrap>
                <ParagraghTitle>FOCUS: SWEATSHIRTS</ParagraghTitle>
                <ParagraghBody>
                  Sweatshirts are perfect for the weather. Meet sweatshirts at
                  MUSINSA up to 60% discount rates.
                </ParagraghBody>
              </ParagraphWrap>

              <ButtonSmall to='/products'>Shop Now</ButtonSmall>
            </SectionInfoLeft>
          </SectionWrap>

          {/* <SectionWrap>
            <SectionInfoLeft>
              <FirstImg src={ThirdImage} />
            </SectionInfoLeft>
            <SectionInfoRight>
              <ParagraphWrap>
                <ParagraghTitle>Milan Fashion Week Highlights</ParagraghTitle>
                <ParagraghBody>
                  SPOTTED: The hottest street fashion highlights, just in from
                  Milan Fashion Week.
                </ParagraghBody>
              </ParagraphWrap>
              <ShopNowBtn>
                <ButtonSmall to='/products'>Shop Now</ButtonSmall>
              </ShopNowBtn>
            </SectionInfoRight>
          </SectionWrap>

          <SectionWrap>
            <SectionInfoRight>
              <FirstImg src={FourthImage} />
            </SectionInfoRight>
            <SectionInfoLeft>
              <ParagraphWrap>
                <ParagraghTitle>
                  OMG! NewJeans checked in at MUSINSA!
                </ParagraghTitle>
                <ParagraghBody>
                  NewJeans show off their Gen Z version of office-wear. Take
                  notes on how the rookie group styled themselves for their
                  special day at the office!
                </ParagraghBody>
              </ParagraphWrap>
              <ShopNowBtn>
                <ButtonSmall to='/products'>Shop Now</ButtonSmall>
              </ShopNowBtn>
            </SectionInfoLeft>
          </SectionWrap> */}
        </MidInfo>
      </MainWrapper>
    </MainContainer>
  );
};

export default HeroPage;
