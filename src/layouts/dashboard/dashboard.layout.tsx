import { PageLayout, DashboardArea } from 'components';

import * as s from './dashboard.layout.styles';

const DashboardLayout = () => {
  return (
    <PageLayout title="Dashboard — Bankme Tech" showHeader>
      <s.Wrapper>
        <h1>Dashboard</h1>
        <DashboardArea />
      </s.Wrapper>
    </PageLayout>
  );
};

export { DashboardLayout };
