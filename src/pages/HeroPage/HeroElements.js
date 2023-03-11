import styled from 'styled-components';

export const MainContainer = styled.div`
min-height: 100%;
    font-family: proximanova, -apple-system, BlinkMacSystemFont, "Noto Sans", "Segoe UI", Roboto, system-ui, "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: rgb(10, 15, 24);
`;

export const MainWrapper = styled.div`

`;

export const TopWrapper = styled.div`

`;

export const FreeInfo = styled.div`
    min-height: 40px;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    grid-template-columns: 100%;
    padding: 3px 12px;
    background-color: rgb(10, 15, 24);
    box-sizing: border-box;
`;

export const FreeInfoTitle = styled.div`
position: relative;
    grid-row-start: 1;
    grid-column-start: 1;
    height: auto;
    transition-property: z-index;
    display: block;
    animation: 0.5s linear 1s 1 normal both running lbWRkT;
    transition-delay: 1s;
    z-index: 1;
    p{
        max-width: 1240px;
        margin: 0px auto;
        font-size: 16px;
        line-height: 24px;
        display: block;
        font-weight: 400;
        color: #ffffff;
        text-align: center;
        word-break: keep-all;
    }
`; 

export const MidWrapper = styled.div`

`;

export const MidInfo = styled.div`
    padding-bottom: 120px;
`;

export const SectionOne = styled.section`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1280px;
    margin: 50px auto 0px;
    padding: 0px 20px;
    box-sizing: border-box;
`;

export const SectionOneLeftInfo = styled.div`
    flex-shrink: 0;
    padding-bottom: 58.96%;
    width: calc(50% - 8px);
    display: block;
    background-color: rgb(255, 255, 255);
    position: relative;
    z-index: 1;
    
    a {
        text-Decoration: none;
        color: black;
    }
`;

export const FirstImg = styled.img`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: multiply;
    border: none;
    line-height: 0;
    vertical-align: top;

`;

export const SectionOneRightInfo = styled.div`
    padding: 0px;
    margin-left: 50px;

`;

export const OneRightInfoUp = styled.div`
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    padding-top: 0px;
    text-align: left;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 20;
    transform: translate(0px);
    background-color: rgb(255, 255, 255);

    a {
        text-Decoration: none;
        color: black;
    }

`;

export const ParagraphOne = styled.div`
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box; 

`;
export const ParagraghTitle= styled.h2`
    font-size: 56px;
    line-height: 67px;
    word-break: break-word;
    font-family: SuisseWorks;
`;

export const ParagraghBody = styled.p`
        margin-top: 32px;
        font-size: 20px;
        font-weight: 400px;
        line-height: 26px; 

`;

export const OneRightInfoDown = styled.div`


`;

