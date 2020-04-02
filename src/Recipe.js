import React from 'react';

import style from './recipe.module.css'

const Recipe = ({title,calories,img,ingredients})=>{
    return(

        <div className={style.recipe}>
            <h1 >{title}</h1>
            <ol className={style.orderlist}>
                {ingredients.map(ingredient=>(
                    <li key={ingredient.text} className={style.parag}>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={img}/>
            <p className={style.parag}>Calories: {calories}</p>

        </div>


    );
}


export default Recipe;