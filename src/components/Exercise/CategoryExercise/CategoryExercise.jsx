

const CategoryExercise = (props) => {
    const {name, id, picture, about, age, time} = props.items
    const addToList = props.addToList;
    const slicedAbout = about.slice(0, 100)
    return (
        <div>
            <div className="flex flex-col justify-between bg-white rounded-2xl p-5">
                <img className="w-full h-3/4 rounded-2xl mb-3" src={picture} alt="Image" />
                <p className="text-xl font-bold mb-3">{name}</p>
                <p className=" text-gray-400 mb-3">{slicedAbout}</p>
                <p className=" text-lg font-medium mb-3">For Age : {age}</p>
                <p className=" text-lg font-medium mb-3">Time required : {time}s</p>
                <button onClick={()=>addToList(id)} className="w-full h-12 font-medium text-white bg-indigo-500 rounded-lg">Add to list</button>
            </div>
        </div>
    );
};

export default CategoryExercise;