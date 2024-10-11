import React, { useState } from 'react';
import {
    DesktopOutlined,
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth.context';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Chart', '/', <PieChartOutlined />),
    getItem('User Management', '/user', <UserOutlined />),
    getItem('Server Management', '/server', <DesktopOutlined />),
];

const SiderMenu: React.FC = () => {
    const { user } = useAuth();
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine the default selected key based on the current path
    const defaultSelectedKey = location.pathname.split('/')[1] || '/';

    if (!user) return null;

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="logo" />
            <Menu
                onClick={(item) => {
                    navigate(item.key);
                }}
                defaultSelectedKeys={[`/${defaultSelectedKey}`]}
                theme="dark"
                mode="inline"
                items={items} />
        </Sider>
    );
};

export default SiderMenu;