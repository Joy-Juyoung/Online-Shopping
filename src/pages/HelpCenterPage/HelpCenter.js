import React from 'react'
import { 
    DetailThreeLists,
    DetailInfoList,
    DetailSearchBar,
    DetailSearchIcon,
    GotoLink,
            HelpCenterBottom,
            HelpCenterContainer,
            HelpCenterHeaderNav,
            HelpCenterHeaderWrap, 
            HelpCenterMid, 
            HelpCenterTop, 
            HelpCenterWrapper, 
            InfoLists, 
            InfoListsDetail, 
            InfoListWrap, 
            ListDetailInfo, 
            MainLink,
            MidOneDetail,
            MidOneWrap,
            MidTwoInfo,
            MidTwoInfoWrap,
            MidTwoWrap,
            MyRequestLink,
            OneDetailInfo,
            SideBtnWrap,
            SubmitRequestBtn,    
            TopDetailOne,    
            TopDetailThree,    
            TopDetailTwo,    
            TopDetailTwoWrap,    
            TopDetailWrap,
            CenterBottomWrap,
            BottomInfoWrap,
            BottomLeftInfo,
            BottomRightInfo,
            LeftInfoDetail,
            InfoListDetail,
            DetailDescription,
            DescriptionInfo,
            InfoMoreWrap,
            RightDetailInfo,
            HelpCenterFooterWrapper,
            FooterContainer,
            FooterNav,
            FooterLink
        } from './HelpCenterElement';
import SearchIcon from '@mui/icons-material/Search';

function HelpCenter() {
  return (
    <HelpCenterContainer>
        <HelpCenterHeaderWrap>
            <HelpCenterHeaderNav>
                <MainLink to='/'>
                    <span>
                        BlanketCLoset HelpCenter
                    </span> 
                </MainLink>
                <SideBtnWrap>
                    <GotoLink to='/'>
                        <span>
                            Go to BlanketCLoset
                        </span> 
                    </GotoLink>
                    <MyRequestLink to='/'>
                        <span>
                            My Request
                        </span> 
                    </MyRequestLink>
                    <SubmitRequestBtn>
                        <span>
                            Submit a request
                        </span> 
                    </SubmitRequestBtn>
                </SideBtnWrap>
            </HelpCenterHeaderNav>
        </HelpCenterHeaderWrap>
        <HelpCenterWrapper>
            <HelpCenterTop>
                <TopDetailWrap>
                    <TopDetailOne>
                        <h1>BlanketCLoset Help Center</h1>
                    </TopDetailOne>
                    <TopDetailTwo>
                        <DetailSearchBar>
                            <input placeholder='Search by keyword'/>
                        </DetailSearchBar>
                        <DetailSearchIcon>
                            <SearchIcon fontSize='medium'/>
                        </DetailSearchIcon>
                    </TopDetailTwo>
                    <TopDetailThree>
                        <DetailThreeLists>
                            <p>Popular keywords</p>
                            <p>Ganadara</p>
                            <p>Help Me</p>
                            <p>Basic</p>
                            <p>How to make 족발</p>
                        </DetailThreeLists>
                    </TopDetailThree>
                </TopDetailWrap>
                <TopDetailTwoWrap/>
            </HelpCenterTop>

            <HelpCenterMid>
                <MidOneWrap>
                    <MidOneDetail>
                        <OneDetailInfo>
                            <DetailInfoList>
                                <InfoListWrap>
                                    <h2>Need more information?</h2>
                                    <p>Click here to submit a request</p>
                                </InfoListWrap>
                            </DetailInfoList>
                        </OneDetailInfo>
                    </MidOneDetail>
                </MidOneWrap>
                <MidTwoWrap>
                    <MidTwoInfo>
                        <MidTwoInfoWrap>
                            <InfoLists>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Returns & Refunds</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Delivery & Orders</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Items & Stock Availability</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Payment & Pricing</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Account & Security</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Benefits & Rewards</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                                <InfoListsDetail>
                                    <ListDetailInfo>
                                        <h2>Others</h2>
                                    </ListDetailInfo>
                                </InfoListsDetail>
                            </InfoLists>
                        </MidTwoInfoWrap>
                    </MidTwoInfo>
                </MidTwoWrap>
            </HelpCenterMid>
            <HelpCenterBottom>
                <CenterBottomWrap>
                    <BottomInfoWrap>
                        <BottomLeftInfo>
                            <LeftInfoDetail>
                                <h1>FAQ</h1>
                                <InfoListDetail>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Why is my order not updating?</span>
                                            <span>04/05/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Are duties and taxes included in the purchasi...</span>
                                            <span>03/09/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Where can I ask questions about an item?</span>
                                            <span>01/11/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>What should I do if I received a damaged, def...</span>
                                            <span>01/11/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>What should I do if I only received a part of...</span>
                                            <span>01/11/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Can I get a refund?</span>
                                            <span>01/11/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>How do I return my item?</span>
                                            <span>01/09/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                </InfoListDetail>
                                <InfoMoreWrap>
                                    + More
                                </InfoMoreWrap>                       
                            </LeftInfoDetail>
                        </BottomLeftInfo>
                        <BottomRightInfo>
                            <RightDetailInfo>
                                <h1>NOTICE</h1>
                                <InfoListDetail>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Change in Privacy Policy Effective from Mar....</span>
                                            <span>03/21/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>How do I use the Help Center?</span>
                                            <span>03/21/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Is there anything I need to know regarding th...</span>
                                            <span>03/21/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>How do I fill out the order form?</span>
                                            <span>03/21/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>
                                    <DetailDescription>
                                        <DescriptionInfo>
                                            <span>Act on Specified Commercial Transactions</span>
                                            <span>03/21/2023</span>
                                        </DescriptionInfo>
                                    </DetailDescription>                                                                       
                                    </InfoListDetail>
                                    <InfoMoreWrap>
                                        + More
                                    </InfoMoreWrap>  
                            </RightDetailInfo>
                        </BottomRightInfo>
                    </BottomInfoWrap>
                </CenterBottomWrap>
            </HelpCenterBottom>    
        </HelpCenterWrapper>
        <HelpCenterFooterWrapper>
            <FooterContainer>
                <FooterNav>
                    <FooterLink to='/'>Go to BlanketCLoset</FooterLink>
                </FooterNav>
            </FooterContainer>
        </HelpCenterFooterWrapper>
    </HelpCenterContainer>
  )
}

export default HelpCenter;