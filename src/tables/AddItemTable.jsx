import { Button } from "antd";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./EditTable.css";

const AddItemTable = () => {
   
    // khai bao tham chieu
    const nameRef = useRef('');
    const ageRef = useRef('');
    const addReRef = useRef('');
    const tagsRef = useRef('');

    const navigate = useNavigate();


    const addItem = () => {
        const api = 'https://64e5f67f09e64530d17f54dc.mockapi.io/rocket35class';
        const result = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addReRef.current.value,
            tags: tagsRef.current.value,
        }

        // get item
        console.log(result, "========");
        const { name, age, tags, address } = result;
        if(name.trim() === '' || age.trim() === '' || address.trim() === '' || tags.trim() === ''){
            // err 
            // btvn hiên thị thông báo cho nguòi dùng, nâng cao hơn kiểm tra chính xác là lỗi nào
            console.log('err validate')
            return;
        }
        // call api here 
        axios.post(api, result).then(res => {
                // do something
                // redirect ve listTable
                navigate('/Table');
        }).catch(err => {
            // btvn , show modal error, or aler error
            console.log('err post', err)
        });
    }

    return <>
        <h4>Thêm mới item Table</h4>
        <div className='styleInput'>
            <input ref={nameRef} name="name" placeholder='name' />
            <input ref={ageRef} name="age" placeholder='age' />
            <input ref={addReRef} name="address" placeholder='address' />
            <input ref={tagsRef} name="tags" placeholder='tags' />
        </div>
        <Button onClick={() => addItem()}>Add item</Button>
    </>
}

export default AddItemTable;