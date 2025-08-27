import './style.css';
import Logo from './images/logo.svg';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

// Icons
import MenuIcon from './images/icon-menu.svg';
import CloseIcon from './images/icon-close.svg';
import CartIcon from './images/icon-cart.svg';
import AvatarIcon from './images/image-avatar.png';
import PreviousIcon from './images/icon-previous.svg';
import NextIcon from './images/icon-next.svg';
import PlusIcon from './images/icon-plus.svg';
import MinusIcon from './images/icon-minus.svg';

// Product Images
import Prudoct1 from './images/image-product-1.jpg';
import Prudoct2 from './images/image-product-2.jpg';
import Prudoct3 from './images/image-product-3.jpg';
import Prudoct4 from './images/image-product-4.jpg';

// Tumbnails
import Tumbnail1 from './images/image-product-1-thumbnail.jpg';
import Tumbnail2 from './images/image-product-2-thumbnail.jpg';
import Tumbnail3 from './images/image-product-3-thumbnail.jpg';
import Tumbnail4 from './images/image-product-4-thumbnail.jpg';


const Ecommerce = () => {
  const [sideBarIsActive, setSidebarIsActive] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });

  const toggle = () => {
    setSidebarIsActive(!sideBarIsActive);
  }

  console.log(isMobile && sideBarIsActive)

  return (
    <div>
      <title>Frontend Mentor | E-commerce product page</title>

      <header>
          <div className="left">
            <MediaQuery maxWidth={760}>
              <div className="hamburger">
                <img src={MenuIcon} onClick={toggle} alt="" />
              </div>
            </MediaQuery>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav className={isMobile && (sideBarIsActive ? 'sidebar' : '')}>
                <img className='close-nav' onClick={toggle} src={CloseIcon} alt="" />
                <ul>
                  <li>Collections</li>
                  <li>Men</li>
                  <li>Women</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>

            </nav>
          </div>
              <div className='right'>
                <img className="cart" src={CartIcon} alt='cart'></img>
                <img className="profile" src={AvatarIcon}></img>
              </div>
      </header>

      <section className='section'>
        <div className="product-images">
          <div className="main-img">
            <img className='main-image' src={Prudoct1} alt="Images" />
              <img className='image-nav prev' src={PreviousIcon} alt="" />
              <img className='image-nav next' src={NextIcon} alt="" />
          </div>
          <div className="tumbnails">
            <img src={Tumbnail1} alt="" />
            <img src={Tumbnail2} alt="" />
            <img src={Tumbnail3} alt="" />
            <img src={Tumbnail4} alt="" />
          </div>
        </div>
        <div className="product-details flow">
          <h2>Sneaker Company</h2>
          <h1 className="product-name">Fall Limited Edition Sneakers</h1>
          <p className="description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="prices">
            <div className="discount">
              <p className="price">$125.00 </p>
              <p className="discount-percent">50%</p>
            </div>
            <div className="real-price">
              $250.00
            </div>
          </div>

          <div className="buttons">
            <div className="quantity">
              <button className='add'><img src={MinusIcon} alt="" /></button>
              <div>0</div>
              <button className='sub'><img src={PlusIcon} alt="" /></button>
            </div>

            <button className='buy'>
              <img className="cart" src={CartIcon} alt='cart'></img>
              <span>Add to cart</span>
              </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
