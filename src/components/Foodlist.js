import React from 'react';
import Food from './Food';

function Foodlist (props) {
    let foods = props.foods.map(function(food, index) {
        return (<Food food={food} key={index} />)
    });
    return (<div>{foods}</div>);
}

export default Foodlist;
