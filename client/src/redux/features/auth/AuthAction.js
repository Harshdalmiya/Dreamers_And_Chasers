//creating login action
// it will craete function using createAsyncThunk
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
import API from "../../../sevices/api";


export const userLogin = createAsyncThunk(
    //action name
    'auth/login',
    async ({
        role,
        email,
        password
    }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/login', { role, email, password })
            //store token
            if (data.success) {
                localStorage.setItem('token', data.token)
                toast.success(data.message);
            }
            return data
        }
        catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }
        }
    }
);

export const userRegister = createAsyncThunk(
    //action name
    'auth/register',
    async ({
        userName,
        role,
        email,
        password,
        phone,
        organizationName,
        address,
        hospitalName
    }, { rejectWithValue }) => {
        try {
            const { data } = await API.post('/auth/register', {
                userName,
                role,
                email,
                password,
                phone,
                organizationName,
                address,
                hospitalName
            })
            //store token
            if (data.success) {
                toast.success(data.message);
                alert("You have successfully registered")
                window.location.replace("/login")
            }
            return data
        }
        catch (error) {
            console.log(error)
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            }
            else {
                return rejectWithValue(error.message)
            }
        }
    }
);


