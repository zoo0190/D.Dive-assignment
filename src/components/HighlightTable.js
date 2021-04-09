import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Progress } from 'antd';

const Container = styled.div`
  margin: 10px 0;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  width: 100%;
  font-size: 0.5rem;
`;

const CamPaignName = styled.span``;

const TimeWarpper = styled.div``;

const Time = styled.span``;

const ContentsWarpper = styled.div`
  display: flex;
  flex-basis: 33%;
`;

const TargetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  background-color: white;
  border-top: 1px solid #f2f3f5;
  :nth-child(1) {
    padding: 12px;
  }
  :nth-child(2) {
    border-left: 1px solid #f2f3f5;
    border-right: 1px solid #f2f3f5;
    padding: 0 24px;
  }
`;

const TargetWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.justify ? 'space-between' : 'center')};
  width: 100%;
  font-size: 11px;
`;

const TargetTotal = styled.span``;

const TargetSpend = styled.span`
  color: #868e96;
`;

const TargetRemain = styled.span`
  color: #868e96;
`;

const TargetTitle = styled.span``;

const TargetIndicatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 11px;
  margin-top: 6px;
`;

const TargetIndicatorTitle = styled.span`
  margin-bottom: 6px;
`;

const TargetIndicatorValue = styled.span`
  color: #868e96;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const HighlightTable = ({ value }) => {
  const {
    campaign_group_name,
    budge,
    indicator,
    thirdparty_indicator_list,
  } = value;
  const spend = indicator[0].value;
  const rest = budge - spend;
  const rate = ((spend / budge) * 100).toFixed(2);

  return (
    <Container>
      <HeaderWrapper>
        <CamPaignName>{campaign_group_name}</CamPaignName>
        <TimeWarpper>
          <Time>
            집행기간 {value.start_time.split(' ')[0]} -{' '}
            {value.stop_time.split(' ')[0]}
          </Time>
        </TimeWarpper>
      </HeaderWrapper>
      <ContentsWarpper>
        <TargetCard>
          <TargetWrapper justify={false}>
            <TargetTotal>총 예산 ₩{budge.toLocaleString('en')}</TargetTotal>
          </TargetWrapper>
          <Progress percent={rate} showInfo={false} />
          <TargetWrapper justify>
            <TargetSpend>₩{spend.toLocaleString('en')}</TargetSpend>
            <TargetRemain>₩{rest.toLocaleString('en')}</TargetRemain>
          </TargetWrapper>
        </TargetCard>
        <TargetCard>
          <TargetWrapper justify={false}>
            <TargetTitle>매체 성과 보고서 기준</TargetTitle>
          </TargetWrapper>
          <Wrapper>
            <TargetIndicatorWrapper>
              <TargetIndicatorTitle>INSTALLS</TargetIndicatorTitle>
              <TargetIndicatorValue>
                {indicator[1].value.toLocaleString('en')}건
              </TargetIndicatorValue>
            </TargetIndicatorWrapper>
            <TargetIndicatorWrapper>
              <TargetIndicatorTitle>CPI</TargetIndicatorTitle>
              <TargetIndicatorValue>
                {`₩${(+indicator[2].value.toFixed(0)).toLocaleString('en')}`}
              </TargetIndicatorValue>
            </TargetIndicatorWrapper>
          </Wrapper>
        </TargetCard>
        <TargetCard>
          <TargetWrapper justify={false}>
            <TargetTitle>3rd Party 보고서 기준</TargetTitle>
          </TargetWrapper>
          <Wrapper>
            <TargetIndicatorWrapper>
              <TargetIndicatorTitle>INSTALLS</TargetIndicatorTitle>
              <TargetIndicatorValue>
                {thirdparty_indicator_list[0].value === null
                  ? '-'
                  : `${thirdparty_indicator_list[0].value.toLocaleString(
                      'en'
                    )}건`}
              </TargetIndicatorValue>
            </TargetIndicatorWrapper>
            <TargetIndicatorWrapper>
              <TargetIndicatorTitle>REVENUE</TargetIndicatorTitle>
              <TargetIndicatorValue>
                {thirdparty_indicator_list[1].value === null
                  ? '-'
                  : `₩${(+thirdparty_indicator_list[1].value.toFixed(
                      0
                    )).toLocaleString('en')}`}
              </TargetIndicatorValue>
            </TargetIndicatorWrapper>
          </Wrapper>
        </TargetCard>
      </ContentsWarpper>
    </Container>
  );
};

export default HighlightTable;
