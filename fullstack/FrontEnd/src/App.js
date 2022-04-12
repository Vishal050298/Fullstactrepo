import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Component/AddUser';
import Default from './Component/default';
import AllUsers from './Component/AllUser';
import EditUser from './Component/EditUser';
import NotFound from './Component/NotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path = "/" component={<Default/>}/>
          <Route exact path = "/all" component={<AllUsers/>}/>
          <Route exact path = "/add" component={<AddUser/>}/>
          <Route exact path = "/edit/:id" component={<EditUser/>}/>
          <Route path="*" component={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
