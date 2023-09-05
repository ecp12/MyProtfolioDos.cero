import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from '../src/Page/HomePage/HomePage';
import Projects from './Page/Projects/Projects';
import Contact from './Page/ContactFrom/Contact';
import Blog from './Page/Blog/Blog';
import Pokedex from './Page/Pokedex/Pokedex'
function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  },
  
  {
    path: "/Projects",
    element: <Projects/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  {
    path: "/Blog",
    element: <Blog/>
  },
  {
    path: "/Pokedex",
    element: <Pokedex/>
  },
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
