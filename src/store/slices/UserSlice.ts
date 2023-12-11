import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice(({
    name: "user",
    initialState: {
        login: 'Вы не вошли'
    },
    reducers: {
        setUser(state, action){
            state.login = action.payload.login
        }
    }
}))

export const {setUser} = userSlice.actions
export default userSlice.reducer