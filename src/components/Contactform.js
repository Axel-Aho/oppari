import React, { Component } from 'react';
import { addFoodDatabase } from '../api/MenuAPI';
import './Contactform.css';

class Contactform extends Component {
 constructor(props) {
     super(props);
     this.muuta = this.muuta.bind(this);
     this.lisaa = this.lisaa.bind(this);
     this.muutaOtsikko = this.muutaOtsikko.bind(this);
     this.state = {otsikko: "", paiva: "", paikka: "", saa: "", kuvaus: ""};
 }

 muuta (e) {
     this.setState({[e.target.name]: e.target.value});
 }

 muutaOtsikko(e) {
    this.setState ({ otsikko: e.target.value.toUpperCase() })
 }

 lisaa (e) {
    e.preventDefault();
    addFoodDatabase({otsikko: this.state.otsikko, paiva: this.state.paiva, paikka: this.state.paikka, saa: this.state.saa, kuvaus: this.state.kuvaus}, this.kasitteleLisays);
 }

 kasitteleLisays = (status) => {
   if (status === 200) {
     document.location='listaa';
   }
   else {
     alert(status);
     // Ilmoita käyttäjälle virheestä lisäämällä  tilaan muuttujan virheilmoitusta varten
  }
 }

  render() {
    return (
        <form>
            <h2>Ota yhteyttä</h2>
            <hr/>
            <label  htmlFor="nimi">Nimi</label>
            <input  type="text" value={this.state.nimi} name="nimi" onChange={ this.muuta } /><br />

            <label  htmlFor="sposti">sähköposti</label>
            <input  type="text" value={this.state.sposti} name="sposti" onChange={ this.muuta } /><br />

            <label  htmlFor="puhelin">puhelin</label>
            <input  type="text" value={this.state.puhelin} name="puhelin" onChange={ this.muuta } /><br />

            <label  htmlFor="paiva">Päivä</label>
            <input  type="text" value={this.state.paiva} name="paiva" onChange={ this.muuta } /><br />

            <label   htmlFor="aika">Aika</label>
            <input  type="text"  value={this.state.aika} name="aika" onChange={ this.muuta } /><br />

            <label  htmlFor="ryhma">Ryhmän koko</label>
            <input  type="text" value={this.state.ryhma} name="ryhma" onChange={ this.muuta } /><br />

            <label    htmlFor="kuvaus">Kuvaus</label>
            <textarea  rows="4" cols="40" value={this.state.kuvaus} name="kuvaus" onChange={ this.muuta }></textarea><br />

            <input type="submit" value="Lisää" onClick={ this.lisaa } />
        </form>
    );
  }
}



export default Contactform;
