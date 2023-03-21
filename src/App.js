import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from '../src/Page/HomePage/HomePage';
import Projects from './Page/Projects/Projects';
import Contact from './Page/ContactFrom/Contact';
function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomePage />
  },
  
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
