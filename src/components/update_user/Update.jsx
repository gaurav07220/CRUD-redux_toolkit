import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../../store/UserSlice';
const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const users = useSelector(state => state.users);
    const userForUpdate = users.filter(item => item.id == id);
    const { name, email } = userForUpdate[0];
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(name);
    const [newEmail, setNewEmail] = useState(email);

    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUser({ id: id, name: newName, email: newEmail }));

        navigate('/user-data')
    }
    return (
        <form onSubmit={handleUpdate} className='user-form'>
            <h1>Update User</h1>

            <div className="user-name ">
                <input type="text" name="" id="" value={newName} placeholder='Gaurav Chavan' onChange={(e) => setNewName(e.target.value)} />
            </div>
            <div className="user-email">
                <input type="email" placeholder='example12@gmail.com' value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
            </div>
            <div className="submit">
                <button type='submit'>Save Update</button>
            </div>
        </form>
    )
}

export default Update
