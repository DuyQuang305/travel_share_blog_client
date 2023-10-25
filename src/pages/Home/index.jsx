import React, { useState } from 'react'
import styled from 'styled-components'
import ExploreIcon from '@mui/icons-material/Explore'
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates'
import PeopleIcon from '@mui/icons-material/People'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'

import Header from '../../components/Header'
import PopularImg from '../../assets/popular-img.svg'
import RCPost1 from '../../assets/rcpost-1.svg'
import RCPost2 from '../../assets/rcpost-2.svg'
import mainpost1 from '../../assets/mainpost1.svg'
import mainpost2 from '../../assets/mainpost2.svg'
import mainpost3 from '../../assets/mainpost3.svg'
import mainpost4 from '../../assets/mainpost4.svg'
import mainpost5 from '../../assets/mainpost5.svg'
import mainpost6 from '../../assets/mainpost6.svg'
import mainpost7 from '../../assets/mainpost7.svg'
import mainpost8 from '../../assets/mainpost8.svg'
import iconperson from '../../assets/icon-person.svg'
import iconcomment from '../../assets/icon-comment.svg'

import Pagination from '../../components/Pagination'
import Footer from '../../components/Footer'


const Home = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8; 

  const handlePageChange = page => {
    setCurrentPage(page);
  };

  
  return (
    <Wrapper>
      <Header />    
      <HorizontalLine />

      <Container>
        <ButtonContainer>
          <Button active={true}> <ExploreIcon style={{ marginRight: '5px', height: '20px' }}/> Explore </Button>
          <Button> <TipsAndUpdatesIcon style={{ marginRight: '5px', height: '20px' }}/> Tips & Tricks</Button>
          <Button> <PeopleIcon style={{ marginRight: '5px'}}/> Following</Button>
        </ButtonContainer>

        <HomeContainer>

          <LeftContainer>
            <Categories>
              <h1>Categories</h1>
              <div className='category'>
                <p>Mountains</p>
                <p>(21)</p>
              </div>
              <div className='category'>
                <p>Traveling Video</p>
                <p>(17)</p>
              </div>
              <div className='category'>
                <p>Beauty of Seas</p>
                <p>(8)</p>
              </div>
              <div className='category'>
                <p>Cuisine</p>
                <p>(4)</p>
              </div>
              <div className='category'>
                <p>Guides for traveler</p>
                <p>(2)</p>
              </div>
              <div className='category'>
                <p>Other</p>
                <p>(32)</p>
              </div>
            </Categories>

            <PopularContainer>
              <PostButton>Popular Post</PostButton>
              <div className='popular-post'>
                <div className='image-info-container'>
                  <img src={PopularImg} alt="" style={{ width: '100%' }} />
                  <div className='image-info'>
                    <p>September 17, 2023</p>
                    <h2>Finding Love & Home in Tbilisi, Georgia</h2>
                  </div>
                </div>
              </div>
            </PopularContainer>

            <RecentPostContainer>
              <PostButton>Recent Post</PostButton>
              <div className='recent-post'>
                <img src={RCPost1} alt="" style={ {width: '17%'}}/>
                <div className='rc-post-text'>
                  <p>September 17, 2023</p>
                  <h2>Finding Love & Home in Tbilisi, Georgia</h2>
                </div>
              </div>

              <div className='recent-post'>
                <img src={RCPost2} alt="" style={ {width: '17%'}}/>
                <div className='rc-post-text'>
                  <p>September 17, 2023</p>
                  <h2>Finding Love & Home in Tbilisi, Georgia</h2>
                </div>
              </div>

              <div className='recent-post'>
                <img src={RCPost2} alt="" style={ {width: '17%'}}/>
                <div className='rc-post-text'>
                  <p>September 17, 2023</p>
                  <h2>Finding Love & Home in Tbilisi, Georgia</h2>
                </div>
              </div>
            </RecentPostContainer>

            <GetInTouchContainer>
              <PostButton>Get in touch</PostButton>
              <div className='social-buttons'>
                <SocialButton color="#4056AC">
                  <FacebookIcon />
                  <div className='social-text'>
                    <h1>65.5K</h1>
                    <span>Likes</span>
                  </div>
                </SocialButton>
                <SocialButton color="#60B7FE">
                  <TwitterIcon />
                  <div className='social-text'>
                    <h1>40.3K</h1>
                    <span>Followers</span>
                  </div>
                </SocialButton>
              </div>

              <div className='social-buttons'>
                <SocialButton color="#FE2C3C">
                  <YouTubeIcon />
                  <div className='social-text'>
                    <h1>25K</h1>
                    <span>Subscribers</span>
                  </div>
                </SocialButton>
                <SocialButton color="#E14D93">
                  <InstagramIcon />
                  <div className='social-text'>
                    <h1>30K</h1>
                    <span>Followers</span>
                  </div>
                </SocialButton>
              </div>
            </GetInTouchContainer>
          </LeftContainer>


{/* ------ Right side ---------------------------------*/}

          <RightContainer>

{/* -- Post 1 -- */}
            <PostContainer>
              <div className='blog-post'>
                <img src={mainpost1} alt="" />
              </div>
              <div className='blog-content'>
                <p style={{ fontSize: "14px"}} >October 10, 2023</p>
                <h1 style={{ fontSize: "22px", margin: "20px 0px 20px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                <p style={{ fontSize: "16px", lineHeight: "28px", fontWeight: "300", marginBottom: "20px"}}>Lorem ipsum dolor sit amet consectetur. Orci vestibulum dolor mattis euismod id donec tempus suscipit commodo. Pulvinar volutpat purus magna leo tincidunt tincidunt integer lectus. Volutpat libero turpis rutrum amet. Quis tristique ullamcorper mus enim habitant. Nibh venenatis varius sit purus cursus bibendum ut. Dignissim massa mi a cras.</p>
                
                <div className='blog-footer'>
                  <div className='blog-author'>
                    <img src={iconperson} style={ {width: "17px", marginRight: "10px"}} alt="" />
                    <h5 style={{ fontWeight: "400", fontSize: "15px"}}>David Adam</h5>
                  </div>

                  <div className='blog-comment'>
                    <img src={iconcomment} style={ {width: "17px", marginRight: "10px"}} alt="" />
                    <h5 style={{ fontWeight: "400", fontSize: "15px"}}>15 comments (33)</h5>
                  </div>
                </div>
              </div>
            </PostContainer>

{/* -- Post 2 -- */}
            <PostContainer2>
              <div className='post-container-sm2'>
                <div className='blog-post-2'>
                  <img src={mainpost2} alt="" />
                </div>
                <div className='blog-content-2'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>

{/* -- Post 3 -- */}
              <div className='post-container-sm3'>
                <div className='blog-post-3'>
                  <img src={mainpost3} alt="" />
                </div>
                <div className='blog-content-3'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </PostContainer2>

{/* ------ Post 4, 5 --------- */}

{/* -- Post 4 -- */}
            <PostContainer2>
              <div className='post-container-sm2'>
                <div className='blog-post-2'>
                  <img src={mainpost4} alt="" />
                </div>
                <div className='blog-content-2'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>

{/* -- Post 5 -- */}
              <div className='post-container-sm3'>
                <div className='blog-post-3'>
                  <img src={mainpost5} alt="" />
                </div>
                <div className='blog-content-3'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </PostContainer2>

{/* ----- Post 6, 7, 8 ---------------- */}

{/* -- Post 6 -- */}
<PostContainer>
              <div className='blog-post'>
                <img src={mainpost6} alt="" />
              </div>
              <div className='blog-content'>
                <p style={{ fontSize: "14px"}} >October 10, 2023</p>
                <h1 style={{ fontSize: "22px", margin: "20px 0px 20px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                <p style={{ fontSize: "16px", lineHeight: "28px", fontWeight: "300", marginBottom: "20px"}}>Lorem ipsum dolor sit amet consectetur. Orci vestibulum dolor mattis euismod id donec tempus suscipit commodo. Pulvinar volutpat purus magna leo tincidunt tincidunt integer lectus. Volutpat libero turpis rutrum amet. Quis tristique ullamcorper mus enim habitant. Nibh venenatis varius sit purus cursus bibendum ut. Dignissim massa mi a cras.</p>
                
                <div className='blog-footer'>
                  <div className='blog-author'>
                    <img src={iconperson} style={ {width: "17px", marginRight: "10px"}} alt="" />
                    <h5 style={{ fontWeight: "400", fontSize: "15px"}}>David Adam</h5>
                  </div>

                  <div className='blog-comment'>
                    <img src={iconcomment} style={ {width: "17px", marginRight: "10px"}} alt="" />
                    <h5 style={{ fontWeight: "400", fontSize: "15px"}}>15 comments (33)</h5>
                  </div>
                </div>
              </div>
            </PostContainer>

{/* -- Post 7 -- */}
            <PostContainer2>
              <div className='post-container-sm2'>
                <div className='blog-post-2'>
                  <img src={mainpost7} alt="" />
                </div>
                <div className='blog-content-2'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>

{/* -- Post 8 -- */}
              <div className='post-container-sm3'>
                <div className='blog-post-3'>
                  <img src={mainpost8} alt="" />
                </div>
                <div className='blog-content-3'>
                  <p style={{ fontSize: "13px"}}>October 10, 2023</p>
                  <h1 style={{ lineHeight: "23px", fontSize: "18px", margin: "12px 0px 12px 0px"}}>A traveler’s guide to Penang, Malaysia - Where to Eat, Drink, Sleep and Explore </h1>
                  <p style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "300", marginBottom: "12px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra pharetra ac erat commodo non leo eget graviverra. Pharetra pharetra.</p>
                  
                  <div className='blog-footer'>
                    <div className='blog-author'>
                      <img src={iconperson} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>David Adam</h5>
                    </div>

                    <div className='blog-comment'>
                      <img src={iconcomment} style={ {width: "14px", marginRight: "7px"}} alt="" />
                      <h5 style={{ fontWeight: "400", fontSize: "14px"}}>15 comments (33)</h5>
                    </div>
                  </div>
                </div>
              </div>
            </PostContainer2>

          </RightContainer>

        </HomeContainer>

        <PaginationContainer>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationContainer>
        
      </Container>  

      <Footer />

    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
`
const HorizontalLine = styled.div`
  width: 100%;
  border-top: 1px solid #CBCBCB;
  margin-bottom: 20px;
`
const Container = styled.div`
  margin-right: 3.5%;
  margin-left: 3.5%;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
  display: flex; 
  align-items: center;
  padding: 0px 15px;
  height: 40px;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #37717D;
  font-size: 16px;
  background-color: ${props => (props.active ? '#37717D' : 'white')};
  color: ${props => (props.active ? 'white' : '#37717D')};
`
const HomeContainer = styled.div`
  display: flex;
  padding: 20px;
`


// Left side --------------------------------------------------------------

const LeftContainer = styled.div`
  width: 30%;
  margin-right: 4%;
`
const Categories = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.20);

  h1 {
    font-size: 22px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
  }
  p {
    margin: 15px 25px;
    font-size: 16px;
    font-weight: 500;
  }

  .category {
    display: flex;
    justify-content: space-between;
  }
`

// Popular post
const PopularContainer = styled.div`
  .image-info-container {
    position: relative;
    cursor: pointer;
  }
  .image-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 99%;
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  .image-info p {
    font-size: 15px;
    color: #fff;
    padding: 30px 0px 50px 30px;
  }

  .image-info h2 {
    font-size: 25px;
    color: #fff;
    padding: 10px;
    font-weight: bold;
    padding: 30px 20px 0px 30px;
    line-height: normal;
  }
`
const PostButton = styled.div`
  margin-top: 40px; 
  margin-bottom: 20px;
  padding: 17px;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: #F99E52;
  color: white;
  font-size: 20px;
  font-weight: 700;
  box-shadow: 0px 0px 15px 0px rgba(55, 113, 125, 0.20);
`

// Recent post
const RecentPostContainer = styled.div`
  .recent-post {
    display: flex;
    padding: 20px 20px 0px 20px;
    cursor: pointer;
  }
  .rc-post-text {
    margin-left: 15px;
  }
  p{
    font-size: 14px;
    margin-bottom: 5px;
  }
`

// Get in touch
const GetInTouchContainer = styled.div`
  .social-buttons {
    display: flex;
  }
`
const SocialButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  margin: 10px 10px 0px 10px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${props => props.color || 'white'};
  color: white;
  font-size: 16px;
  & > .MuiSvgIcon-root {
    margin-right: 5px;
  }

  .social-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    font-size: 15px;
    & > span {
      font-size: 16px;
    }
  }
`

// Right side -----------------------------------------------------------
const RightContainer = styled.div`
  width: 70%;
`

// ----
const image = `
  width: 100%;
  border-radius: 10px 10px 0px 0px;
`
const content =`
  padding: 20px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.20);
  border-radius: 0px 0px 10px 10px; 
`
const footer =`
  .blog-footer {
    display: flex;
    justify-content: space-between;
  }

  .blog-author {
    display: flex;
    align-items: center;
  }

  .blog-comment {
    display: flex;
    align-items: center;
  }
`
// ----


const PostContainer = styled.div`
  cursor: pointer;
  margin-bottom: 50px;
  .blog-post {
    display: flex;
  }
  img { ${image} }
  .blog-content {
    ${content}
    padding: 30px;
    margin-bottom: 30px;
  }
  ${footer}
`

// --- Post 2, 3 ---
const PostContainer2 = styled.div`
  display: flex;
  margin-bottom: 30px;

  .post-container-sm2 {
    width: 50%;
    cursor: pointer;

    .blog-post-2 {
      display: flex;
      margin-right: 15px
    }
  
    img { ${image} } 
    .blog-content-2 {
      margin-right: 15px;
      ${content}
    }
    ${footer}
  }

  .post-container-sm3 {
    width: 50%;
    cursor: pointer;
    .blog-post-3 {
      display: flex;
      margin-left: 15px
    } 
    img { ${image} }  
    .blog-content-3 {
      margin-left: 15px;
      ${content}
    }
    ${footer}
  }
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0px 70px 0px;
`