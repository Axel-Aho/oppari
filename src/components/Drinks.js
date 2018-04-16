import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Menutable from './Menutable';
import './Menu.css';

var textStyle = {
  color: '#dfce50',
   fontFamily: 'Shadows Into Light',
    fontSize: 42,
};

class Drinks extends Component {
  render() {
    return (
      <div className="Menu-body">
        <PageHeader className="Menu-header">
          Juomat <small>tyylistä tyyliin</small>
        </PageHeader>
        <br/>
        <h2 style={textStyle}>Kuohuviinit</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Valkoviinit</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Punaviinit</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Jälkiruokaviinit</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Oluet ja siiderit</h2>
        <br/>
        <div><Menutable /></div>
        <h2 style={textStyle}>Virvoikkeet</h2>
        <br/>
        <div><Menutable /></div>
      </div>
    );
  }
}

export default Drinks;
