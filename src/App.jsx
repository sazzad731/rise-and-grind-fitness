import './App.css'
import Card from './components/Card/Card'
import Exercise from './components/Exercise/Exercise'

function App() {

  return (
    <div className='grid grid-cols-4 bg-slate-100'>
      <Exercise/>
      <Card/>
    </div>
  )
}

export default App
