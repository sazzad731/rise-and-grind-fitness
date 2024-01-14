import logo from '../../../public/logo.png'

const ExerciseHeader = () => {
    return (
        <div className="flex items-center mb-8">
            <img className='w-16 mr-2' src={logo} alt="" />
            <p className='font-bold text-indigo-600 text-2xl'>RISE-AND-GRIND-FITNESS</p>
        </div>
    );
};

export default ExerciseHeader;