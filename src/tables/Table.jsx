import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
// import thu vien call api
import axios from 'axios';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';



const { confirm } = Modal;

const TableCp = () => {
    const [data, setDataTable] = useState([]);
    const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';

    const apiCall = () => {

        return axios.get(api).then(res => {
            console.log(res?.data, 'res ====');
            setDataTable(res?.data);
        })
            .catch(err => `đã có lỗi call table: ` + err)
    }


    useEffect(() => {
        apiCall();
    }, []);


    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            fixed: 'left',
            width: 50,
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                    {tags.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right',
            render: (_, itemTable) => (
                <Space size="middle">
                    <Tag color={'red'} onClick={() => showDeleteConfirm(itemTable)}>
                        Delete
                    </Tag>
                    <Tag color={'green'} onClick={() => showEdit(itemTable)}>
                        edit
                    </Tag>
                </Space>
            ),
        },
    ];

    const showEdit = (item) => {
        console.log('edit item', item);
    }

    const showDeleteConfirm = (item) => {
        confirm({
            title: `Are you sure delete this ${item?.name}?`,
            icon: <ExclamationCircleFilled />,
            content: `address: ${item?.address} - age: ${item?.age}`,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteItemTb(item)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    const deleteItemTb = (itemTable) => {
        console.log(itemTable, 'itemTable');
        if (itemTable?.id) {
            axios.delete(api + `/${itemTable?.id}`).then(res => {
                apiCall();
            }).catch(err => console.log('xoa ban ghi khong thanh cong ' + err));
        }
    }

    return <>
        <div>
            <h4>Danh sách sản phẩm </h4>
            <Tag color={'blue'} onClick={() => console.log('them moi')}>
                Thêm mới
            </Tag>
        </div>
        {data.length > 0 && <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1200, y: 600 }}
        />}
    </>
};
export default TableCp;