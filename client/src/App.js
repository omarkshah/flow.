import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/homePage/index';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from './state';

function App() {

  const mode = useSelector((state) => state.mode);
  const isAuth = Boolean(useSelector((state) => state.token));

  // const dispatch = useDispatch();
  // dispatch(setLogin({user: {firstName: "omar", lastName: "shah", _id: "123445"} }))

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
