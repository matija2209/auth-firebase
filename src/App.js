import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>

          
        </Switch>
      </AuthProvider>

    </Router>
  );
}

export default App;
