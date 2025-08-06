import './style.css';
import ComputerImg from './images/image-computer.png';
import DevicesImg from './images/image-devices.png';
import BlacklistImg from './images/icon-blacklist.svg';
import TextImg from './images/icon-text.svg';
import PreviewImg from './images/icon-preview.svg';

import HpIcon from './images/logo-hp.png';
import IbmIcon from './images/logo-ibm.png';
import MsIcon from './images/logo-microsoft.png';
import GoogleIcon from './images/logo-google.png';
import VectorIcon from './images/logo-vector-graphics.png';

import Logo from './images/logo.svg';
import FacebookIcon from './images/icon-facebook.svg';
import InstagramIcon from './images/icon-instagram.svg';
import TwitterIcon from './images/icon-twitter.svg';



const ClipborderLandingPage = () => {
  return (
    <div className="main-wraper">
      <title>Frontend Mentor | Clipboard landing page</title>
      <section className="section hero" section-padding="narrow">
        <img src={Logo} alt="Logo image" />
        <h1 className="header-h1">A history of everything you copy</h1>
        <p className="text">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="buttons">
          <button className="button">Download for iOS</button>
          <button className="button btn-sec">Download for Mac</button>
        </div>
      </section>

      <section className="section section--left-padding">
        <div className="header">
          <h2 className="header-h2">Keep track of your snippets</h2>

          <p className="text">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </p>
        </div>

        <div className="content-container">
          <img src={ComputerImg} alt="Computer Image" />
          <div className="text-container one">
            <h3 className="header-h3">Quick Search</h3>
            <p className="text">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          <div className="text-container two">
            <h3 className="header-h3">iCloud Sync</h3>
            <p className="text">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>

          <div className="text-container three">
            <h3 className="header-h3">Complete History</h3>
            <p className="text">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="header">
          <h2 className="header-h2">Access Clipboard anywhere</h2>
          <p className="text">
            Whether you’re on the go, or at your computer, you can access all your
            Clipboard snippets in a few simple clicks.
          </p>
        </div>
        <img src={DevicesImg} alt="Image of devices" />
      </section>

      <section className="section">
        <div className="header">
          <h2 className="header-h2">Supercharge your workflow</h2>
          <p className="text">
            We’ve got the tools to boost your productivity.
          </p>
          <div className=""></div>
        </div>

        <div className="icon-wrapper">
          <div className="center-align">
            <img src={BlacklistImg} alt="Blacklist Icon" />
            <h3 className="header-h3">Create blacklists</h3>
            <p className="text">
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>

          <div className="center-align">
            <img src={TextImg} alt="Text Icon" />
            <h3 className="header-h3">Plain text snippets</h3>
            <p className="text">
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="center-align">
            <img src={PreviewImg} alt="Preview Icon" />
            <h3 className="header-h3">Sneak preview</h3>
            <p className="text">
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </section>

      <section className='section'>
        <div className="icon-wrapper">
          <img className="" src={GoogleIcon} alt="Google Icon" />
          <img className="" src={IbmIcon} alt="IBM Icon" />
          <img className="" src={MsIcon} alt="Microsoft Icon" />
          <img src={HpIcon} alt="Hp Logo" />
          <img className="" src={VectorIcon} alt="Vector Graphics Icon" />
        </div>
      </section>

      <section className="section" section-padding="narrow">
        <div className="header">
          <h2 className="header-h2">Clipboard for iOS and Mac OS</h2>
          <p className="text">
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
        </div>

        <div className="buttons">
          <button className="button">Download for iOS</button>
          <button className="button btn-sec">Download for Mac</button>
        </div>
      </section>

      <footer className='section'>
        <img src={Logo} alt="Icon" />
        <div className="links">
          <p><a href="#">FAQs</a></p>
          <p><a href="#">Contact Us</a></p>
          <p><a href="#">Privacy Policy</a></p>
          <p><a href="#">Press Kit</a></p>
          <p><a href="#">Install Guide</a></p>
        </div>
        <div className="social-icons">
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={TwitterIcon} alt="Twitter Icon" />
          <img src={InstagramIcon} alt="Instagram Icon" />
        </div>
        </footer>
    </div>
  );
};

export default ClipborderLandingPage;
