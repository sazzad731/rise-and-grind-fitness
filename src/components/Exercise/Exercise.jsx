import { useState } from 'react';
import ExerciseHeader from '../ExerciseHeader/ExerciseHeader';
import { useEffect } from 'react';
import CategoryExercise from './CategoryExercise/CategoryExercise';
import Card from '../Card/Card';
import { addBreakToLocal } from '../../utilities/localStoreg';

const Exercise = () => {
    const [category, setCategory] = useState([]);
    const [times, setTimes] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    useEffect(()=>{
        fetch("data.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])

    useEffect(()=>{
        const getBreakFromLocal = localStorage.getItem("Break-time")
        if(getBreakFromLocal === null){
            addBreakToLocal(0);
        }else{
            addBreakToCard(getBreakFromLocal)
        }
        console.log(getBreakFromLocal)
    },[breakTime])

    let time = times;
    const addToList = (id)=>{
        const selectedItem = category.find(item=>item.id === id);
        time = time + selectedItem.time
        setTimes(time)
    }

    const addBreakToCard = (value=0)=>{
        addBreakToLocal(value)
        setBreakTime(value)
    }

    return (
        <div className='grid grid-cols-4 bg-slate-100'>
            <div className='col-span-3 w-5/6 mx-auto py-14'>
                <ExerciseHeader/>
                <h1 className='text-3xl font-semibold mb-8'>Select today's exercise</h1>
                <div className='grid grid-cols-3 gap-6'>
                    {
                        category.map(item=> <CategoryExercise addToList={addToList} items={item} key={item.id}/>)
                    }
                </div>
            </div>
            <Card time={times} breakTime={breakTime} addBreakToCard={addBreakToCard}/>
        </div>
    );
};

export default Exercise;