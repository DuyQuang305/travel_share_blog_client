import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../middleware/validate';

import BackgroundF from '../../assets/background-password.svg'
import logo from '../../assets/logo-blossom-w.svg'

const apiUrl =  process.env.REACT_APP_SERVER_URL

const ForgotPassword = () => {

  const navigate = useNavigate();

  useEffect( () => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
          navigate('/')
    }
  })

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    validationSchema: forgotPasswordSchema,

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(`${apiUrl}/api/v1.0/client/auth/forgot-password`, {
          email: values.email,
        });

        if (data.status !== 200) {
          toast.error('Send email failed');
        } else {
          toast.success(data.message);
          setTimeout(() => {
            navigate(`/verify?email=${values.email}`)
          }, 5000);
        }
        
      } catch (error) {
        const { data } = error.response
        if (data.status === 403){
          toast.error(data.message)
        } else {
          toast.error(data.payload[0].msg)
        }
      } 

      formik.handleReset()

    }
  }) 

  return (
    <Wrapper>
      <Background>
        <img src={BackgroundF} alt="background_image" />
      </Background>

      <ForgotFormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <img style={{ width: '35%' }} src={logo} alt='logo' />
            <span style={{ fontSize: '32px', fontWeight: '600', marginTop: '15px', marginBottom: '20px' }}>Forgot password</span>
            <p>Enter your email for the verification proccess,we will send 4 digits code to your email.</p>
          </div>

          <div>
            <div className="style-input">
              <input
                id='email'
                type="text"
                name='email'
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.values.email && (
              <span className='message-error'>{formik.errors.email}</span>
            )}
          </div>

          <button className='forgot-submit' type="submit">Continue</button>

        </form>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

      </ForgotFormWrapper>
    </Wrapper>
  )
}
export default ForgotPassword


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
`
const ForgotFormWrapper = styled.div`
  position: absolute;
  background-color: #FFF;
  border-radius: 10px;
  width: 35%;
  height: 50%;
  padding: 3%;


  p {
    color: var(--text-off, #828282);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  .style-input {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 15px;
    border: 1px solid #8E8E8E;
    font-size: 15px;
  }
  .message-error {
    color: #E43B3B;
    font-size: 14px;
    margin-top: 5px;
  } 
  .forgot-submit {
    width: 100%;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 10px;
    background-color: #37717D;
    color: #fff;
    height: 45px;
    font-weight: 500;
  }
`