import React from 'react';
import { useQuery } from '@apollo/client'
import { GET_USER } from '../../graphql/query'
import Loader from '../../components/loader'
import { UserProvider } from '../../components/UserContext'

export const AuthLoader = (props) => {

    const {loading, data, error} = useQuery(GET_USER);
    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>Error</p>
    }

    if (!data.user) {
        if (window.location.href.indexOf("login") < 0) {
            window.location.assign('/login');
        }
    }

   

    return (
        <UserProvider value={data.user}>
            { props.children } 
        </UserProvider>
    )
}

