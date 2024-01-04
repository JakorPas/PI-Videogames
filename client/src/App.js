import  {Landing, Home, Detail} from "./Views/";
import {Route, Routes} from "react-router-dom";
import './App.css';



function App() {
  return (
    <div className="App">
        <Routes>
           <Route exact path="/" element={<Landing/>} />
           <Route exact path="/home" element={<Home/>} />
           <Route exact path="/detail/:name" element={<Detail/>} />
        </Routes>
    </div>
  );
}

export default App;
