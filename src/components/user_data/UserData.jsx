import React from 'react'
import './UserData.css'
import { useSelector } from 'react-redux'
import { deleteUser } from '../../store/UserSlice';
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import error_img from '../../image/no-data-concept-illustration_114360-536.avif'

const UserData = () => {
    const users = useSelector(state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    if (users.length <= 0) {
        return <div className='no-data-error'>
            <img src={error_img} alt="" />
            <NavLink to='/' style={{ textDecoration: 'none' }}> <GroupAddIcon /> Let's Add </NavLink>
        </div>
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', marginTop: '30px' }}>User's Data</h2>
            <div className='data'>
                {
                    users.map((item) => {
                        return (
                            <div className="user" key={item.id}>
                                <span> <PersonIcon  className='user-icon'/>  {item.name}</span>
                                <span> <EmailIcon  className='user-icon'/>   {item.email}</span>
                                <div className="user-action">
                                    <button className='edit-btn' onClick={() => navigate(`/update-user/${item.id}`)}>
                                        <EditNoteIcon className='user-action-icon' />
                                    </button>
                                    <button className='delete-btn' onClick={() => handleDelete(item.id)}>
                                        <DeleteForeverIcon className='user-action-icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <NavLink to='/' className='add-more'> <GroupAddIcon /> add more </NavLink>
        </>
    )
}

export default UserData
