import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Roomlist from './Roomlist';

function App() {
    return (
        <div class='flex justify-center items-center h-screen'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                    <Route path='/list' element={<Roomlist></Roomlist>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;