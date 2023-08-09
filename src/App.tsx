import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import Event from "./pages/event"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>} />
        <Route path='/event' element={<Event/>} />
      </Routes>
    </div>
  );
};

export default App;

