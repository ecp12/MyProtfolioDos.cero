// import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import HomePage from '../src/Page/HomePage/HomePage';
// import Projects from './Page/Projects/Projects';
// import Contact from './Page/ContactFrom/Contact';
// import Blog from './Page/Blog/Blog';
// import Pokedex from './Page/Pokedex/Pokedex'
// function App() {
//   const router = createBrowserRouter([{
//     path: "/",
//     element: <HomePage />
//   },
  
//   {
//     path: "/Projects",
//     element: <Projects/>
//   },
//   {
//     path: "/Contact",
//     element: <Contact/>
//   },
//   {
//     path: "/Blog",
//     element: <Blog/>
//   },
//   {
//     path: "/Pokedex",
//     element: <Pokedex/>
//   },
//   ])
//   return (
//     <div className="App">
//       <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from '../src/Page/HomePage/HomePage';
import Projects from './Page/Projects/Projects';
import Contact from './Page/ContactFrom/Contact';
import Blog from './Page/Blog/Blog';
import Pokedex from './Page/Pokedex/Pokedex';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Pokedex" element={<Pokedex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

