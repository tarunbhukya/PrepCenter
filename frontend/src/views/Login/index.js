import React from 'react';
import { useMutation } from '@apollo/client';
import {  GET_SESSION } from '../../graphql/mutation' 
import { useFormik } from 'formik';

function Login() {

    const [getSession, {data}] = useMutation(GET_SESSION);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: async (values) => {
        const {data} = await getSession({
          variables: {
            email: values.email,
            password: values.password
          }
        })
        

        if(data.sessionCreate.errors.length > 0) {
          const errors = data.sessionCreate.errors;
          return
        }

        localStorage.setItem('token', data.sessionCreate.token);
        window.location.assign('/dashbaord');
        

      }
    });


    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="email">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )

}

export default Login;

