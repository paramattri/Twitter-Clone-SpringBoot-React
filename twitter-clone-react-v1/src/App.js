import './App.css';
import Tweet from './components/Tweet';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CreateTweet from './components/CreateTweet';
import UpdateTweet from './components/UpdateTweet';
import TrendingTweets from './components/TrendingTweets';
import Registration from './components/Registration';
import Login from './components/Login';
import Home from './components/Home';
import UserTweets from './components/UserTweets';
import Logout from './components/Logout';

function App() {

  const heading ={
    color:'white'
  }

  return (
    <div className="app">
      {/* <h1 className="display-4" style={heading}>Twitter Clone</h1>
      <Tweet/> */}
      <Router>
      
        {/* <Navbar/> */}
        {/* <div className="container">
          <br></br> */}
          <Switch>

            <Route path="/" exact component = {Home}></Route>
            <Route path="/twitter" component = {Tweet}></Route>
            <Route path="/register" component = {Registration}></Route>
            <Route path="/login" component = {Login}></Route>
            <Route path="/add-tweet" component = {CreateTweet}></Route>
            <Route path="/update-tweet/:id" component = {UpdateTweet}></Route>
            <Route path="/trending" component = {TrendingTweets}></Route>
            <Route path="/user" component = {UserTweets}></Route>
            <Route path='/logout' component = {Logout}></Route>

          </Switch>


        {/* </div> */}
      </Router>

    </div>
  );
}

export default App;
