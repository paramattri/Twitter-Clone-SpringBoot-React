import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="container">
                <div className="jumbotron">
			
                <h1 className="display-4">Welcome to Twitter Clone Project!</h1>
                <br/>
                <h3 className="display-8">Click on the below buttons to Enjoy!</h3>
                <hr className="my-4"/>

                <Link to='/register' className="btn btn-primary btn-lg" role="button">Register</Link>&nbsp;
                <Link to='/login' className="btn btn-primary btn-lg" role="button">Login</Link>

                </div>
                </div>
		        
	        </div>
        )
    }
}

export default Home
