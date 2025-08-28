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
import Product1 from './images/image-product-1.jpg';
import Product2 from './images/image-product-2.jpg';
import Product3 from './images/image-product-3.jpg';
import Product4 from './images/image-product-4.jpg';

// Tumbnails
import Tumbnail1 from './images/image-product-1-thumbnail.jpg';
import Tumbnail2 from './images/image-product-2-thumbnail.jpg';
import Tumbnail3 from './images/image-product-3-thumbnail.jpg';
import Tumbnail4 from './images/image-product-4-thumbnail.jpg';

const Ecommerce = () => {
  const [sideBarIsActive, setSidebarIsActive] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' });
  const [focus, setFocus] = useState(0);
  const [count, setcount] = useState(0);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const productImages = [
    {
      id: 1,
      image: Product1,
      tumbnail: Tumbnail1,
    },
    {
      id: 2,
      image: Product2,
      tumbnail: Tumbnail2,
    },
    {
      id: 3,
      image: Product3,
      tumbnail: Tumbnail3,
    },
    {
      id: 4,
      image: Product4,
      tumbnail: Tumbnail4,
    },
  ];

  const toggle = () => {
    setSidebarIsActive(!sideBarIsActive);
  };

  console.log(isMobile && sideBarIsActive);

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
          <nav className={isMobile ? (sideBarIsActive ? 'sidebar' : '') : ''}>
            <img
              className="close-nav"
              onClick={toggle}
              src={CloseIcon}
              alt=""
            />
            <ul>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
        <div className="right">
          <div className="cart-container">
            <img
              className="cart"
              src={CartIcon}
              alt="cart"
              onClick={() => setShowCartDropdown(!showCartDropdown)}
            ></img>
            {showCartDropdown && (
              <div className="cart-dropdown">
                <h3>Cart</h3>
                <div className="cart-body">
                  <div className="cart-items">
                    <img className='tumbnail' src={productImages[1].tumbnail}/>
                    <p className='product-name'>Fall Limited Edition Sneakers</p>
                    <p className="price-details">$128 x 3 $584</p>
                    <div className="trash-bin">T</div>
                  </div>
                    <div className="chechout-button">
                      Checkout
                    </div>
                </div>
                {/* <p>Cart Items...</p> */}
              </div>
            )}
          </div>
          <img className="profile" src={AvatarIcon}></img>
        </div>
      </header>

      <section className="section">
        <div className="product-images">
          <div className="main-img">
            <img
              className="main-image"
              src={productImages[focus].image}
              alt="Images"
            />
            <img
              className="image-nav prev"
              onClick={() => {
                console.log('Prev', focus - 1);
                focus !== 0 && setFocus(focus - 1);
              }}
              src={PreviousIcon}
              alt=""
            />
            <img
              className="image-nav next"
              src={NextIcon}
              onClick={() => {
                console.log('next', focus + 1);
                focus < productImages.length - 1 && setFocus(focus + 1);
              }}
              alt=""
            />
          </div>
          <div className="tumbnails">
            {productImages.map((image, _idx) => (
              <div className={_idx == focus ? 'focus' : ''}>
                <img
                  key={image.id}
                  src={image.tumbnail}
                  alt=""
                  onClick={() => setFocus(_idx)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="product-details">
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
            <div className="real-price">$250.00</div>
          </div>

          <div className="buttons">
            <div className="quantity">
              <button
                className="sign"
                onClick={() => {
                  count && setcount(count - 1);
                }}
              >
                <img src={MinusIcon} alt="" />
              </button>
              <div>{count}</div>
              <button
                className="sign"
                onClick={() => {
                  setcount(count + 1);
                }}
              >
                <img src={PlusIcon} alt="" />
              </button>
            </div>

            <button className="buy">
              <img className="cart" src={CartIcon} alt="cart"></img>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ecommerce;
