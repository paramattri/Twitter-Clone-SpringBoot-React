import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Registration extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            firstName : '',
            lastName : '',
            userName : '',
            emailId : '',
            password : ''
             
        }

        this.registerHandler = this.registerHandler.bind(this)
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this)
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this)
        this.changeEmailHandler = this.changeEmailHandler.bind(this)
        this.changePasswordHandler = this.changePasswordHandler.bind(this)
    }
    
    registerHandler = (e) => {
        e.preventDefault()
        let user = {firstName : this.state.firstName, lastName : this.state.lastName, userName : this.state.userName, 
                    emailId : this.state.emailId, password : this.state.password}
        console.log('user =>>' + JSON.stringify(user))
        axios.post("http://localhost:8080/twitter/register", user).then(response => {
            console.log(response)
            if(response.data === 'Success')
                this.props.history.push("/login")
            else
                alert("Please provide valid details!!\nRegister Again.")
        })

    }

    changeFirstNameHandler = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }

    changeLastNameHandler = (e) => {
        this.setState({
            lastName : e.target.value
        })
    }

    changeUserNameHandler = (e) => {
        this.setState({
            userName : e.target.value
        })
    }

    changeEmailHandler = (e) => {
        this.setState({
            emailId : e.target.value
        })
    }

    changePasswordHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    render() {
        return (
            <div className="registration">
                <div className="container">

                    <div className="jumbotron">
                        <h1 className="display-4">Create a new account</h1>
		                <hr className="my-4"/>
                        <form>
                        <div className="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                        </div>

                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                        </div>

                        <div className="form-group">
                            <label for="userName">Username</label>
                            <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.changeUserNameHandler}/>
                        </div>

                        <div className="form-group">
                            <label for="emailId">Email</label>
                            <input type="email" className="form-control" id="emailId" aria-describedby="emailHelp" value={this.state.emailId} onChange={this.changeEmailHandler}/>
                        </div>                    

                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={this.registerHandler}>Submit</button>
                        </form>
                        <br/>
                        <Link to='/login' className="btn btn-outline-primary btn-sm" role="button">Log In to Existing Account</Link>

                    </div>

                </div>
                
            </div>
        )
    }
}

export default Registration
