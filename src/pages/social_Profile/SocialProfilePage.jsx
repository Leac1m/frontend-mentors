import './style.css'
import AvatarImage from "./assets/images/avatar-jessica.jpeg"

const SocialProfilePage = () => {
  return (
    <>
    <div className="body">
    <main className="wrapper">
    <div className="container">
      <img src={AvatarImage} alt="" />
      <h2 className="name">Jessica Randall</h2>
      <h3 className="location">London, United Kingdom</h3>
      <div className="decs">"Front-end developer and avid reader."</div>
    
      <div className="container links">
        <a href="#" className="link">GitHub</a>
        <a href="#" className="link">Frontend Mentor</a>
        <a href="#" className="link">LinkedIn</a>
        <a href="#" className="link">Twitter</a>
        <a href="#" className="link">Instagram</a>
      </div>
    </div>
  </main>
    </div>
  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Michael Obe</a>.
  </div>
    </>
  )
}

export default SocialProfilePage