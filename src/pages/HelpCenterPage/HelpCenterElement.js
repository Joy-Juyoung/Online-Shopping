import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HelpCenterContainer = styled.div`
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    z-index: 0;
    display: flex !important;
    flex-direction: column;
    flex: 1;
`;

export const HelpCenterHeaderWrap = styled.header`
    display: block !important;
    border-bottom: 1px solid rgba(193, 196, 201, 1);
    height: 72px;
    background-color: rgba(255, 255, 255, 1);
    position: relative;
    visibility: visible;
`;

export const HelpCenterHeaderNav = styled.nav`
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 2rem;
`;

export const MainLink = styled(Link)`
    margin-right: auto;
    color: rgba(10, 15, 24, 1);
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    span {
        height: 20px;
        max-width: 100%;
        display: block !important;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex !important;
    justify-content: flex-end;
    font-size: 0.9375rem;
    position: revert;
    top: auto;
    bottom: auto;
    padding: 0;
    flex-direction: row;
    flex-wrap: wrap;
    width: auto;
    text-align: left;
    max-width: none;
    background-color: transparent;
    box-shadow: none;

`;
export const GotoLink = styled(Link)`
    color: rgba(10, 15, 24, 1);
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
    align-items: center;
    display: inline-flex;
    cursor: pointer;
    span {
        height: 20px;
        max-width: 100%;
        display: block !important;
    }
`;

export const MyRequestLink = styled(Link)`
    color: rgba(10, 15, 24, 1);
    display: inline-flex;
    padding: 0.5em 1em;
    text-decoration: none;
    cursor: pointer;
    align-items: center;

    span {
        height: 20px;
        max-width: 100%;
        display: block !important;
    }
`;

export const SubmitRequestBtn = styled.button`
    margin-top: 0;
    margin: 0.5rem;
    color: rgba(10, 15, 24, 1);
    border-color: rgba(10, 15, 24, 1);
    display: inline-block;
    padding: 0.5em 1.25em;
    line-height: 1.5;
    color: rgba(10, 15, 24, 1);
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid rgba(193, 196, 201, 1);
    cursor: pointer;
`;

export const HelpCenterWrapper = styled.main`
    display: block;
    flex-grow: 1;
`;

export const HelpCenterTop = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 1);
`;

export const TopDetailWrap = styled.div`
    padding-bottom: 4rem;
    padding-top: 4rem;
    position: relative;
    max-width: 1140px;
    z-index: 30;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 2rem;
`;

export const TopDetailTwoWrap = styled.div`
    background: radial-gradient(rgba(10, 15, 24, 1), rgba(10, 15, 24, 1));
    z-index: 10;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;

export const TopDetailOne = styled.div`
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: left;
    
    h1 {
        color: rgba(255, 255, 255, 1);
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        font-size: 2.25rem;
        font-weight: 600;
    }
`;

export const TopDetailTwo = styled.div`
    margin-bottom: 1rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    position: relative;
    color: rgba(10, 15, 24, 1);
`;

export const DetailSearchBar = styled.form`
    display: flex;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    margin-bottom: 0;

    input {
            padding-right: 2.5em;
            padding: 0.675em 1em;
            margin: 0 0.5rem;
            border-radius: 4px;
            color: inherit;
            border: 1px solid rgba(193, 196, 201, 1);
            background-color: #fff;
            width: 100%;
        }
`;

export const DetailSearchIcon = styled.div`
    right: 0;
    overflow: hidden;       
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 1em;
    margin-right: 1em;
    bottom: -0.125em;
    display: inline-block;
    width: 1em;
    line-height: 1;
`;

export const TopDetailThree = styled.div`

`;

export const DetailThreeLists = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    display: flex !important;
    flex-wrap: wrap;

    p{
        margin: 0.25rem;
        font-weight: 600;
    }
`;

export const HelpCenterMid = styled.div`
    display: flex !important;
    flex-direction: column;
    position: relative;
    z-index: 40;
`;

export const MidOneWrap = styled.div`
    background-color: rgba(242, 244, 247, 1);

`;


export const MidOneDetail = styled.div`
    padding-bottom: 1rem;
    padding-top: 1rem;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 2rem;
`;

export const OneDetailInfo = styled.ul`
    margin-top: 2rem;
    margin-bottom: 0;
    justify-content: flex-start;
    text-align: center;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    list-style: none;
`;

export const DetailInfoList = styled.li`
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-bottom: 1rem;
    flex: 0 0 100%;
    max-width: 100%;
`;

export const InfoListWrap = styled.div`
    height: 100%;
    padding: 2rem;
    background-color: #fff;
    color: rgba(10, 15, 24, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(193, 196, 201, 1);
    border-radius: 4px;

    h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: rgba(10, 15, 24, 1)
    }

    p{
        margin-bottom: 0.5rem;
        margin-top: 0.5rem
    }
`;

export const MidTwoWrap = styled.div`
    background-color: #fff;

`;

export const MidTwoInfo = styled.div`
    padding-bottom: 1rem;
    padding-top: 1rem;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    max-width: 1140px;
    padding:2rem;
`;


export const MidTwoInfoWrap = styled.div`
    text-align: center;
`;



export const InfoLists = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    margin-right: -1rem;
    margin-left: -1rem;
`;

export const InfoListsDetail = styled.div`
    margin-bottom: 1.5rem;
    flex: 0 0 20%;
    max-width: 20%;
    position: relative;
    padding-right: 1rem;
    padding-left: 1rem;
    width: 100%;
    min-height: 1px;
    min-width: 0;
`;

export const ListDetailInfo = styled.div`
    height: 100%;
    padding: 1.5rem 1.25rem;
    background-color: #fff;
    color: rgba(10, 15, 24, 1);
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(193, 196, 201, 1);
    border-radius: 4px;

    h2 {
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        color: rgba(10, 15, 24, 1);
    }
`;


export const HelpCenterBottom = styled.div`
    flex-direction: column;
    position: relative;
    display: flex !important;
    z-index: 40;
`;

export const  CenterBottomWrap = styled.div`
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 0 2rem;
`;

export const BottomInfoWrap = styled.div`
    text-align: left;
    margin-right: -0.75rem;
    margin-left: -0.75rem;
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
`;


export const BottomLeftInfo = styled.div`
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-bottom: 1.5rem;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const LeftInfoDetail = styled.div`
    height: 100%;
    padding-bottom: 3rem;
    padding: 1.5rem;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(193, 196, 201, 1);
    border-radius: 4px;
`;

export const InfoListDetail = styled.ul`
    padding: 0 0 0 1.5rem;
    margin: 0 0 1rem;
`;

export const DetailDescription = styled.li`

`;

export const DescriptionInfo = styled.div`
    justify-content: space-between;
    display: flex !important;
`;

export const InfoMoreWrap = styled.div`
    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
    width: 100%;
    text-align: right;

`;


export const BottomRightInfo = styled.div`
    padding-right: 0.75rem;
    padding-left: 0.75rem;
    margin-bottom: 1.5rem;
    flex: 0 0 50%;
    max-width: 50%;
`;

export const RightDetailInfo = styled.div`
    height: 100%;
    padding-bottom: 3rem;
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-clip: border-box;
    border: 1px solid rgba(193, 196, 201, 1);
    border-radius: 4px;
    background-color: #fff;
    color: rgba(10, 15, 24, 1);
`;

export const HelpCenterFooterWrapper = styled.footer`
    margin-top: 2rem;
    border-top: 1px solid rgba(193, 196, 201, 1);
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    display: block;
`;

export const FooterContainer = styled.div`
    padding-bottom: 3rem;
    padding-top: 3rem;
    max-width: 1140px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    padding: 2rem;
`;

export const FooterNav = styled.nav`
    justify-content: space-between;
    font-size: 0.9375rem;
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
`;

export const FooterLink = styled(Link)`
    color: rgba(10, 15, 24, 1);
    display: block;
    padding: 0.5em 1em;
    text-decoration: none;
`;