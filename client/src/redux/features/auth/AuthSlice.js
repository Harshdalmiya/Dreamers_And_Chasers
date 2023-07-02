//handling login action
import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, getCurrentUser } from "./AuthAction";
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
            state.user = payload.user;
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
            state.user = payload.user;

        })
        //for rrejection
        builder.addCase(userRegister.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload

        });
        // for current user 
        //for pending
        builder.addCase(getCurrentUser.pending, (state) => {
            state.loading = true;
            state.error = null
        })
        //for successful login
        builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;

        })
        //for rejection
        builder.addCase(getCurrentUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload

        });
    },
});
export default authSlice;