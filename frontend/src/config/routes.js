import React from 'react'
import Login from '../views/Login'
import Dashboard from '../views/Dashboard'
import QuestionBankList from '../views/QuestionBankList'
import QuestionBankCreate from '../views/QuestionBankCreate'
import QuestionBankDetail from '../views/QuestionBankDetail'


export const routes = [
    {
        path: '/login',
        exact: true,
        component: Login,
    },
    {
        path: '/dashboard',
        exact: true,
        component: Dashboard,
    },
    {
        path: '/questionbanks',
        exact: true,
        component: QuestionBankList,
    },
    {
        path: '/questionbanks/new',
        exact: true,
        component: QuestionBankCreate
    },
    {
        path: '/questionbanks/:id',
        exact: true,
        component: QuestionBankDetail
    },
    {
        component: () => <div>Show 404 error</div>
    }
]