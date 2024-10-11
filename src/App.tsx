import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login.page';
import PrivateRoute from './pages/private-route';
import { Layout } from 'antd';
import Server from './pages/server.page';
import LayoutDashboard from './components/dashboard.layout';
import SiderMenu from './components/sider.menu';
import ChartPage from './pages/chart.page';
import UserPage from './pages/user.page';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SiderMenu />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Các route được bảo vệ */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<LayoutDashboard />}>
            <Route index element={<ChartPage />} />
            <Route path="user" element={<UserPage />} />
            <Route path="server" element={<Server />} />
          </Route>
        </Route>

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
