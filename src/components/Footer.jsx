import React from 'react'
import styled from 'styled-components'

import LogoBlossom from '../assets/logo-blossom-white.svg'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LeftSide>
          <img src={LogoBlossom} alt="" />
          <div className='text-link'>
            <button style= {{ color: "white", border: "none", cursor: "pointer" }}>Home</button>
            <button style= {{ color: "white", border: "none", cursor: "pointer" }}>Explore</button>
            <button style= {{ color: "white", border: "none", cursor: "pointer" }}>Our Story</button>
          </div>
        </LeftSide>
        <RightSide>
          <p style= {{ marginTop: "10px"}}>Get the freshest news from us</p>
          <div className='input-email'>
            <input type="text" placeholder ="Enter your email" />
            <button>Subscribe</button>
          </div>
        </RightSide>
      </FooterContainer>

      <HorizontalLine />

      <FooterEnd>
        <div className='privacy'>
            <p>Terms & Conditions  |     Privacy Policy     |     Accessibility     |     Legal      </p>
        </div>
        <div className='design-by'>
            <p>Design by Grayinn © Blossom Travel Blog 2023. All right reserved</p>
        </div>
      </FooterEnd>

    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.div`
  background: linear-gradient(107deg, #37717D 56.1%, rgba(55, 113, 125, 0.00) 194.5%);
  color: white;
  padding: 20px 0;
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  margin-left: 10%;
  padding: 20px 20px;
`

const LeftSide = styled.div`
  display: block;
  
  img {
    width: 70%;
    margin-bottom: 20px;
  }
  .text-link {
    font-size: 15px;
  }

  button {
    align-items: center;
    margin-right: 30px;
  }
`

const HorizontalLine = styled.div`
  width: 78%;
  border-top: 1px solid #CBCBCB;
  margin: 0 auto;
`

const RightSide = styled.div`
  display: block;
  flex-wrap: wrap;
  align-items: center;

  .input-email {
    margin-top: 20px;
    margin-bottom: 30px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 7px;
    margin-right: 10px;
    background-color: white;
    width: 280px;
    font-size: 15px;
  }

  button {
    padding: 10px 20px;
    background-color: #F99E52;
    color: white;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    font-size: 15px;
  }
`

const FooterEnd = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  margin-right: 10%;
  margin-left: 10%;
  padding: 20px 20px;
  font-size: 13px;
  color: #D7D7D7;
`



