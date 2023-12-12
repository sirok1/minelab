import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice(({
    name: "user",
    initialState: {
        login: 'Вы не вошли',
        token: ''
    },
    reducers: {
        setUser(state, action){
            state.login = action.payload.login
            state.token = action.payload.token
        }
    }
}))

export const {setUser} = userSlice.actions
export default userSlice.reducer