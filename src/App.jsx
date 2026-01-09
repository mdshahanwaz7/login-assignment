
import { Signup } from '../Signup'
import { Login } from '../Login'
import { Home } from '../Home'
import {Routes,Route} from 'react-router-dom'


function App() {
  

  return (
    <>
      
       <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/user/Home" element={<Home />} />
    </Routes>
     
    </>
  )
}

export default App