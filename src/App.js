import './App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import foodsData from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  const [food, setFood] = useState(foodsData);
  const [displayFood, setDisplayFood] = useState(foodsData);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
    setDisplayFood(updatedFood);
  };


  const searchFilter = (searchQuery) => {
    let filteredFoods = food.filter((food) =>
      food.name.toLowerCase().startsWith(searchQuery.toLowerCase())
    );
    console.log(filteredFoods);
    setDisplayFood(filteredFoods);
  };

  const deleteFood = (foodName) => {
    let newFood = [...displayFood];
    const filteredFood = newFood.filter((foodToDelete) => {
      return foodToDelete.name !== foodName;
    });
    console.log(filteredFood);
    setDisplayFood(filteredFood);
  };


  return (
    <div className="App">
    <SearchBar search={searchFilter} />
    <AddFoodForm addFood={addNewFood} />
      

      {displayFood.map((item) => {
        return <FoodBox food={item} clickToDelete={deleteFood} />;
      })}
      
    </div>
  );
}

export default App;
