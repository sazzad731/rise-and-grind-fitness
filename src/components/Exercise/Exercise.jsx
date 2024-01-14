import { useState } from 'react';
import ExerciseHeader from '../ExerciseHeader/ExerciseHeader';
import { useEffect } from 'react';
import CategoryExercise from './CategoryExercise/CategoryExercise';

const Exercise = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
    return (
        <div className='col-span-3 w-5/6 mx-auto py-14'>
            <ExerciseHeader/>
            <h1 className='text-3xl font-semibold mb-8'>Select today's exercise</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    category.map(item=> <CategoryExercise items={item} key={item.id}/>)
                }
            </div>
        </div>
    );
};

export default Exercise;