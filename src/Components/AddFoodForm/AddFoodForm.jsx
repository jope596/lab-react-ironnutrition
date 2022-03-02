import React, { useState } from 'react';

function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);
  const handleCaloriesInput = (e) => setCalories(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newFood = {name, calories, image, servings };

    props.AddFood(newFood);
    setName('');
    setCalories('');
    setImage(0);
    setServings(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Add Food Entry</h2>
        <label>Name</label>
        <input type="text" name="name" value={name} onChange={handleNameInput} />
        <label>Calories</label>
        <input type="number" name="calories" value={calories} onChange={handleCaloriesInput} />
        <label>Image</label>
        <input type="text" name="image" value={image} onChange={handleImageInput} />
        <label>Servings</label>
        <input type="number" name="servings" value={servings} onChange={handleServingsInput} />

        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}

export default AddFoodForm;