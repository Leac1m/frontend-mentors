import SupervisorIcon from './images/icon-supervisor.svg';
import KarmaIcon from './images/icon-karma.svg';
import CalculatorIcon from './images/icon-calculator.svg';
import TeamIcon from './images/icon-team-builder.svg';

import './style.css'

const FourCardFeatureSection = () => {
  return (
    <div className="page-wrapper">
<title>Frontend Mentor | Four card feature section</title>
  <h2>Reliable, efficient delivery</h2>
  <h1>Powered by Technology</h1>

  <p className='page-description'>Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful</p>
 
 
  <div className="cards-container">
    <div className="card-container cyan">
      <div className="text">
        <h3 className="card-name">Supervisor</h3>
        <p className="card-description">Monitors activity to identify project roadblocks</p> 
      </div>
      <img src={SupervisorIcon} alt="Supervision Icon" />
    </div>

    <div className="card-container red">
      <div className="text">
        <h3 className="card-name">Team Builder</h3>
        <p className="card-description">Scans our talent network to create the optimal team for your project</p> 
      </div>
      <img src={TeamIcon} alt=" Team Builder Icon" />
    </div>
    
    <div className="card-container orange">
      <div className="text">
        <h3 className="card-name">Karma</h3>
        <p className="card-description">Regularly evaluates our talent to ensure quality</p> 
      </div>
      <img src={KarmaIcon} alt="karma" />
    </div>

    <div className="card-container blue">
      <div className="text">
        <h3 className="card-name">Calculator</h3>
        <p className="card-description">Uses data from past projects to provide better delivery estimates</p> 
      </div>
      <img src={CalculatorIcon} alt="Calculator Icon" />
    </div>
  </div>
</div>

  )
}

export default FourCardFeatureSection
