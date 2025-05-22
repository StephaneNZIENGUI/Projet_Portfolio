import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <div className='p-5 md:px-[15%]'>
        <Navbar />
        <Home />
      </div>
    </div>
  )
}

export default App
