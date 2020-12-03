import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Logout extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    componentDidMount(){
        localStorage.removeItem("userName")
    }

    render() {
        return (
            <div className="logout">
                
                <div className="container">
		            <div className="jumbotron">
		
			            <h1 className="display-5">Successfully Logged Out, Thanks for your time!</h1>
			            <hr className="my-4"/>
			            <br/>
                        <Link to='/login' className="btn btn-outline-primary" role="button">Log In to Existing Account</Link>

                    </div>
	            </div>

            </div>
        )
    }
}

export default Logout
