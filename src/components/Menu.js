import React, { Component } from 'react';
import { PageHeader} from 'react-bootstrap';
import Menutable from './Menutable';
import './Menu.css';

var textStyle = {
  color: '#dfce50',
   fontFamily: 'Shadows Into Light',
    fontSize: 42,
};

class Menu extends Component {
  render() {
    return (
      <div className="Menu-body">
        <PageHeader className="Menu-header">
          Menu <small>makuja kaikille</small>
        </PageHeader>
        <p className="textArea">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
        </p>
        <br/>
        <h2 style={textStyle}>Alkuruuat</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Pääruuat</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Jälkiruuat</h2>
        <br/>
        <div><Menutable /></div>
      </div>
    );
  }
}

export default Menu;
