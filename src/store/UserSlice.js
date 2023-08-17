import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            return state.filter(item => item.id !== action.payload)
        },
        updateUser: (state, action) => {
            const { id, name, email } = action.payload;
            let userExits = state.find(item => item.id == id);
            if (userExits) {
                userExits.name = name;
                userExits.email = email;
            }
        }
    }
});

export default UserSlice.reducer;
export const { addUser, deleteUser, updateUser } = UserSlice.actions;
