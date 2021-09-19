import NavBar from './components/NavBar';
import Home from './components/Home';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Error from './components/Error';
import EditUser from './components/EditUser';
import Prs from './components/Prs'
function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/all" component={Alluser} />
          <Route exact path="/add" component={Prs} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={Error} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
