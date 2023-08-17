import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from './components/form/Form'
import UserData from './components/user_data/UserData'
import Update from './components/update_user/Update'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='user-data' element={<UserData />} />
        <Route path='update-user/:id' element={<Update />} />
      </Routes>
    </div>
  )
}

export default App
