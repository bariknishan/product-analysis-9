
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import Dashboard from './Component/Dashboard/Dashboard';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Notfound from './Component/NotFound/Notfound';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
    
 <Header></Header>

  <Routes>

<Route path='/' element={<Home></Home>}></Route>
<Route path='/home' element={<Home></Home>}></Route>
<Route path='/reviews' element={<Reviews></Reviews>}></Route>
<Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
<Route path='/blogs' element={<Blogs></Blogs>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='*' element={<Notfound></Notfound>}></Route>

       </Routes>


    </div>
  );
}

export default App;
