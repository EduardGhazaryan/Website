import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import HomePgae from './Pages/HomePgae/HomePgae';
import Videos from './Pages/Videos/Videos';
import Questions from './Pages/Questions/Questions';
import Haytararutyun from './Pages/Haytararutyun/Haytararutyun';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route path='/' element={<HomePgae/>}/>
         <Route path='/media' element={<Videos/>}/>
         <Route path='/questions' element={<Questions/>}/>
         <Route path='/haytararutyun' element={<Haytararutyun/>} />
      </Routes>
    </div>
  );
}

export default App;
