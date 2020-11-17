import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.module.css';

const burger = (props) => {
    //convert props.ingredient obj to array
    //.keys() returns arrays 
    const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => { //console.log('hey ' + igKey);
        //console.log(props.ingredients[igKey]);
        //console.log(Array(props.ingredients[igKey]));
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key ={igKey + i} type={igKey}/>
        }) // [ whatever , 1]
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;