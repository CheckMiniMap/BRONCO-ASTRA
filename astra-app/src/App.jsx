import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components';
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white text-black">
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App
