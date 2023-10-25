import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { loginSchema } from '../../middleware/validate';
import { useGoogleLogin } from '@react-oauth/google';
import ggImg from './img/google.svg'

import backgroundIMG from '../../assets/background-img-auth.svg'
import logo from './img/logo-bgr-white.svg'
import fb_img from './img/Facebook.svg'
import '../../styles/sass/reset.scss'
const apiUrl = process.env.REACT_APP_SERVER_URL

function Login() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      navigate('/')
    }
  })

  const loginGoogle = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const access_token = codeResponse.access_token
      const response = await axios.post(`${apiUrl}/auth/google`, {
        access_token,
      });

      if (( response?.status === 201) || (response?.status === 200)) {
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(response.data.accessToken));

        navigate("/")
      } else if (response?.statusCode === 400) {
        console.log('login failed');
      }
    },
    onError: (error) => console.log('Login Failed:', error)
  });


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    validationSchema: loginSchema,

    onSubmit: async (values) => {

      try {
        const {data} = await axios.post(`${apiUrl}/api/v1.0/client/auth/login`, {
          email: values.email,
          password: values.password,
        });
      
        if (data.status !== 200) {
          toast.error('Login failed');
        } else {
          localStorage.setItem("ACCESS_TOKEN", JSON.stringify(data.payload.accessToken));
          toast.success(data.message)
          setTimeout(() => {
            navigate("/");
          }, 5000)
        }
      } catch (error) {
        const { data } = error.response
        toast.error(data.payload[0].msg)

      formik.handleReset()
    }

  }})

  return (
    <Wrapper>
      <BackgroundContainer>
        <h1>Start your journey by one click, explore beautiful world!</h1>
        <img src={backgroundIMG} alt="background_image" />
      </BackgroundContainer>

      <LoginFormWrapper>
        <LoginFormContainer>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <img src={logo} alt='logo' />
              <span style={{ fontSize: '35px', fontWeight: '600', marginTop: '15px', marginBottom: '20px' }}>Log In</span>
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

            <div>
              <div className="style-input">
                <input
                  type="password"
                  placeholder="Enter your password"
                  name='password'
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.values.password && (
                <span className='message-error'>{formik.errors.password}</span>
              )}
            </div>
            <button className='login-submit' type="submit">Login</button>

            <div className="login-underlined">
              <hr />
              <span style={{
                marginLeft: '20px',
                marginRight: '20px',
                fontWeight: '400'
              }}>OR</span>
              <hr />
            </div>

            <div className="socical-btn">
              <div>
                <button onClick={() => loginGoogle()} className='social-google'>
                  <img src={ggImg} alt="google" />
                  <span>Continue in with Google</span>
                </button>
              </div>

              <div>
                <button onClick={() => loginGoogle()} className='social-facebook'>
                  <img src={fb_img} alt="facebook" />
                  <span>Continue with Facebook</span>
                </button>
              </div>
            </div>

            <div className='login-text'>
              <div style={{marginBottom: '10px'}} className="login-text-register">
                <span>Don't have an Account?</span>
                <Link style={{marginLeft: '10px'}} to="/register"><span style={{color:"#000080"}}>Sign up now!</span></Link>
              </div>
              <Link style={{fontSize: '17px'}} to="/forgot-password"><span style={{color:"#000080"}}>Forgot Password</span></Link>
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
        </LoginFormContainer>
      </LoginFormWrapper>

    </Wrapper>
  )
}
export default Login  


const Wrapper = styled.div`
  display: flex;
`
const BackgroundContainer = styled.div`
  background-color: #37717D;
  width: 50%;
  height: 100vh;
  h1{
    width: 30%;
    position: absolute;
    top: 32%;
    left: 13%;
    transform: translateY(-50%);
    z-index: 1;
    color: #FFF;
    font-size: 45px;
    font-weight: 700;
    line-height: 60px;
  }
  img{
    height: 100vh;
    background-size: cover;
    margin-left: 15%;
  }
`

const LoginFormWrapper = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #37717D;
  margin-left: 2%;
`
const SocialButton = `
  margin-top: 10px;
      img {
        width: 20px;
        height: 40px;
        margin-right: 10px;
      }
`
const LoginFormContainer = styled.div`
  width: 75%;
  height: 88vh;
  background-color: #FFF;
  padding: 50px 60px 50px 60px;
  border-radius: 10px;
  margin: 6% 1%;

  .style-input {
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 12px 16px;
    border: 1px solid #8E8E8E;
    font-size: 15px;
  }
  .message-error {
    color: #E43B3B;
    font-size: 14px;
    margin-top: 5px;
  } 
  .login-submit {
    padding: 0 44% 0 44%;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 10px;
    background-color: #37717D;
    color: #fff;
    height: 45px;
    font-family: Noto Sans;
    font-weight: 500;
    margin-bottom: 30px;
  }
  .login-underlined {
    max-width: 380px;
    margin: 0 0 20px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  hr {
    width: 100%;
    border: 1px solid #8E8E8E;
  }

  .socical-btn {
    button {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid #8E8E8E;
    }
  }
  .social-google {
    ${SocialButton}
  }

  .social-facebook {
    ${SocialButton}
  }

  .login-text {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login-text-register {
    display: flex;
}
`