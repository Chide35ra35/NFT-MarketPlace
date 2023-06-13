import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Sidebar(){
   
    const userInfor = JSON.parse(localStorage.getItem("userInfor"));
    const navigate = useNavigate()
    function logout(){
        localStorage.removeItem("userInfor");
        // window.location.reload() 
      }
      useEffect(() => {
        !userInfor && navigate("/login")
      })
    return <>
       <nav className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg" id="navbarVertical">
                    <div className="container-fluid">
                        {/* Toggler */}
                        <button className="navbar-toggler ms-n2" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Brand */}
                        <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="/">
                            {/* <img src="https://preview.webpixels.io/web/img/logos/clever-primary.svg" alt="..." /> */}
                            <h3> <span className="login-icon">{userInfor && userInfor.username.substr(0,1)}</span> NFT Market</h3>
                        </a>
                        {/* User menu (mobile) */}
                        <div className="navbar-user d-lg-none">
                            {/* Dropdown */}
                            <div className="dropdown">
                                {/* Toggle */}
                                <a href="#" id="sidebarAvatar" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <div className="avatar-parent-child">
                                        <img alt="Image Placeholder" src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80" className="avatar avatar- rounded-circle" />
                                        <span className="avatar-child avatar-badge bg-success" />
                                    </div>
                                </a>
                                {/* Menu */}
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="sidebarAvatar">
                                    <a href="#" className="dropdown-item">Profile</a>
                                    <a href="#" className="dropdown-item">Settings</a>
                                    <a href="#" className="dropdown-item">Billing</a>
                                    <hr className="dropdown-divider" />
                                    <a href="#" className="dropdown-item">Logout</a>
                                </div>
                            </div>
                        </div>
                        {/* Collapse */}
                        <div className="collapse navbar-collapse" id="sidebarCollapse">
                            {/* Navigation */}
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashboard">
                                        <i className="bi bi-house" /> Dashboard
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-bar-chart" /> Analitycs
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <i className="bi bi-chat" /> Messages
                                        <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">6</span>
                                    </a>
                                </li>
                              
                                <li className="nav-item">
                                    <a className="nav-link" href="/collections">
                                        <i className="bi bi-bookmarks" /> Collections
                                    </a>
                                </li>
                                {
                                    userInfor && userInfor.isAdmin &&  <li className="nav-item">
                                    <a className="nav-link" href="/users">
                                        <i className="bi bi-people" /> Users
                                    </a>
                                </li>
                                }
                               
                            </ul>
                            
                           
                           
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/profile">
                                        <i className="bi bi-person-square" /> Profile
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a onClick={logout} className="nav-link" href="/">
                                        <i className="bi bi-box-arrow-left" /> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </>
}