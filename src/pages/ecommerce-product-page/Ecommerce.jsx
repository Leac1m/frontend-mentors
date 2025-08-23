import './style.css';
import React from 'react';
import Logo from './images/logo.svg';

const Ecommerce = () => {
  return (
    <div>
      <title>Frontend Mentor | E-commerce product page</title>

      <nav>
        <div className="left">
          <div className="logo">
              <img src={Logo} alt="" />
          </div>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className='right'>
          <img className="cart" src={importImg('./images/icon-cart.svg')} alt='cart'></img>
          <img className="profile" src={importImg('./images/image-avatar.png')}></img>
        </div>
      </nav>

      <section className='section'>
        <div className="product-images">
          <div className="main-img">
            <img className='main-image' src={importImg('./images/image-product-1.jpg')} alt="Images" />
              <img className='image-nav prev' src={importImg('./images/icon-previous.svg')} alt="" />
              <img className='image-nav next' src={importImg('./images/icon-next.svg')} alt="" />
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
              <p className="price">$125.00 <span className="discount-percent">50%</span></p>
            </div>
            <div className="real-price">
              $250.00
            </div>
          </div>

          <div className="buttons">
            <div className="quantity">
              <button><img src={importImg('./images/icon-minus.svg')} alt="" /></button>
              <div>0</div>
              <button><img src={importImg('./images/icon-plus.svg')} alt="" /></button>
            </div>

            <button className='buy'>Add to cart</button>
          </div>
        </div>
      </section>
    </div>
  );
};

// src/pages/ecommerce-product-page/images/image-product-1.jpg
const importImg = (name) => {
  return new URL(`${name}`, import.meta.url).href;
};

export default Ecommerce;
