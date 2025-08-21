import ReciteImage from '../pages/recipe-page/preview.jpg'
import SocailImage from '../pages/social-Profile/preview.jpg'
import BlogImage from '../pages/blog-preview-card/preview.jpg'
import ProductPreviewImage from '../pages/product-preview-card/design/desktop-preview.jpg'
import FourCardFeatureImage from '../pages/four-card-feature-section-master/design/desktop-preview.jpg'
import TestimonialGridImage from '../pages/testimonials-grid-section-main/preview.jpg'
import ClipBorderImage from '../pages/clipboard-landing-page-master/design/desktop-design.jpg'
import ExtensionImage from '../pages/browser-extensions-manager/preview.jpg'

const pagesInfo = [{
        name: "Blog Post",
        description: "Short Descript",
        imageUrl: BlogImage,
        pathUrl: '/blog-preview-card'

    },
    {
        name: "Social card",
        description: "Short Descript",
        imageUrl: SocailImage,
        pathUrl: '/social-profile'

    },
    {
        name: "Recipe Page",
        description: "Short Descript",
        imageUrl: ReciteImage,
        pathUrl: '/recipe'

    },
    {
        name: "Product Preview Page",
        description: "Short Descript",
        imageUrl: ProductPreviewImage,
        pathUrl: '/product-preview-card'

    },
    {
        name: "Four card Feature",
        description: "Short Descript",
        imageUrl: FourCardFeatureImage,
        pathUrl: '/four-card-feature'
    },
    {
        name: "testimonials card",
        description: "Short Descript",
        imageUrl: TestimonialGridImage,
        pathUrl: '/testimonial-grid-section'
    },
    {   
        name: "Clipboard page",
        description: "Short Descript",
        imageUrl: ClipBorderImage,
        pathUrl: '/clipborder-landing-page'
    },
    {   
        name: "Browser Extension",
        description: "Short Descript",
        imageUrl: ExtensionImage,
        pathUrl: '/browser-extension'
    }
    // /browser-extension'
]

export function getPages() {
    return pagesInfo
}