import logo from './logo.svg';
import './App.css';
import FirstComp from './component/firstcomp';
import SecondComp from './component/secondcomp';
import ThirdComp from './component/thirdcomp';
import FourthComp from './component/fourthcomp';
import NavBar from './component/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<FirstComp/>}></Route>
        <Route path='SecondComp' element={<SecondComp/>}></Route>
        <Route path='ThirdComp' element={<ThirdComp/>}></Route>
        <Route path='FourthComp' element={<FourthComp/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
