import user from '../../../public/image/user.png'

const Card = (props) => {
    const {time, addBreakToCard, breakTime} = props
    return (
        <div className="bg-white p-7">

            <div className='flex items-center mb-10'>
                <img className=' rounded-2xl w-16 mr-2' src={user} alt="" />
                <div>
                    <h5 className='font-semibold text-2xl'>Zahid Hossain</h5>
                    <p className=' text-slate-400'>Sydney, Australia</p>
                </div>
            </div>

            <div className='flex justify-between bg-slate-100 py-3 px-5 rounded-lg mb-10'>
                <div>
                    <p className='text-3xl font-medium'>75<span className='text-slate-400 text-sm'>kg</span></p>
                    <p className=' text-slate-600'>Weight</p>
                </div>
                <div>
                    <p className='text-3xl font-medium'>6.5</p>
                    <p className=' text-slate-600'>Height</p>
                </div>
                <div>
                    <p className='text-3xl font-medium'>25<span className='text-slate-400 text-sm'>yrs</span></p>
                    <p className=' text-slate-600'>Age</p>
                </div>
            </div>
            <div className='mb-10'>
                <h3 className='text-2xl font-medium mb-6'>Add A Break</h3>
                <div className='flex justify-between bg-slate-100 py-3 px-5 rounded-lg mb-10'>
                    <button onClick={()=> addBreakToCard(10)} className=' w-14 h-14 bg-white rounded-full font-medium text-lg'>10s</button>
                    <button onClick={()=> addBreakToCard(20)} className=' w-14 h-14 bg-white rounded-full font-medium text-lg'>20s</button>
                    <button onClick={()=> addBreakToCard(30)} className=' w-14 h-14 bg-white rounded-full font-medium text-lg'>30s</button>
                    <button onClick={()=> addBreakToCard(40)} className=' w-14 h-14 bg-white rounded-full font-medium text-lg'>40s</button>
                    <button onClick={()=> addBreakToCard(50)} className=' w-14 h-14 bg-white rounded-full font-medium text-lg'>50s</button>
                </div>
            </div>
            <div className=' mb-20'>
                <h3 className='text-2xl font-medium mb-6'>Exercise Details</h3>
                <div className='flex justify-between bg-slate-100 py-5 px-5 mb-5 rounded-lg'>
                    <p className='font-medium text-xl'>Exercise time</p>
                    <p className=' text-slate-400 text-xl'>{time} seconds</p>
                </div>
                <div className='flex justify-between bg-slate-100 py-5 px-5 rounded-lg'>
                    <p className='font-medium text-xl'>Break time</p>
                    <p className=' text-slate-400 text-xl'>{breakTime} seconds</p>
                </div>
            </div>
            <button className='w-full h-16 text-2xl text-white bg-indigo-500 rounded-lg'>Activity Completed</button>
        </div>
    );
};

export default Card;