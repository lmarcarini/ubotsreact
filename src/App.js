import 'bootstrap/dist/css/bootstrap.min.css';
import InsereModal from './InsereModal';
import MovieList from './MovieList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import SugereLista from './SugereLista';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Navbar bg="light">
          <Navbar.Brand  style={{paddingRight:"100px"}}>UBots-Filmes</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="justify-content-center">
            <Nav.Item  style={{paddingRight:"100px"}}><Link to="/">Listar Filmes</Link></Nav.Item>
            <Nav.Item  style={{paddingRight:"100px"}}><Link to="/sugerido">Sugerir Filme</Link></Nav.Item>
            <Nav.Item  style={{paddingRight:"100px"}}><InsereModal/></Nav.Item>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/sugerido">
            <SugereLista/>
          </Route>
          <Route path="/">
            <MovieList/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

//YtM%mxh*7L@I*nEzovFn
export default App;
