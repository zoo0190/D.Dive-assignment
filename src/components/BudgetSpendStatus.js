import React from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Progress } from 'antd';

const Container = styled.div`
  padding: 10px 16%;
  height: 100%;
`;

const Title = styled.div`
  margin: 5px 0;
  font-weight: 700;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalCard = styled.div`
  display: flex;
  width: 49.5%;
  height: 100%;
  background-color: white;
  border: 1px solid #f2f3f5;
`;

const DonutChartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 60%;
  padding: 20px;
  border-right: 1px solid #f2f3f5;
`;

const BudgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
`;

const BudgetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 33%;
  :nth-child(2) {
    border-top: 1px solid #f2f3f5;
    border-bottom: 1px solid #f2f3f5;
  }
`;

const BudgetInfoTitle = styled.span`
  font-size: 12px;
  color: #868e96;
  margin-bottom: 2px;
`;

const BudgetInfoPrice = styled.span`
  font-weight: 700;
`;

const TargetCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 32px;
  width: 49.5%;
  background-color: white;
`;

const TargetWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const TargetTitle = styled.span`
  color: #1790ff;
  font-weight: 800;
  font-size: 12px;
`;

const TargetTotal = styled.span`
  font-weight: 600;
  font-size: 11px;
`;

const TargetSpend = styled.span`
  font-size: 11px;
  font-weight: 400;
`;

const TargetRemain = styled.span`
  font-size: 11px;
  color: #868e96;
`;

const BudgetSpendStatus = ({
  totalBudget,
  totalSpend,
  targetBudget,
  targetSpend,
  title,
}) => {
  const totalExcution = +((totalSpend / totalBudget) * 100).toFixed(2);
  const targetExcution = +((targetSpend / targetBudget) * 100).toFixed(2);
  return (
    <Container>
      <Title>예산 소진 현황</Title>
      <CardWrapper>
        <TotalCard>
          <DonutChartWrapper>
            <Progress
              type="circle"
              percent={totalExcution}
              format={percent => (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      marginBottom: '3px',
                      color: '#868e96',
                    }}
                  >
                    집행률
                  </span>
                  <span style={{ fontSize: '24px' }}>{percent}%</span>
                </div>
              )}
            />
          </DonutChartWrapper>
          <BudgetWrapper>
            <BudgetInfo>
              <BudgetInfoTitle>총 예산</BudgetInfoTitle>
              <BudgetInfoPrice>
                ₩{totalBudget.toLocaleString('en')}
              </BudgetInfoPrice>
            </BudgetInfo>
            <BudgetInfo>
              <BudgetInfoTitle>집행예산 · {totalExcution}%</BudgetInfoTitle>
              <BudgetInfoPrice>
                ₩{totalSpend.toLocaleString('en')}
              </BudgetInfoPrice>
            </BudgetInfo>
            <BudgetInfo>
              <BudgetInfoTitle>
                잔여 예산 · {(100 - totalExcution).toFixed(2)}%
              </BudgetInfoTitle>
              <BudgetInfoPrice>
                ₩{(totalBudget - totalSpend).toLocaleString('en')}
              </BudgetInfoPrice>
            </BudgetInfo>
          </BudgetWrapper>
        </TotalCard>
        <TargetCard>
          <TargetWrapper>
            <TargetTitle>{title}</TargetTitle>
            <TargetTotal>
              총 예산 ₩{targetBudget.toLocaleString('en')}
            </TargetTotal>
          </TargetWrapper>
          <Progress percent={targetExcution} showInfo={false} />
          <TargetWrapper>
            <TargetSpend>
              ₩{targetSpend.toLocaleString('en')} {`(${targetExcution}%)`}
            </TargetSpend>
            <TargetRemain>
              ₩{(targetBudget - targetSpend).toLocaleString('en')}
              {`(${(100 - targetExcution).toFixed(2)}%)`}
            </TargetRemain>
          </TargetWrapper>
        </TargetCard>
      </CardWrapper>
    </Container>
  );
};

export default BudgetSpendStatus;
