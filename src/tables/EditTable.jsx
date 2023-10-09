
import React from 'react';
import { Button, Modal } from 'antd';
import "./EditTable.css";

const EditTable = ({
    isModalOpen,
    setIsModalOpen
}) => {

    const showModal = () => {
      setIsModalOpen(true);
    };

    // new hook useRef
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return <>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='styleInput'>
            <input defaultValue={'name'} name="name" placeholder='name' />
            <input defaultValue={'age'} name="age" placeholder='age' />
            <input defaultValue={'address'} name="address" placeholder='address' />
            <input defaultValue={'tags'} name="tags" placeholder='tags' />
        </div>
      </Modal>
    </>
};

export default EditTable;