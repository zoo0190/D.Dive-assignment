import React from 'react';
import { Breadcrumb, Avatar } from 'antd';
import 'antd/dist/antd.css';
import { HomeFilled, DownloadOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
`;

const BreadcrumbWrapper = styled.div`
  span {
    font-size: 8px;
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const DownloadWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const Divider = styled.div`
  width: 1.5px;
  margin: 2px 0;
  margin-right: 6px;
  background: #f2f3f5;
`;

const AvatarWrapper = styled.div``;

const Name = styled.span`
  margin-left: 5px;
  font-weight: 600;
  font-size: 12px;
`;

const NavBar = ({ name }) => {
  return (
    <Container>
      <BreadcrumbWrapper>
        <Breadcrumb separator=">">
          <Breadcrumb.Item href="">
            <HomeFilled style={{ fontSize: '8px' }} />
            <span>PERFORMANCE</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <span>DASHBOARD</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </BreadcrumbWrapper>
      <ProfileWrapper>
        <DownloadWrapper>
          <DownloadOutlined />
        </DownloadWrapper>
        <Divider />
        <AvatarWrapper>
          <Avatar size={'small'} icon={<UserOutlined />} />
          <Name>{name}</Name>
        </AvatarWrapper>
      </ProfileWrapper>
    </Container>
  );
};

export default NavBar;
