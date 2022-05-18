import {
  Switch,
  Route
} from 'react-router-dom';
import Login from './views/Login';
import DetailView from './views/DetailView';
import ListView from './views/ListView';
import Header from './components/Header';

export default function App() {



  return (
    <>
      <Header />
      <Switch>
        {/* Detail Route */}
        <Route path='/recipes/:id'>
          <DetailView />
        </Route>

        {/* List Route */}
        <Route path='/recipes'>
          <ListView />
        </Route>

        {/* Home/Login Route */}
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </>
  );
}
