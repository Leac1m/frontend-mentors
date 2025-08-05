import DanielImg from './images/image-daniel.jpg'
import JeanetteImg from './images/image-jeanette.jpg'
import JonathanImg from './images/image-jonathan.jpg'
import KiraImg from './images/image-kira.jpg'
import PatrickImg from './images/image-patrick.jpg'
import './style.css'



const TestimonialGridSection = () => {
  return (
    <div className="wrapper">
      <div className="card-container purple">
        <div className="card-header">
          <img src={DanielImg} alt="Profile image" />
          <h2>Daniel Clifford</h2>
          <h3>Verified Graduate</h3>
        </div>

        <p className="post">
          I received a job offer mid-course, and the subjects I learned were current, if not more so, 
          in the company I joined. I honestly feel I got every penny’s worth.</p>

        <p className="qoute">
          “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
          transition and have heard some people who had an amazing experience here. I signed up 
          for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
          The next 12 weeks was the best - and most grueling - time of my life. Since completing 
          the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
        </p>
      </div>

      <div className="card-container grey">
        <div className="card-header">
          <img src={JonathanImg} alt="Profile image" />
          <h2>Jonathan Walters</h2>
          <h3>Verified Graduate</h3>
        </div>

        <p className="post">
          The team was very supportive and kept me motivated</p>

        <p className="qoute">
          “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
          for a big company. This was one of the best investments I’ve made in myself. ”
        </p>
      </div>
  
      <div className="card-container jeanatee white">
        <div className="card-header">
          <img src={JeanetteImg} alt="Profile image" />
          <h2>Jeanette Harmon</h2>
          <h3>Verified Graduate</h3>
        </div>

        <p className="post">
          An overall wonderful and rewarding experience</p>

        <p className="qoute">
          “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
          while doing something I love. ”
        </p>
      </div>
  
        <div className="card-container black">
        <div className="card-header">
          <img src={PatrickImg} alt="Profile image" />
          <h2>Patrick Abrams</h2>
          <h3>Verified Graduate</h3>
        </div>

        <p className="post">
          Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
          learning from their experiences was easy.</p>

        <p className="qoute">
          “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
          gave me the confidence necessary to be able to go out in the world and present myself as a capable 
          junior developer. The standard is above the rest. You will get the personal attention you need from 
          an incredible community of smart and amazing people. ”
        </p>
      </div>
    
      <div className="card-container kira white">
        <div className="card-header">
          <img src={KiraImg} alt="Profile image" />
          <h2>Kira Whittle</h2>
          <h3>Verified Graduate</h3>
        </div>

        <p className="post">
          Such a life-changing experience. Highly recommended!</p>

        <p className="qoute">
          “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
            professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
            student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
            did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
            project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
            could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
            experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
            100% recommend! ”
        </p>
      </div>
</div>

  )
}

export default TestimonialGridSection
