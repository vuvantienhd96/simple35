import { Button } from "antd";
import { useRef } from "react";
import "./EditTable.css";

const AddItemTable = () => {
   
    // khai bao tham chieu
    const nameRef = useRef('');
    const ageRef = useRef('');
    const addReRef = useRef('');
    const tagsRef = useRef('');

    const addItem = () => {
        const result = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            address: addReRef.current.value,
            tags: tagsRef.current.value,
        }
        // get item
        console.log(result, "========");
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