import React from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Info.css';

var textIndent = {
  textIndent: '15%',
  color: '#57534D',
};

export class Info extends React.Component {
    render() {
        return (
            <div className='Info'>
              <h2>Info</h2>
              <br/>
              <ListGroup>
                <ListGroupItem>Maanantai-Perjantai 09-23</ListGroupItem>
                <ListGroupItem style={textIndent}>Keittiö 09-22</ListGroupItem>
                <ListGroupItem>Lauantai 11-00</ListGroupItem>
                <ListGroupItem style={textIndent}>Keittiö 11-23</ListGroupItem>
                <ListGroupItem>Sunnuntai suljettu</ListGroupItem>
              </ListGroup>
              <br/>
              <hr/>
              <ListGroup>
                <ListGroupItem>puhelin</ListGroupItem>
                <ListGroupItem>0400 143952</ListGroupItem>
                <ListGroupItem>sähköposti</ListGroupItem>
                <ListGroupItem>myynti@ravintola.fi</ListGroupItem>
              </ListGroup>
            </div>
        );
    }
}
