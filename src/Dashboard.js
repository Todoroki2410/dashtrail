import { Layout, Menu } from 'antd';
import React from 'react';
import {
  UserOutlined,
  SwapOutlined,
  PicRightOutlined,
  BellOutlined,
  CarryOutOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

class Dashboard extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">
              <h3>{this.state.collapsed ? 'DT' : 'DASH - TRAIL'}</h3>
            </div>
          <Menu theme="light" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />}>
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="/TodoList" icon={<CarryOutOutlined />}>
             <Link to='/TodoList'>Tasks Lineup</Link> 
            </Menu.Item>
            <Menu.Item key="/mails" icon={<BellOutlined />}>
             <Link to='/Mails'>Apprise</Link> 
            </Menu.Item>
            <Menu.Item key="/News" icon={<PicRightOutlined />}>
             <Link to='/News'>Bulletin</Link> 
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 , textAlign: 'left' }}>
            {React.createElement(this.state.collapsed ? SwapOutlined : SwapOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Dashboard