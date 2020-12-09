import React from 'react'; 
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layouts/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Notfound from './components/pages/Notfound';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />  
         <Route exact path="/about" component={About} />  
         <Route exact path="/contact" component={Contact} />  
         <Route component={Notfound} />
       </Switch>
    </div>
    </Router>
  );
}

export default App;