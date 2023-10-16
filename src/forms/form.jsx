import { useSelector, useDispatch } from 'react-redux';

const Form = () => {
    const responApi = useSelector(state => state.apiSave.responApi);
    return <>
        {
         responApi?.length > 0 ? 
         <>
            { 
                responApi.map((el, index) => 
                <div key={index}>{el.name}</div>
                )
            
            }
         </> : 'no data'   
        }
    </>
}

export default Form;