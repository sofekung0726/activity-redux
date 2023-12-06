import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

 const AddActivity = () => {
    const dispatch = useDispatch();
    const [ data, setData ] = useState({
        name: "",
        duration: ""
    });
    const handleChange = (e) => {
        e.persist();
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const AddActivity = () =>{
        dispatch({
            type: "CREATE_ACTIVITY",
            payload:{
                name: data.name,
                duration: data.duration
            }
        })
    }
    return (
        <div className='add'>
            <div className='input-section'>
                <p> Activity name:</p>
                <input type="text " name='name' placeholder='Activity Name....' onChange={(e)=>handleChange(e)} />
            </div>
            <div className='input-section'>
                <p> Activity duration:</p>
                <input type="text " name='duration' placeholder='Activity duration....' onChange={(e)=>handleChange(e)} />
            </div>
            <button onClick={AddActivity}>Add Activity</button>
        </div>
    )
}
export default AddActivity