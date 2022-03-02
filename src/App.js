
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { AuthProvider } from './context/autContext';
import {Login} from './pages/Login'
import {Home} from'./pages/Home'
import {Places} from './pages/places'
import'./styles/global.scss'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" component={Login}/>
      <Route path="/places" component={Places}/>
    </Switch>
    </AuthProvider>
  </BrowserRouter>
  );
}

export default App;