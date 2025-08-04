import './style.css'
import MobileProductImage from './images/image-product-mobile.jpg'
import DesktopProductImage from './images/image-product-desktop.jpg'

const ProductCard = () => {
   return (
    <div className="product-wraper">

      <div className="product-card-main">
      <title>Frontend Mentor | Product preview card component</title>

      <img src={MobileProductImage} alt="Product preview image" />
      <div className="text-area">
        <h3>Perfume</h3>

        <h2>Gabrielle Essence Eau De Parfum</h2>

        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, 
        Perfumer-Creator for the House of CHANEL.</p>
        <div className="prices">
          <p className="discount-price">$149.99</p>
          <span className="real-price">$169.99</span>
        </div>

        <button>Add to Cart</button>

      </div>
      
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Your Name Here</a>.
      </div>
  </div> 
    </div>
   )
}
 
 export default ProductCard
 
 

