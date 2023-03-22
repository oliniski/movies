import './styles/global.css'

import { Header } from './components/Header'
import { Movies } from './components/Movies'

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="w-full max-w-7xl px-6 flex flex-col gap-16">
        <Header />
        
        <Movies />
      </div>
    </div>
  )
}

export default App
