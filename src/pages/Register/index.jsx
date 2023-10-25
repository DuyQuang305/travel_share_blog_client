import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from '../../middleware/validate';
import BackgroundSignUp from '../../assets/background-signup.svg'
import Logo from '../../assets/logo-blossom-w.svg'
// import './register.scss'

const apiUrl = process.env.REACT_APP_SERVER_URL

function Register() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('ACCESS_TOKEN')) {
      navigate('/')
    }
  })

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },

    validationSchema: registerSchema,

    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(
          `${apiUrl}/api/v1.0/client/auth/register`,
          {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          }
        );

        if (data.status !== 201) {
          toast.error('Register failed');
        } else {
          toast.success(data.message)
          setTimeout (() => {
            navigate('/login')
          }, 5000)
        }

      } catch (error) {
        const { data } = error.response
        toast.error(data.payload[0].msg)
      }

      formik.handleReset();

    }
  })

  return (
    <Wrapper>
      <BackgroundContainer>
        <h1>Sign up and be part of our travel blog community!</h1>
        <img src={BackgroundSignUp} alt="background_image" />
      </BackgroundContainer>

      <LoginFormWrapper>
        <LoginFormContainer>
        <form onSubmit={formik.handleSubmit}>
          <div>
              <img src={Logo} alt='logo' />
              <span style={{ fontSize: '35px', fontWeight: '600', marginTop: '15px', marginBottom: '30px' }}>Sign Up</span>
          </div>

          <div>
            <div className="style-input">
              <input
                type="text"
                placeholder="First name"
                name='firstName'
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.firstName && formik.values.firstName && (
              <span className='message-error'>{formik.errors.firstName}</span>
            )}
          </div>

          <div>
            <div className="style-input">
              <input
                type="text"
                placeholder="Last name"
                name='lastName'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.lastName && formik.values.lastName && (
              <span className='message-error'>{formik.errors.lastName}</span>
            )}
          </div>

          <div>
            <div className="style-input">
              <input
                type="email"
                placeholder="Enter your email"
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.password && formik.values.password && (
              <span className='message-error'>{formik.errors.password}</span>
            )}
          </div>

          <div>
            <div className="style-input">
              <input
                type="password"
                placeholder="Confirm your password"
                name='confirmPassword'
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.confirmPassword && formik.values.confirmPassword && (
              <span className='message-error'>{formik.errors.confirmPassword}</span>
            )}
          </div>
          <button className='signup-submit' type="submit">Sign Up</button>
          <div className='signup-text'>
            <span>Do you have an Account?</span>
            <Link style={{marginLeft: '10px'}} to="/login" ><span style={{color:"#000080"}}>Login now!</span></Link>
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
export default Register   


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
const LoginFormContainer = styled.div`
  width: 75%;
  height: 88vh;
  background-color: #FFF;
  padding: 40px 60px 40px 60px;
  border-radius: 10px;
  margin: 6% 1%;
  .style-input {
    margin: 0 auto;
    margin-top: 20px;
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
  .signup-submit {
    width: 100%;
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
  .signup-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`