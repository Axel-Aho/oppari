import React, { Component } from 'react';
import Foodlist from './Foodlist';
import { searchAllFood } from '../api/MenuAPI';

/*
const mat = [
  {
    otsikko: "Lomalla",
    paiva: "6.1.2018",
    paikka: "Lohja",
    saa: "Aurinkoinen, +1",
    kuvaus: "Lomalla Lohjalla"
  },
  {
    otsikko: "Töissä",
    paiva: "8.1.2018",
    paikka: "Helsinki",
    saa: "Pieni lumisade, -1",
    kuvaus: "Töissä Helsingissä"
  },
  {
    otsikko: "Lounaalla",
    paiva: "20.1.2018",
    paikka: "Lohja",
    saa: "Pilvinen, -7",
    kuvaus: "Sukuloimassa"
  }
];
*/

class Menutable extends Component {
  constructor (props) {
    super(props);
    //this.state = {matkat: mat};
	  this.state = {foods: []};
  }

  componentDidMount = () => {
	  searchAllFood(this.kasitteleVastaus);
  }

  kasitteleVastaus = (data, status) => {
	  if (status !== 503) {
		 this.setState({foods: data});
   } else {
     alert("Listaus ei onnistu");
     // Anna käyttäjälle virheilmoitus laittamalla tilaan sitä varten muuttuja
   }
  }

  render() {
    return (
      <div>
        <Foodlist foods={this.state.foods} />
      </div>
    );
  }
}

export default Menutable;
