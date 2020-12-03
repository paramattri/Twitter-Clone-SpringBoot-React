import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div className="twitterNavbar">
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><Link to='/twitter' className="navbar-brand">
                            <img src="https://generatefakepost.com/wp-content/uploads/2020/04/twitter-1.png" width="35" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                            Twitter</Link></div> 
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                            <Link to='/user' className="nav-link">@{localStorage.getItem('userName')}</Link>
                            <Link to='/add-tweet' className="nav-link">Tweet</Link>
                            <Link to='/trending' className="nav-link">Trending</Link>
                            </div>
                            <div className="navbar-nav collapse navbar-collapse justify-content-end">
                                <Link to='/logout' className="nav-link">Logout</Link>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar
