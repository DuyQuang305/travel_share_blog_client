import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';
import { useFormik } from 'formik';
import { resetPassWordSchema } from '../../middleware/validate'

import BackgroundR from '../../assets/background-password.svg'
import logo from '../../assets/logo-blossom-w.svg'

const apiUrl =  process.env.REACT_APP_SERVER_URL


function ResetPassword() {
  
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
      verificationCode: '',
      password: '',
      confirmPassword: '',
    }, 

    validationSchema: resetPassWordSchema,

    onSubmit: async (values) => {
      try {
            const response = await axios.put(`${apiUrl}/api/v1.0/client/auth/reset-password`, {
              email,
              password: values.password,
              code: values.verificationCode
            });
            
            const data = response.data;
      
            toast.success(data.message)

            setTimeout(() => {
              navigate('/login')
            }, 5000)

          } catch (error) {
            const { data } = error.response
            if (data.status !== 400) {
              toast.error(data.message)
            } else {
              toast.error(data.payload[0].msg)
            }
          }
        formik.handleReset();
    }
  }) 


  return (
    <Wrapper>
      <Background>
        <img src={BackgroundR} alt="background_image" />
      </Background>

      <ResetFormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <img style={{ width: '35%' }} src={logo} alt='logo' />
            <span style={{ fontSize: '32px', fontWeight: '600', marginTop: '15px', marginBottom: '20px' }}>New password</span>
            <p>Set the new password for your account so you can access all features.</p>
          </div>

          <div>
            <div className="style-input">
              <input  type="text"
                      placeholder="Enter your code..."
                      name='verificationCode'
                      value={formik.values.verificationCode}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                />
            </div>
            { formik.touched.verificationCode && formik.values.verificationCode && (
                  <span className='message-error'>{formik.errors.verificationCode}</span>
            )}
          </div>
          <div>
            <div className="style-input">
              <input  type="password"
                      placeholder="Enter new password"
                      name='password'
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                />
            </div>
            { formik.touched.password && formik.values.password && (
                  <span className='message-error'>{formik.errors.password}</span>
            )}
          </div>
          <div>
            <div className="style-input">
              <input  type="password"
                      placeholder="Confirm your password"
                      name='confirmPassword'
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
              />
            </div>
            { formik.touched.confirmPassword && formik.values.confirmPassword && (
                  <span className='message-error'>{formik.errors.confirmPassword}</span>
            )}
          </div>
          <button className="reset-submit" type="submit">Reset Password</button>
          <div className="reset-text">
            <span >Do you have an account?</span>
            <Link to="/login"><span style={{color:"#FA9038", marginLeft: "4px"}}>Login</span></Link>
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

      </ResetFormWrapper>
    </Wrapper>
  )
}
export default ResetPassword


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
const ResetFormWrapper = styled.div`
  position: absolute;
  background-color: #FFF;
  border-radius: 10px;
  width: 37%;
  height: 67%;
  padding: 2% 3% 2% 3%;

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
  .reset-submit {
    width: 100%;
    margin: 0 auto;
    margin-top: 25px;
    border-radius: 10px;
    background-color: #37717D;
    color: #fff;
    height: 45px;
    font-weight: 500;
  }
  .reset-text {
    display: flex;
    justify-content: center;
    margin-top: 7%;
  }
`
