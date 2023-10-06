import React from 'react';
import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
// import thu vien call api
import axios from 'axios';


const TableCp = () => {
    const [data, setDataTable] = useState([]);
    const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';
    useEffect(() => {
        axios.get(api).then(res => {
            console.log(res?.data, 'res ====');
            setDataTable(res?.data);
        })
            .catch(err => `đã có lỗi call table: ` + err)
    }, []);


    const columns = [
        {
            title: 'Stt',
            dataIndex: 'id',
            key: 'id',
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
            render: (_, itemTable) => (
                <Space size="middle">
                    <a>Invite {itemTable.name}</a>
                    <Tag color={'red'} onClick={ () => deleteItemTb(itemTable)}>
                        Delete
                    </Tag>
                </Space>
            ),
        },
    ];

    const deleteItemTb = (itemTable) => {
        console.log(itemTable, 'itemTable');
    }

    return <>
        {data.length > 0 && <Table columns={columns} dataSource={data} />}
    </>
};
export default TableCp;