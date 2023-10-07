import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate,useParams} from 'react-router-dom';
import { useFormik } from 'formik';
import { resetPassWordSchema } from '../../middleware/validate';
import './resetPassword.scss'

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
            const response = await axios.put(`${apiUrl}/auth/reset-password?email=${email}`, {
              password: values.password,
              verificationCode: values.verificationCode
            });
            
            const data = response.data;
      
            toast.success(data.message)

            setTimeout(() => {
              navigate('/login')
            }, 5000)
          } catch (error) {
            const data = error.response.data
            toast.error(data.message)
          }

         formik.handleReset();

    }
  })
  return (
      <div className="reset-password">
        <div className="reset-password__modal-overlay"></div>
        <div className="container__reset-password">
          <form className="reset-password__form" onSubmit={formik.handleSubmit}>
            <div className="title">
              <h4>Enter your email to receive the verification code</h4>
            </div>
            <div className="wrap-input code-input">
              <div className="group__input">
                <input  type="text"
                        placeholder="Enter your code..."
                        name='verificationCode'
                        value={formik.values.verificationCode}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                  />
              </div>
              { formik.touched.verificationCode && formik.values.verificationCode && (
                    <span className='form__message--error'>{formik.errors.verificationCode}</span>
              )}
            </div>
            <div className="wrap-input password-input">
              <div className="group__input">
                <input  type="password"
                        placeholder="Password"
                        name='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                  />
              </div>
              { formik.touched.password && formik.values.password && (
                    <span className='form__message--error'>{formik.errors.password}</span>
              )}
            </div>
            <div className="wrap-input password-input">
              <div className="group__input">
                <input  type="password"
                        placeholder="Confirm Password"
                        name='confirmPassword'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                />
              </div>
              { formik.touched.confirmPassword && formik.values.confirmPassword && (
                    <span className='form__message--error'>{formik.errors.confirmPassword}</span>
              )}
            </div>
            <button className="btn_submit" type="submit">
              Reset Password
            </button>
            <div className="reset-password__text">
              <span >Do you have an Account?</span>
              <Link to="/login"><span style={{color:"#000080", marginLeft: "4px"}}>Login</span></Link>
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
  );
}

export default ResetPassword