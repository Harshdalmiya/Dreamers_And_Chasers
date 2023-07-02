//handling login action
import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister } from "./AuthAction";
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null
const initialState = {
    loading: false,
    user: null,
    token,
    error: null,
};
const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {},
    // to handle login action we need slice

    extraReducers: (builder) => {
        //for login
        builder.addCase(userLogin.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        //for successful login
        builder.addCase(userLogin.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.olduser = payload.olduser;
            state.token = payload.token
        })
        //for rejection
        builder.addCase(userLogin.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload

        });
        //for registration
        builder.addCase(userRegister.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        //for successful login
        builder.addCase(userRegister.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.olduser = payload.olduser;

        })
        //for rejection
        builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload

        });
    },
});
export default authSlice;