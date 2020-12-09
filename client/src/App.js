import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={About}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="Contact" component={Contact}/>
        </Switch>
      </Router>
  );
}

export default App;
