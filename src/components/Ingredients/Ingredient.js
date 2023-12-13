import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import chapati from "../../images/chapati.png"



 
const Ingredient = () => {
  const [recipe, setRecipe] = useState({ ingredients: [], instructions: [] });
  
  useEffect(() => {
    // Fetch chapati recipe from the server
    fetch('/api/chapati-recipe')
      .then(response => response.json())
      .then(data => setRecipe(data))
      .catch(error => console.error('Error fetching chapati recipe:', error));
  }, []);

 
  return (

    <div className="ingredient">
      <div className='flex items-center justify-center  bg-white p-4 rounded-full w-62 h-62 object-cover mx-auto'>
        <img src={chapati}/>
     </div> 

    <h1 className= " bg-blue-700 py-4 " >Chapati Recipe</h1>
    <div>
      <h2 className='bg-white-700 py-4 '>Ingredients:  ['Whole Wheat Flour', 'Water', 'Salt', 'Oil or Ghee'],</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
    <div>
      <h2 className='bg-white-700 py-4 flex items-center justify-between'>Instructions:  [
    'In a large mixing bowl, combine whole wheat flour, 
    salt, and oil/ghee.',
    'Gradually add water and knead the mixture to form a smooth, 
    elastic dough.',
    'Cover the dough and let it rest for 15-20 minutes.',
    
  ],
   </h2>
   
         <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <div className="flex items-center justify-between">
     
      </div>
    </div>
    
  </div>
      
   )
}

export default Ingredient

