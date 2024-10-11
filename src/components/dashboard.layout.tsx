import React from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const LayoutDashboard: React.FC = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                {url}
            </Breadcrumb.Item>
        );
    });

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header style={{ padding: 0, background: colorBgContainer }} />
            <Content style={{ margin: '0 16px' }}>
                {
                    breadcrumbItems.length > 0 ? (
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            {breadcrumbItems}
                        </Breadcrumb>
                    )
                        :
                        (
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>
                                    /
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        )
                }

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