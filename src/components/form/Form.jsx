import React, { useState } from 'react'
import './Form.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../store/UserSlice';
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length <= 0 || email.length <= 0) {
            window.alert('please fill all details');
        }
        else {
            dispatch(addUser({ id: users.length, name, email }));
            navigate('/user-data')
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit} className='user-form'>
            <h1>Add User</h1>

                <div className="user-name ">
                    <input type="text" name="" id="" value={name} placeholder='Gaurav Chavan' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="user-email">
                    <input type="email" placeholder='example12@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="submit">
                    <button type='submit'>Add User</button>
                    <button type='button' onClick={()=>navigate('/user-data')}>Show Data</button>

                </div>
            </form>
        </>
    )
}

export default Form
