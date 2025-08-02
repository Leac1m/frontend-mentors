import "./style.css";
import { Link } from '@tanstack/react-router'
import { getPages } from "../../api/pages";
import { useState } from "react";
import { useEffect } from "react";





const Dashboard = () => {
    const [pagesInfo, setPagesInfo] = useState([]);
    useEffect(
        () => {
            const data = getPages();
            setPagesInfo(data);
        }, []
    )
    return (
        <div className="tiles-container">
            {pagesInfo.map((d, _dx) => (
                    <Tile key={_dx} data={d}/>
            ))}
        </div>
    )
}

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
export default Dashboard