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
  Sectiontrending,
  SectionTrending,
  TrendingWrap,
  SectionCategories,
  CategoriesWrap,
  SectionButton,
  SectionProducts,
  ProductsWrap,
  SectionTitle,
} from './HeroElements';
import FirstImage from '../../asset/pic31.jpg';
import SecondImage from '../../asset/pic20.jpg';
import ThirdImage from '../../asset/pic18.jpg';
import FourthImage from '../../asset/pic24.jpg';

import Loading from '../../components/Loading';
import Slider from './Slider';
import { Link, useNavigate } from 'react-router-dom';

const HeroPage = ({ meData }) => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      await new Promise((r) => setTimeout(r, 1000));
      setLoading(false);
    };
    loadData();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
                <ButtonSmall to='/products'>Shop Now</ButtonSmall>
              </ParagraphWrap>
            </SectionInfoRight>
          </SectionWrap>
        </MidInfo>
        <MidInfo>
          <SectionTitle>Most Popular</SectionTitle>
          <SectionProducts>
            <Slider />
          </SectionProducts>
          <SectionButton>
            <Link to='/products/all'>
              <ButtonSmall>Shop now</ButtonSmall>
            </Link>
          </SectionButton>
        </MidInfo>
        <MidInfo>
          <SectionTitle>Top Categories</SectionTitle>
          <SectionCategories>
            <CategoriesWrap>
              <span>Hoodies</span>
              <span>Coats</span>
              <span>Boots</span>
              <span>Jeans</span>
              <span>Watch</span>
              <span>Joggers</span>
              <span>Jackets</span>
              <span>Sneakers</span>
            </CategoriesWrap>
          </SectionCategories>
        </MidInfo>
        <MidInfo>
          <SectionTitle>New Arrival</SectionTitle>
          <SectionProducts>
            <Slider show={3} infiniteLoop={true} />
          </SectionProducts>
          <SectionButton>
            <ButtonSmall>Shop now</ButtonSmall>
          </SectionButton>
        </MidInfo>
        <MidInfo>
          <SectionTitle>Editor's Pick: Today Street</SectionTitle>
          <SectionTrending>
            <TrendingWrap>
              <div>
                <img src={SecondImage} />
                <p>@Photoby. Lee</p>
              </div>
              <div>
                <img src={ThirdImage} />
                <p>@Photoby. Lee</p>
              </div>
              <div>
                <img src={FourthImage} />
                <p>@Photoby. Lee</p>
              </div>
            </TrendingWrap>
          </SectionTrending>
        </MidInfo>
      </MainWrapper>
    </MainContainer>
  );
};

export default HeroPage;
