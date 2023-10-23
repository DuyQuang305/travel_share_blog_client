import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';
import { useFormik } from 'formik';
import { verifySchema } from '../../middleware/validate';
import './verify.scss'

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
              navigate(`/reset-password?email=${email}`)
            }, 5000);
          }
         
        } catch(error) {
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
    <div className="verify__wrapper">
      <div className="modal-overlay"></div>
      <div className='verify__container'>
          <form className='verify__form' onSubmit={formik.handleSubmit}>
            <div className="verify__container__title">
              <span style={{ color: '#6358DC', fontSize: '26px' }}>Blossom</span>
            </div>

            <div className='wrap-input username-input'>
              <div className="group__input">
                <input
                  id='code'
                  type="text"
                  name='code'
                  placeholder="Enter your code..."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.code}
                />
              </div>
              {formik.touched.code && formik.values.code && (
                <span className='form__message--error'>{formik.errors.code}</span>
              )}
            </div>

            <button className='btn_submit' type="submit">Active</button>

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

export default Verify;