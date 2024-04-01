import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import StudentNavBar from './components/StudentNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Students from './components/Students';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Students/>}/>
        <Route path='/add' element={<AddStudent/>}/>
        <Route path='/search' element={<SearchStudent/>}/>
        <Route path='/login' element={<Login/>}/>



      </Routes>
    </BrowserRouter>
  );
}

export default App;
