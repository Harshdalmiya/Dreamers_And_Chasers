import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import API from '../../sevices/api'
import { getCurrentUser } from '../../redux/features/auth/AuthAction'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch()

    //get currentUser
    const getUser = async () => {
        try {
            const { data } = await API.get('/auth/current-user')
            if (data?.success) {
                dispatch(getCurrentUser(data))
            }
        } catch (error) {
            localStorage.clear()
            console.log(error)
        }
    }
    // to authenticate user when the home is opened
    useEffect(() => {
        getUser()
    })
    if (localStorage.getItem('token')) {
        return children


    }
    else {
        return <Navigate to='/login' />
    }


}

export default PrivateRoute
