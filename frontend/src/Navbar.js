import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg navbar-light border-bottom">
                <div class="container">
                <Link class="navbar-brand" to="/"><img src="media/images/logo.svg" style={{width:'20%'}} alt="" /> </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                      
                        <form class="d-flex">
                              <ul class="navbar-nav  mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active " aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/product">Product</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/support">Support</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/login">Login</Link>
                            </li>
                            
                            {/* <li class="nav-item dropdown">
                              
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                           
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;