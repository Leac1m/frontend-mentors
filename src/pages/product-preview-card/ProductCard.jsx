import './style.css'
import MobileProductImage from './images/image-product-mobile.jpg'
import DesktopProductImage from './images/image-product-desktop.jpg'
import Cart from './images/icon-cart.svg'

const ProductCard = () => {
   return (
    <div className="product-wraper">
      <div className="product-card-main">
      <title>Frontend Mentor | Product preview card component</title>
      <picture >
        <source className="main-img" media="(min-width: 500px)" srcset={DesktopProductImage}  />
        <img className="main-img" src={MobileProductImage} alt="Product preview image" />
      </picture>
      <div className="text-area">
        <h3>Perfume</h3>

        <h2>Gabrielle Essence Eau De Parfum</h2>

        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.</p>
        <div className="prices">
          <p className="discount-price">$149.99</p>
          <span className="real-price">$169.99</span>
        </div>

        <button><img src={Cart} alt="cart image"></img>Add to Cart</button>
      </div>
  </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Michael Obe</a>.
      </div>
    </div>
   )
}
 
 export default ProductCard
 
 

