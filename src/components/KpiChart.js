import React, { useState } from 'react';
import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Select, Tag } from 'antd';
import { XYPlot, LineSeries, HorizontalGridLines, XAxis } from 'react-vis';
import 'react-vis/dist/style.css';

const Container = styled.div`
  padding: 10px 16%;
`;

const Title = styled.div`
  margin: 5px 0;
  font-weight: 700;
`;

const SelectWrapper = styled.div`
  padding: 10px;
  background-color: white;
`;

const ChartWrapper = styled.div`
  background-color: white;
`;

const KpiChart = ({ dailyList }) => {
  const [indicators, setIndicators] = useState('cpa');
  const { kpi_list, daily_data } = dailyList;

  const options = kpi_list.map(value => {
    const optionObj = {
      value,
    };
    return optionObj;
  });

  function tagRender(props) {
    const color = {
      cpm: 'red',
      cpc: 'orange',
      cpi: 'yellow',
      cpv: 'green',
      cpa: '#3399FF',
      ctr: 'blue',
      itr: '#FFAEBC',
      vtr: '#A0E7E5',
      cvr: '#B4F8C8',
      impressions: '#FBE7C6',
      clicks: '#EEEDE7',
      installs: '#868B8E',
      views: '#E7D2CC',
      actions: '#B9B7BD',
      roas: '#C44B4F',
      reach: '#4C5355',
      spend: '#607D86',
    };

    props['color'] = color[props['value']];

    const { value, closable, onClose } = props;

    return (
      <Tag
        color={props.color}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {value}
      </Tag>
    );
  }

  const data = [
    {
      x: '2020-10-26',
      y: 0,
    },
    {
      x: '2020-10-25',
      y: 12,
    },
    {
      x: '2020-10-24',
      y: 16,
    },
    {
      x: '2020-10-23',
      y: 0,
    },
    {
      x: '2020-10-22',
      y: 12,
    },
    {
      x: '2020-10-21',
      y: 16,
    },
  ];

  return (
    <Container>
      <Title>캠페인 주요 지표 트렌드</Title>
      <SelectWrapper>
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          defaultValue={indicators}
          style={{ width: '40%' }}
          options={options}
          onChange={e => setIndicators(e)}
        />
      </SelectWrapper>
      <ChartWrapper>
        <XYPlot height={300} width={800} xType="ordinal">
          <HorizontalGridLines />
          <XAxis tickLabelAngle={0} />
          <LineSeries data={data} />
        </XYPlot>
      </ChartWrapper>
    </Container>
  );
};

export default KpiChart;
