import styled from "styled-components"
import React, { useState } from "react"
import { Link } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import NotificationsIcon from '@mui/icons-material/Notifications'

import logo from '../assets/logo-blossom-w.svg'
import Avatar from '../assets/headeravt.svg'


function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      onSearch(searchQuery)
    }
  }

  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Link to='/'>
            <img src={logo} alt="" style={{ width: '180px' }} />
          </Link>
        </LogoWrapper>

        <SearchWrapper>
          <SearchBarWapper>
            <form onSubmit={handleSearch}>
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchQuery}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
            </form>
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </SearchBarWapper>
        </SearchWrapper>

        <CreatePost>
          <AddIconButton>
              <AddIcon fontSize="small" />
          </AddIconButton>
          <AddIconText>
            <Link to='/createpost'>
              <p>Create Post</p>
            </Link>
          </AddIconText>
        </CreatePost>

        <IconsWrapper>
{/* 0. View notification */}
          <NotifIcon>
              <NotificationsIcon fontSize="medium" />
          </NotifIcon>

{/* --- */}
          <AvatarIcon>
              <img src={Avatar} alt="" style={{ width: '40px' }} />
              <Tooltip>
                <UserInfo>
                  <Link to='/profile'>
                      <img src={Avatar} alt=""/>
                  </Link>
                      <div className="user-info-text">
                          <Link to="/profile">
                              <span className="user-name">Nguyen Hong Nhung</span>
                          </Link>
                          <span className="username">nguyenhongnhung@gmail.com</span>
                      </div>
                </UserInfo>
                <HorizontalLine />

{/* 1. Popup Account Information */}
                <ChangeButton>
                  Account Information
                </ChangeButton>

{/* 2. Popup Changepassword */}
                <ChangeButton>
                  Change Password
                </ChangeButton>
                <HorizontalLine />

{/* 3. Log out */}
                <Link to='/'>
                  <TooltipItem>Log Out</TooltipItem>
                </Link>

            </Tooltip>
          </AvatarIcon>
        </IconsWrapper>
      </Container>
    </Wrapper>
  )
}
export default Header

const Wrapper = styled.form`
    font-family: Noto Sans;
    background-color: white;
`

const Container = styled.div`
    display: flex;
    align-items: center;

    margin-right: 3.5%;
    margin-left: 3.5%;

`

const LogoWrapper = styled.div`
    cursor: pointer;
    margin-top: 8px;
    margin-right: 14.2%;
`

const SearchWrapper = styled.div`
    min-width: 42%;
    margin-right: 10%;
`

const SearchBarWapper = styled.div`
    display: flex;
    background-color: #efefef;
    height: 38px;
    width: 100%;
    border-radius: 50px;
    border: 1.5px solid #D9534F;
    padding: 10px;

    align-items: center;
    border-radius: 10px;
    border: 1px solid #C6C6C6;
    background: var(--light-grey-input-fiels-forms, #F6F6F6);

    form {
        display: flex;
        flex: 1;
    }

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 15px
    }

    input:focus {
        outline: none;
    }
`

const IconButton = styled.div`
    color: gray;
    cursor: pointer;
    padding-right: 6px;
    padding-top: 4px;
`

const CreatePost = styled.div`
    display: flex;
    border-radius: 10px;
    width: 10%;
    height: 39px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    padding: 11px;
    background: #37717D;
    color: #FFF;

    &:hover {
      background-color: #448795;
    }
`

const AddIconButton = styled.div`
    padding-right: 6px;
    padding-bottom: 6px;
`

const AddIconText = styled.div`
    a {
      color: #FFF;
      text-decoration: none;
    }
`

const IconsWrapper = styled.div`
    display: flex;
`

const NotifIcon = styled.div`
    display: flex;
    color: #3A3A3A;
    margin-top: 5px;
    margin-right: 70%;
    margin-left: 70%;
    cursor: pointer;
`

const AvatarIcon = styled.div`
    position: relative;
    color: #3A3A3A;
    display: flex;
    cursor: pointer;
`

const Tooltip = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    width: 300px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    display: none;
    cursor: pointer;
    z-index: 999;
    transition: opacity 0.2s;
    margin-top: 6px;
    padding-left: 10px;

    ${AvatarIcon}:hover & {
      display: block;
    }

    &:before {
      content: '';
      position: absolute;
      top: -10px;
      right: 10px;
      border: 5px solid transparent;
      border-bottom-color: #fff;
    }

    a {
      text-decoration: none;
    }
`

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    cursor: pointer;
    padding: 10px;

    img {
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
        margin-left: 10px;
    }

    .user-info-text {
        display: flex;
        flex-direction: column;
    }

    .user-info-text a {
        text-decoration: none;
    }

    .user-name {
        color: #000;
        font-size: 15px;
        font-weight: 500;
    }

    .username {
        color: #3A3A3A;
        font-size: 13px;
        font-weight: 300;
        margin-top: 5px;
    }
`

const HorizontalLine = styled.div`
    width: 100%;
    border-top: 1px solid #D9D9D9;
    margin-top: 2px;
    margin-bottom: 2px;
`

const TooltipItem = styled.div`
    padding: 10px 22px;
    color: #3a3a3a;
    transition: background-color 0.2s;
    border-radius: 20px;
    color: #3A3A3A;
    font-size: 15px;

    &:hover {
      background-color: #f1f1f1;
      border-radius: 20px;
    }
`

//-------- POP UP -----------
const ChangeButton = styled.div`
    padding: 10px 22px;
    color: #3a3a3a;
    transition: background-color 0.2s;
    border-radius: 20px;

    color: #3A3A3A;
    font-size: 15px;

    &:hover {
      background-color: #f1f1f1;
      border-radius: 20px;
    }
`