import ReciteImage from '../pages/recipe-page/preview.jpg'
import SocailImage from '../pages/social-Profile/preview.jpg'
import BlogImage from '../pages/blog-preview-card/preview.jpg'
import ProductPreviewImage from '../pages/product-preview-card/design/desktop-preview.jpg'

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

    }
]

export function getPages() {
    return pagesInfo
}