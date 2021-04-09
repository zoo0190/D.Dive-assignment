import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dashboardApi } from 'api';
import NavBar from './NavBar';
import InfoBar from './InfoBar';
import BudgetSpendStatus from './BudgetSpendStatus';
import Highlight from './Highlight';
import KpiChart from './KpiChart';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

let cycle = 1;

const App = () => {
  const [dashboard, setDashboard] = useState('');

  async function apiCall() {
    const data = await dashboardApi();
    const result = data['data']['data'];
    cycle = cycle + 1;
    setDashboard(result);
  }

  useEffect(() => {
    let oneHour = setInterval(apiCall, 1000 * 60 * 60);
    try {
      apiCall();
    } catch (e) {
      console.log(e);
    }
    return () => {
      return oneHour;
    };
  }, []);

  const {
    project_name,
    updated_date,
    budge,
    group_campaign_list,
    daily_campaign_group_list,
  } = dashboard;
  const changeValue = parseInt(cycle % 2);

  return (
    <>
      {!dashboard && <div>Loading...</div>}
      {dashboard && (
        <Container>
          <NavBar name={project_name} />
          <InfoBar updateDay={updated_date} />
          <BudgetSpendStatus
            title={changeValue === 1 ? 'facebook' : 'google'}
            totalBudget={budge.total_budget}
            totalSpend={budge.total_spend}
            targetBudget={
              changeValue === 1 ? budge.facebook_budget : budge.google_budget
            }
            targetSpend={
              changeValue === 1 ? budge.facebook_spend : budge.google_spend
            }
          />
          <Highlight campaignList={group_campaign_list} />
          <KpiChart dailyList={daily_campaign_group_list} />
        </Container>
      )}
    </>
  );
};

export default App;
