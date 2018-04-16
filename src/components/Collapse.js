import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { Nav, NavItem} from 'react-bootstrap';
import { Link } from "react-router-dom";

import './Collapse.css';

class Example extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div className='Example'>
        <Button className='Button' size="lg" block onClick={this.toggle} >Toggle</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            <Nav stacked>
              <NavItem><Link to="/">Home</Link></NavItem>
              <NavItem><Link to="Menu">Menu</Link></NavItem>
              <NavItem><Link to='seasonalMenu'>Kausimenu</Link></NavItem>
              <NavItem><Link to='Drinks'>Juomat</Link></NavItem>
              <NavItem><Link to="Contact">Contact</Link></NavItem>
            </Nav>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
