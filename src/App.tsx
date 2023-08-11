import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import Event from "./pages/event"
import Header from "./components/common/navbar"
import Footer from './components/common/footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<Event/>} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
