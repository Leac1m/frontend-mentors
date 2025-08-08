import './style.css'
import JsonData from './data.json'
import { useState } from 'react'

import Logo from './assets/images/logo.svg'
import Sun from './assets/images/icon-sun.svg'
import Moon from './assets/images/icon-moon.svg'



const BrowseExtension = () => {
  const [data, setData] = useState(JsonData);
  const [theme, setTheme] = useState("light");
  console.log(data)

  const toggleTheme = () => {
    const newTheme = (theme === "light") ? "dark" : "light";
    setTheme(newTheme);
  }
  const setIsActive = (logo, bool) => {
    setData(data.map(d => {
      return (d.logo == logo) ? {
        name: d.name,
        logo: d.logo,
        description: d.description,
        isActive: bool
      } : d
    }))
  }

  const onRemove = (logo) => {
    setData(data.filter(d => {
      return (d.logo !== logo)
    }))
  }
  return (
    <div className='main' theme={theme}>
      <div className="wrapper">
        <div className="header">
          <img src={Logo} alt="" />
          <div className="theme-icon" onClick={toggleTheme}>
            <img src={(theme === "dark") ? Sun : Moon} alt=""/>
          </div>
        </div>
        <div className="sub-header">
          <h1>Extensions List</h1>

          <div className="filters">
            <div className="filter-tab selected-filter-tab">All</div>
            <div className="filter-tab">Active</div>
            <div className="filter-tab">Inactive</div>
          </div>
        </div>
        <div className="card-container">
          {
            data.map((d) => (
              <Card  key={d.logo} name={d.name} logo={d.logo} description={d.description} isActive={d.isActive} onRemove={onRemove} setIsActive={setIsActive}/>

            ))
          }
        </div>
      </div>
    </div>
  )
}

function Card({
  logo,
  name,
  description,
  image,
  isActive,
  onRemove,
  setIsActive,
}) {
  const toggleIsActive = () => {
    setIsActive(logo, !isActive);
  }
  return (
    <div className="card">
      <img src={image} className="card-image" alt="Extension Logo" />
      <p className="card-name">{name}</p>
      <p className="card-description">
        {description}
      </p>

      <div className="card-funtions">
        <div className='remove' onClick={() => onRemove(logo)}>remove</div>

        <div className="switch" onClick={toggleIsActive}>
          {isActive ? (<>As</>) : (<>Da</>)}
        </div>
      </div>
    </div>
  )
}
export default BrowseExtension
