import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../middleware/validate';
import './forgotPassword.scss'

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

      formik.handleReset();

    }
  }) 

  return (
    <div className="forgot-password__wrapper">
      <div className="modal-overlay"></div>
      <div className='forgot-password__container'>
          <form className='forgot-password__form' onSubmit={formik.handleSubmit}>
            <div className="forgot-password__title">
              <span style={{ color: '#6358DC', fontSize: '26px' }}>Blossom</span>
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

            <button className='btn_submit' type="submit">Send</button>

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

export default ForgotPassword