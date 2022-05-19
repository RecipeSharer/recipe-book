import { Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import DetailView from './views/DetailView';
import ListView from './views/ListView';
import Header from './components/Header';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { RecipesProvider } from './context/RecipesContext';
import AddRecipeView from './views/AddRecipeView';
import EditRecipeView from './views/EditRecipeView';

export default function App() {
  return (
    <>
      <Toaster />
      <UserProvider>
        <RecipesProvider>
          <Header />
          <Switch>
            {/* Detail Route */}
            <PrivateRoute path="/recipes/detail/:id">
              <DetailView />
            </PrivateRoute>

            <PrivateRoute exact path="/recipes/edit/:id">
              <EditRecipeView />
            </PrivateRoute>

            <PrivateRoute exact path="/recipes/add">
              <AddRecipeView />
            </PrivateRoute>

            {/* List Route */}
            <PrivateRoute path="/recipes">
              <ListView />
            </PrivateRoute>

            {/* Login Route */}
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </RecipesProvider>
      </UserProvider>
    </>
  );
}
