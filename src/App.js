import React from 'react';

import './App.css';
import Nav from './Comp/Nav';
import About from './Comp/About'
import Shop from './Comp/Shop'
import Intro from './Comp/Intro'
// import Map from './Comp/Map'
import Map2 from './Comp/Map2'
import 北达科他州 from './Comp/States/北达科他州'
import 蒙大纳州 from './Comp/States/蒙大纳州'

import { BrowserRouter as Router, Switch, Route} 
    from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/' exact component={Map2}/>
          <Route path='/shop' component={Shop}/> 
          <Route path='/北达科他州' component={北达科他州}/> 
          <Route path='/蒙大纳州' component={蒙大纳州}/> 
          <Route path='/intro' component={Intro}/>
          <Route path='/home' exact component={Map2}/>
        
        </Switch>
        
      </div>
    </Router>
    
  );
}
const Home = () =>(
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
