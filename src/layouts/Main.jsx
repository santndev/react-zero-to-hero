import React, {useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
// import {checkToken} from '@helpers'

export const Main = () => {
    const navigate = useNavigate()

    useEffect(() => {
        // if (checkToken()) {
        //     navigate('/')
        // }
    }, [])

    return (
        <div>
            <Outlet/>
        </div>
    )
}
