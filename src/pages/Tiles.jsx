import "./tiles.css";
import BlogImage from "../assets/blog-img.jpg"
import { Link } from '@tanstack/react-router'

import SocailImage from "./social_Profile/design/destkop-design.jpg"


const Tile = ({data}) => {
    return (
        <Link className="tile-container" to={data.pathUrl ? data.pathUrl : '/'} >
            <div className="tile-text-area">
                <h3 className="project-name">
                    {data.name}
                </h3>
                <p className="project-desc">
                    {data.description}
                </p>
            </div>
            <img src={data.imageUrl} alt="blog image" className="tile-image" />
        </Link> 
    )
}


const Tiles = () => {
        const data = [{
        name: "Blog Post",
        description: "Short Descript",
        imageUrl: BlogImage,
        pathUrl: '/blog_preview_card'

    },
    {
        name: "socail card",
        description: "Short Descript",
        imageUrl: SocailImage,
        pathUrl: '/social_profile'

    },
    {
        name: "Blog Post",
        description: "Short Descript",
        imageUrl: BlogImage

    },
    {
        name: "Blog Post",
        description: "Short Descript",
        imageUrl: BlogImage

    }
    ]
    return (
        <div className="tiles-container">
            {data.map((d, _dx) => (
                // <Link to="/socail_profile">
                    <Tile key={_dx} data={d}/>
                // </Link>
            ))}
        </div>
    )
}
export default Tiles