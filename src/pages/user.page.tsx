import React, { useEffect } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchUsersThunk, selectUsers } from '../redux/user/user.slice';

const columns: TableProps<User>['columns'] = [
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Role',
        dataIndex: 'role',
        key: 'role',
    },
    {
        title: 'Locked',
        dataIndex: 'isLocked',
        key: 'isLocked',
        render: (isLocked) => (isLocked ? 'Yes' : 'No'),
    },
    {
        title: 'Server ID',
        dataIndex: 'server_id',
        key: 'server_id',
    },
    {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Updated At',
        dataIndex: 'updated_at',
        key: 'updated_at',
    },
];

const UserPage: React.FC = () => {
    const users = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    const fetchUsers = async () => {
        dispatch(fetchUsersThunk());
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Table<User>
            rowKey="_id"
            columns={columns}
            dataSource={users} />
    );
}

export default UserPage;