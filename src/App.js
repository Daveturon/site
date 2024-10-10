import About from "./Components/About.js";
import Research from "./Components/Research.js";
import Teaching from "./Components/Teaching.js";
import Root from "./Components/Root.js";
import './App.css';
import { 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route,
} from "react-router-dom";

const router = createBrowserRouter( createRoutesFromElements (
  <Route path="/" element={ <Root/> }>
    <Route index element={ <About/> }/>
    <Route path="Research" element={ <Research/> }/>
    <Route path="Teaching" element={ <Teaching/> }/>
  </Route>
));


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
