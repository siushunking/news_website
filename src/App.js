import Entertainment from "./components/Entertainment";
import Nav from "./components/Nav";
import {Routes, Route} from 'react-router-dom'
import Finance from './components/Finance'
import Home from "./components/Home";
import Sport from'./components/Sport';
import Search from "./components/Search";
import Query from "./components/Query";

function App() {
  return (
 <div>
   <Nav></Nav>
   <Search></Search>
   <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/Finance" element={ <Finance />} />
      <Route path="/Entertainment" element={ <Entertainment />} />
      <Route path="/Sport" element={ <Sport />} />
      <Route path="/api/query" element={ <Query />} />
    </Routes>

 </div>
  );
}

export default App;
