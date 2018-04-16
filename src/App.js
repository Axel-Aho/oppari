import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home.js";
import Menu from "./components/Menu.js";
import Drinks from './components/Drinks';
import SeasonalMenu from './components/SeasonalMenu';
import Contact from "./components/Contact.js";
import { Info } from "./components/Info.js";
import Example from './components/Collapse.js';
import { Nav, NavItem} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Solna</h1>
        </header>

        <Container fluid >
            <Row className="show-grid">
                  <div>
                  <Example className="Navigation"/>
                    <Col xs={12} md={3} className="Leftside">
                      <div className="Sidebar">
                        <div className="Links">
                          <Nav stacked>
                            <NavItem><Link to="/">Koti</Link></NavItem>
                            <NavItem><Link to="menu">Menu</Link></NavItem>
                            <NavItem><Link to='seasonalMenu'>Kausimenu</Link></NavItem>
                            <NavItem><Link to='drinks'>Juomat</Link></NavItem>
                            <NavItem><Link to="contact">Yhteystiedot</Link></NavItem>
                          </Nav>
                        </div>
                        <hr/>
                        <Info />
                      </div>
                    </Col>
                    <Col xs="auto">
                      <Route exact path="/" component={Home} />
                      <Route path="/menu" component={Menu} />
                      <Route path="/contact" component={Contact} />
                      <Route path='/drinks' component={Drinks} />
                      <Route path='/seasonalMenu' component={SeasonalMenu} />
                    </Col>
                  </div>
            </Row>
          </Container>

          <div className='Footer'>hei</div>

      </div>
</Router>
    );
  }
}


export default App;
