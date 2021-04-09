import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  padding: 10px 16%;
  margin: 0;
  background-color: rgb(217, 217, 214);
  font-size: 8px;
`;

const UpdateDay = styled.span`
  font-weight: 700;
`;

const Info = styled.span``;

const InfoBar = ({ updateDay }) => {
  return (
    <Container>
      <UpdateDay>{updateDay} 기준</UpdateDay>
      <Info>하기 데이터는 모두 1시간 주기로 업데이트 됩니다.</Info>
    </Container>
  );
};

export default InfoBar;
