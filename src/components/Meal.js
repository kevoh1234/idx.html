import React,{useState} from 'react'
import { mealData, chapatiRecipe } from '../data/data'
import {} from '@heroicons/react/outline';
import { Link } from "react-router-dom"; 
// import Ingredient from './Ingredients/Ingredient'
// import {Ingredient}
const Meal = () => {

   const [handleViewMoreClick] = useState()  
   const [foods, setFoods] = useState(mealData)
   const fillterCat =(category)=>{
    setFoods(
      mealData.filter((item)=>{
        return item.category === category
      })
    )
   }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2'>
         <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
            Our Meal
            </h1>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='flex justify-center md:justify-center'>
                  <button 
                  onClick={()=>setFoods(mealData)}
                  className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button> 
                 
                </div>
            </div>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
                {
                  mealData.map((item)=>(
                    <div key={item.id}
                    className='border-none hover:scale-105 duration-300'>
                        <img src={`../images/${item.image}`}
                        alt={item.name}
                        className='=w-full h-[200px] object-cover rounded-lg'
                        />
                        <div className='flex justify-between py-2 px-2'>
                            <p className='font-bold'>{item.name}</p>
                            
                        </div>

                        <div className='pl-2 py-4 -mt-4'>
                        <Link style={{textDecoration: "none" }} to={"/exp"}>
                         <button onClick={handleViewMoreClick}
                          className="'m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'"
                           type="submit"
                         >
                          <chapatiRecipe/> 
                          {/* <Ingredient /> */}
                         View More
                         </button>
                        </Link>
                       
                        
                           
                        </div>
                    </div>
                  ))
                }
            </div>
      
    </div>
  )
}

export default Meal
