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
import axios from '../../api/axios';

const HeroPage = ({ meData, catData }) => {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const itemsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setItems(itemsList?.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  console.log('category', catData);

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
                <Link to='/products/all'>
                  <ButtonSmall>Shop Now</ButtonSmall>
                </Link>
              </ParagraphWrap>
            </SectionInfoRight>
          </SectionWrap>
        </MidInfo>
        <MidInfo>
          <SectionTitle>Most Popular</SectionTitle>
          <SectionProducts>
            <Slider items={items.filter((item, idx) => idx < 9)} />
          </SectionProducts>
          <SectionButton>
            <Link to='/products/all'>
              <ButtonSmall>Shop Now</ButtonSmall>
            </Link>
          </SectionButton>
        </MidInfo>
        <MidInfo>
          <SectionTitle>Top Categories</SectionTitle>
          <SectionCategories>
            {catData?.map((cat) => {
              return (
                <CategoriesWrap key={cat?.pk}>
                  <Link to={`/products/category/${cat.pk}`}>
                    <span>{cat?.productKinds[1]?.name}</span>
                  </Link>
                </CategoriesWrap>
              );
            })}
          </SectionCategories>
        </MidInfo>
        <MidInfo>
          <SectionTitle>New Arrival</SectionTitle>
          <SectionProducts>
            <Slider items={items?.reverse().filter((item, idx) => idx < 9)} />
          </SectionProducts>
          <SectionButton>
            <Link to='/products/all'>
              <ButtonSmall>Shop now</ButtonSmall>
            </Link>
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
