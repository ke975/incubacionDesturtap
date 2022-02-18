

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { AuthContextProvider } from './context/autContext';
import {Login} from './pages/Login'
import {Home} from'./pages/Home'
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Login" component={Login}/>
    </Switch>
    </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;