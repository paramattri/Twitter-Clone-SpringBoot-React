import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            userName : '',
            password : '',
             
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this)
        this.changePasswordHandler = this.changePasswordHandler.bind(this)

    }
    
    loginHandler = (e) => {
        e.preventDefault()
        let login = {userName : this.state.userName, password : this.state.password}
        console.log('login =>>' + JSON.stringify(login))
        axios.post("http://localhost:8080/twitter/login", login).then(response => {
            if(response.data === 'Success'){
                localStorage.setItem('userName', this.state.userName)
                this.props.history.push("/twitter")
            }          
            else
                alert("Please provide valid details!!\nLogin Again Or Register")
        })

    }

    changeUserNameHandler = (e) => {
        this.setState({
            userName : e.target.value
        })
    }

    changePasswordHandler = (e) => {
        this.setState({
            password : e.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <div className="container">

                <div className="jumbotron">

                    <h1 class="display-4">Login</h1>
                    <hr class="my-4"/>
                    <form onSubmit={this.loginHandler}>
                    <div className="form-group">
                        <label for="userName">Username</label>
                        <input type="text" className="form-control" id="userName" value={this.state.userName} onChange={this.changeUserNameHandler}/>
                    </div>


                    <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.changePasswordHandler}/>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                    <br/>
                    <br/>
                    <span>Don't have an account? <Link to='/register' className="btn btn-outline-primary btn-sm" role="button">Sign up</Link></span>  
                    </div>  

                </div>
                
                              
            </div>
        )
    }
}

export default Login
