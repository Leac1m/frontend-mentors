import './style.css';
import Logo from './images/logo.svg';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { importImg } from './api';

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
                <img src={importImg('./images/icon-menu.svg')} onClick={toggle} alt="" />
              </div>
            </MediaQuery>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav className={isMobile && (sideBarIsActive ? 'sidebar' : '')}>
                <img className='close-nav' onClick={toggle} src={importImg('./images/icon-close.svg')} alt="" />
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
                <img className="cart" src={importImg('./images/icon-cart.svg')} alt='cart'></img>
                <img className="profile" src={importImg('./images/image-avatar.png')}></img>
              </div>
      </header>

      <section className='section'>
        <div className="product-images">
          <div className="main-img">
            <img className='main-image' src={importImg('./images/image-product-1.jpg')} alt="Images" />
              <img className='image-nav prev' src={importImg('./images/icon-previous.svg')} alt="" />
              <img className='image-nav next' src={importImg('./images/icon-next.svg')} alt="" />
          </div>
          <div className="tumbnails">
            <img src={importImg('./images/image-product-1-thumbnail.jpg')} alt="" />
            <img src={importImg('./images/image-product-2-thumbnail.jpg')} alt="" />
            <img src={importImg('./images/image-product-3-thumbnail.jpg')} alt="" />
            <img src={importImg('./images/image-product-4-thumbnail.jpg')} alt="" />
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
              <button className='add'><img src={importImg('./images/icon-minus.svg')} alt="" /></button>
              <div>0</div>
              <button className='sub'><img src={importImg('./images/icon-plus.svg')} alt="" /></button>
            </div>

            <button className='buy'>
              <img className="cart" src={importImg('./images/icon-cart.svg')} alt='cart'></img>
              <span>Add to cart</span>
              </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
