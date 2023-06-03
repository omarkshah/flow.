import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/homePage/index';

function App() {
  return (
    <div className="app" style={{paddingBottom: "47rem", backgroundColor: "black"}}>
      
      <BrowserRouter>
        <Routes>
          <Route path = "/joe" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
