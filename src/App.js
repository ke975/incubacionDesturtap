import {
  BrowserRouter as Router,
  Routes,Route
}
from 'react-router-dom'
import { AuthContextProvider } from './context/autContext';
import {Login} from './pages/Login'
import {Home} from'./pages/Home'
function App() {
  return (
    <Router>
      <AuthContextProvider>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </AuthContextProvider>
  </Router>
  );
}

export default App;