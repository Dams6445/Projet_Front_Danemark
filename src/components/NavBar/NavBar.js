import React from 'react'
import b2wLogo from '../../images/b2w-logo.png'
import money from '../../images/philippines-currency.png'
import flag from '../../images/Flag_Philippines.png'
import './NavBar.css'
import { Search, Person, List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

//TODO: Remplace href="aLink" by your link

export default function NavBar() {
    return (
        <nav id="mainNav" className='navbar navbar-light navbar-expand-md sticky-top navbar-shrink pt-3 pb-5' style={{backgroundColor: 'white'}}>
            <div class="container">
                <div class="row justify-content-around" >
                    <div class="col-sm-2 align-self-center" style={{maxWidth: "25%"}}>
                        <Link to="/">
                            <img src={b2wLogo} class="img-fluid" alt="logo"/>
                        </Link>
                    </div>
                    <div class="col-sm-auto align-self-center" style={{maxWidth: "35%"}}>
                        <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navcol-1">
                            <span class="visually-hidden">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div id="navcol-1" class="collapse navbar-collapse">
                            <ul class="navbar-nav mx-auto d-flex align-items-center justify-content-between" style={{ width: "auto", height: "50px",borderRadius: "50px", boxShadow: "0px 3px 5px var(--bs-navbar-disabled-color)", border: "1px solid var(--bs-navbar-disabled-color)" }}>
                                <li class="nav-item"><a class="nav-link" href="index.html"> </a></li>
                                <li class="nav-item"><a class="nav-link" href="index.html">Location</a></li>
                                <li class="nav-item px-2">|</li>
                                <li class="nav-item"><a class="nav-link" href="services.html">Pick-up</a></li>
                                <li class="nav-item px-2">|</li>
                                <li class="nav-item"><a class="nav-link" href="projects.html">Return</a></li>
                                <li style={{width: "50px"}}>
                                    <button class="btn btn-primary" type="button" style={{ borderRadius: "50px" }}>
                                            <Search />
                                    </button>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-sm-1 align-self-center" style={{maxWidth: "10%"}}>
                        <img src={money} class="img-fluid" alt="money" style={{width: "25%"}}/>
                        <img src={flag} class="img-fluid" alt="flag" style={{width: "50%"}}/>
                    </div>
                    
                    <div class="col-sm-auto align-self-center" style={{maxWidth: "10%"}}>
                        <div id="navcol-2" class="navbar">
                            <ul class="navbar-nav mx-auto d-flex justify-content-center" style={{ width: "auto",borderRadius: "50px", boxShadow: "0px 3px 5px var(--bs-navbar-disabled-color)", border: "1px solid var(--bs-navbar-disabled-color)" }}>
                                <li class="nav-item">
                                    <button class="btn" type="button" style={{ borderRadius: "50px" }}>
                                        <Person style={{fontSize: "1.5em", color: "blue"}}/>
                                    </button>
                                </li>
                                <li class="nav-item">
                                    <button class="btn" type="button" style={{ borderRadius: "50px" }}>
                                        <List style={{fontSize: "1.5em", color: "blue"}}/>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        // <Link to="/home">Home</Link>
        // <Link to="/signIn">Sign In</Link>
    )
}
