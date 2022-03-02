import React from 'react'



function FoodBox(props) {
    const {food, clickToDelete } = props;
    return (
        <div>
        <p>{food.name}</p>
        <img src={food.image} width={200} />
        <p>Calories:{food.calories}</p>
        <p>Servings:{food.servings}</p>
        <p>Total Calories:{food.calories * food.servings}</p>
        <button type="primary" onClick={() => clickToDelete(food.name)} > Delete </button>
        </div>
      
    );
  }

export default FoodBox