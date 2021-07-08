import Dashboard from './Dashboard'
import Signup from './Signup'
import Login from './Login'
import FogotPassword from './FogotPassword'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import UpdateProfile from './UpdateProfile'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
          <PrivateRoute exact path="/update-profile" component={UpdateProfile}></PrivateRoute>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/forgotten-password" component={FogotPassword}></Route>

          
        </Switch>
      </AuthProvider>

    </Router>
  );
}

export default App;
