import React, { Component } from 'react';
import { PageHeader} from 'react-bootstrap';
import Menutable from './Menutable';
import './Menu.css';

class SeasonalMenu extends Component {
  render() {
    return (
      <div className="Menu-body">

        <PageHeader className="Menu-header">
          Kausimenu <small></small>
        </PageHeader>
        <div><Menutable /></div>
      </div>
    );
  }
}

export default SeasonalMenu;
