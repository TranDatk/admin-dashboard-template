import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const LayoutDashboard: React.FC = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return { title: url, key: url };
    });

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }} />
          <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}
                    items={breadcrumbItems.length > 0 ? breadcrumbItems : [{ title: '/' }]} />
                <div
                    style={{
                        padding: 24,
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};

export default LayoutDashboard;
