import React from 'react';
import styled from 'styled-components';
import HighlightTable from './HighlightTable';

const Container = styled.div`
  padding: 10px 16%;
`;

const Title = styled.div`
  margin: 5px 0;
  font-weight: 700;
`;

const Highlight = ({ campaignList }) => {
  return (
    <Container>
      <Title>캠폐인 주요 지표 하이라이트</Title>
      {campaignList.map(value => (
        <HighlightTable key={value.campaign_group_id} value={value} />
      ))}
    </Container>
  );
};

export default Highlight;
