import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate  } from 'react-router-dom'
import { useFormik } from 'formik'
import { verifySchema } from '../../middleware/validate'

import BackgroundV from '../../assets/background-password.svg'
import logo from '../../assets/logo-blossom-w.svg'

const apiUrl =  process.env.REACT_APP_SERVER_URL

function Verify() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')

  useEffect( () => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
          navigate('/')
    } 
  })

  useEffect (() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
      setEmail(urlParams.get('email'))
    }
  },[])

  const formik = useFormik({
    initialValues: {
      code: '',
    },

    validationSchema: verifySchema,

    onSubmit: async (values) => {
        try {
          const {data} = await axios.post(`${apiUrl}/api/v1.0/client/auth/verify-code`, {
            email,
            code: values.code,
          });

          if (data.status !== 200) {
            toast.error('Verify code failed');
          } else {
            toast.success(data.message);
            setTimeout(() => {
              navigate(`/reset-password?email=${email}&code=${values.code}`)
            }, 5000);
          }
         
        } catch(error) {
          const { data } = error.response
          if (data.status !== 400) {
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
        <img src={BackgroundV} alt="background_image" />
      </Background>

      <VerifyFormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <img style={{ width: '35%' }} src={logo} alt='logo' />
            <span style={{ fontSize: '32px', fontWeight: '600', marginTop: '15px', marginBottom: '20px' }}>Verification</span>
            <p>Enter your 4 digits code that you received on your email.</p>
          </div>

          <div>
            <div className="style-input">
              <input
                id='code'
                type="text"
                name='code'
                placeholder="Enter your code"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.code}
              />
            </div>
            {formik.touched.code && formik.values.code && (
              <span className='message-error'>{formik.errors.code}</span>
            )}
          </div>

          <button className='verify-submit' type="submit">Continue</button>

          <div style={{ display: 'flex', marginTop: '25px', justifyContent: 'center', fontSize: '15px'}}>
            <span>If you didn’t receive a code! </span>
            <span style={{ marginLeft: '5px', color: '#FA9038', cursor: 'pointer'}}>Resend</span>
          </div>
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

      </VerifyFormWrapper>
    </Wrapper>
  )
}

export default Verify

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
const VerifyFormWrapper = styled.div`
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
  .verify-submit {
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
