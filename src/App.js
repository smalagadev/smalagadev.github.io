import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" component={About}/>
          <Route path="/Skills" component={Skills}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/Contact" component={Contact}/>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
