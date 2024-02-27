import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Grocery = lazy(()=>import ("./components/Grocery"))

function App() {

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restaurants />
      }, {
        path: "/grocery",
        element: (<Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>)
      }, {
        path: "/about",
        element: <About />
      }, {
        path: "/contact",
        element: <Contact />
      }, {
        path: "/restaurantMenu/:resid",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])


export default App;
