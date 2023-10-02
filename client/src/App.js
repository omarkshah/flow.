import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/homePage/index';
import LoginPage from './scenes/loginPage/index'
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from './state';

function App() {

  const mode = useSelector((state) => state.mode);
  var  isAuth = (useSelector((state) => state.auth));

  // console.log("the thing is " + isAuth);

  // isAuth = true;

  // const dispatch = useDispatch();
  // dispatch(setLogin({user: {firstName: "omar", lastName: "shah", _id: "123445"} }))
  
  return (



    <div className="app" style={{paddingBottom: "47rem", backgroundColor: "white"}}>
      
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage/>}/>
          <Route path = "/home" element={(isAuth == true) ? <HomePage /> : <Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
