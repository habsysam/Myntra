import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Home from './components/Home';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginHover from './components/LoginHover';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Men from './components/Men';
import Women from './components/Women';
import HomeLiving from './components/HomeLiving';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/men' component={Men} />
        <Route exact path='/women' component={Women} />
        <Route exact path='/homeliving' component={HomeLiving} />
        {/* <Login/> */}
        {/* <Home /> */}
        {/* <LoginHover/> */}
      </div>
    </Router>
  );
}

export default  App;
