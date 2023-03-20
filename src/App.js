import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from '../src/Page/HomePage/HomePage';

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
