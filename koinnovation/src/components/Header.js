import React from 'react'
import logo from '../images/logo.png'
import profile from '../images/profile.jpg'

const Header = ({searchQuery , handleSearch , totalFavorites}) => {
  return (
    <div className='sticky-top bg-white'>
        <header className='row align-items-center d-none d-sm-flex'>
            <div className="col-6 d-flex">

                <img className='' src={logo} alt="logo_img" style={{width : '150px' , height : '60%'}} />
                <input className="form-control mt-3" type="search" placeholder="Search" aria-label="Search" style={{ marginLeft: '10px', height: '40px' }} value={searchQuery} onChange={(e) => handleSearch(e.target.value)} />
            
            </div>
            <div className="col-4 offset-lg-1 offset-xl-2 offset-md-0 d-flex">

                <i className="bi bi-cart position-relative fs-5 mt-4">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">
                        0 <span className="visually-hidden">unread messages</span>
                    </span>
                </i>
                <i className="bi bi-heart position-relative fs-5 ms-4 me-4 mt-4">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">
                        {totalFavorites} <span className="visually-hidden">New alerts</span>
                    </span>
                </i>

                <select className="form-select" id="languageSelect" style={{width : '40%', height: '40px' , marginTop: '10px'}}>
                    <option value="en">
                        English
                    </option>
                    <option value="fr">
                        Français
                    </option>
                    <option value="es">
                        Español
                    </option>
                    <option value="de">
                        Deutsch
                    </option>
                </select>

                <div className="vr ms-2" style={{marginTop: '10px'}}></div>

                <img src={profile} className="border border-success rounded-circle ms-2 mt-2" alt="profile" style={{width : '45px' , height : '45px'}}></img>
                <div className="dropdown ms-2 mt-2">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Abdul Rahman
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
        <header className='d-sm-none'>
        <div className="row align-items-center">
            <div className="col-6">
            <img className='' src={logo} alt="logo_img" style={{width : '120px' , height : '50%'}} />
            </div>
            <div className="col-6  d-flex">
            <select className="form-select" id="languageSelect" style={{width : '50%', height: '40px' , marginTop: '10px'}}>
                <option value="en">
                    English
                </option>
                <option value="fr">
                    Français
                </option>
                <option value="es">
                    Español
                </option>
                <option value="de">
                    Deutsch
                </option>
            </select>
            <img src={profile} className="border border-success rounded-circle ms-4 mt-1" alt="..." style={{width : '50px' , height : '50px'}}></img>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col-8">
                <input className="form-control mt-3" type="search" placeholder="Search" aria-label="Search" style={{ marginLeft: '10px', height: '40px' }}/>
            </div>
            <div className="col-3 d-flex">
                <i className="bi bi-cart position-relative fs-5 ms-2 mt-4">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">
                        0 <span className="visually-hidden">unread messages</span>
                    </span>
                </i>
                <i className="bi bi-heart position-relative fs-5 ms-4 me-4 mt-4">
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1">
                        {totalFavorites} <span className="visually-hidden">New alerts</span>
                    </span>
                </i>
            </div>
        </div>
        </header>
    </div>
  )
}

export default Header