import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { loginSchema } from '../../middleware/validate';
import { useGoogleLogin } from '@react-oauth/google';
import ggImg from './img/google.svg'
// import bg_img from './img/login_bg.png'
import bg_login from './img/login1.svg'
import logo from './img/logo-bgr-white.svg'
import fb_img from './img/Facebook.svg'
import '../../styles/sass/reset.scss'
import './login.scss'
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
    <div className="wrap-auth">
      <div className='login__container'>
        <div className='login__image'>
          <h1>Start your journey by one click, explore beautiful world!</h1>
          <img src={bg_login} alt="background_image" />
        </div>
        <form className='auth-login__form' onSubmit={formik.handleSubmit}>
          <div className="login__title">
             <img src={logo} alt='logo' />
             <span style={{ fontSize: '35px', fontWeight: '600' }}>Log In</span>
          </div>

          <div className='wrap-input username-input'>
            <div className="group__input">
              <input
                id='email'
                type="text"
                name='email'
                placeholder="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.values.email && (
              <span className='form__message--error'>{formik.errors.email}</span>
            )}
          </div>

          <div className='wrap-input password-input'>
            <div className="group__input">
              <input
                type="password"
                placeholder="Password"
                name='password'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.values.password && (
              <span className='form__message--error'>{formik.errors.password}</span>
            )}
          </div>
          <button className='btn_submit' type="submit">LOGIN</button>

          <div className="login__form-underlined">
            <hr />
            <span style={{
              marginLeft: '20px',
              marginRight: '20px',
              fontWeight: '400'
            }}>OR</span>
            <hr />
          </div>

          <div className="socical__wrap">
            <button onClick={() => loginGoogle()} className='social-btn social-btn__google'>
              <img src={ggImg} alt="google" />
              <span>Continue in with Google</span>
            </button>

            <button onClick={() => loginGoogle()} className='social-btn social-btn__facebook'>
              <img src={fb_img} alt="facebook" />
              <span>Continue with Facebook</span>
            </button>
          </div>

          <div className='login__text'>
            <div style={{marginBottom: '10px'}} className="login__text-register">
              <span>Don't have an Account?</span>
              <Link style={{marginLeft: '10px'}} to="/register"><span style={{color:"#000080"}}>Register</span></Link>
            </div>
            <Link style={{fontSize: '20px'}} to="/forgot-password"><span style={{color:"#000080"}}>Forgot Password</span></Link>
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
      </div>
    </div>
  )
}

export default Login;      