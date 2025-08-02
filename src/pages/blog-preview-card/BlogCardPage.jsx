import './style.css'
import AvatarImage from './assets/images/image-avatar.webp'
import ArticleImage from './assets/images/illustration-article.svg'

const BlogCardPage = () => {
  return (
    <>
    <div className='main'>
        <div className="card-container">
            <h3 className="tag">Learning</h3>
          
            <h4 className="date">Published 21 Dec 2023</h4>
          
            <h2 className="title">HTML & CSS foundations</h2>
          
            <p className="text">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          
            <div className="author">
              <img src={AvatarImage} alt="profile picture" className="profile-pic"/>
              <span>Greg Hooper</span>
            </div>

            <img src={ArticleImage} alt="card picture" className="card-image"/>
        </div>
    </div>

  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div>
    </>
  )
}

export default BlogCardPage