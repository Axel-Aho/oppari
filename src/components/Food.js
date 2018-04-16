import React from 'react';
import { Media } from 'react-bootstrap';

function Food(props) {
    return (
      <div>
      <Media className="Media-main">
        <Media.Body className="Media-body">
          <Media.Heading className="Media-head">
            { props.food.otsikko.toUpperCase() }
          </Media.Heading>
          <p>
            { props.food.kuvaus }
          </p>
          <p>
            { props.food.hinta }
          </p>
        </Media.Body>
      </Media>
      <br/>
      </div>
    );
}

export default Food;
