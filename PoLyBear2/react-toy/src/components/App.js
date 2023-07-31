import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Roomlist from './Roomlist';
import RoomDetails from './RoomDetails';

function App() {
  return (
    <div class='flex justify-center items-center h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route exact path='/rooms' element={<Roomlist></Roomlist>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
