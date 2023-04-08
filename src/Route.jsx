import React from 'react'; import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Deposit from './components/deposit';
import CreateAccount from './components/createaccount';
import Withdraw from './components/withdraw';
import Balance from './components/balance';
import AllData from './components/alldata';
import NavBar from './components/navbar';
import { UserContext } from './components/context';


function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'Jeremy',email:'jeremydvl@yahoo.com',password:'secret',balance:100}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/CreateAccount/" element={<CreateAccount />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/deposit/" element={<Deposit />} />
          <Route path="/withdraw/" element={<Withdraw />} />
          <Route path="/balance/" element={<Balance />} />
          <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>  
        </UserContext.Provider>
    </HashRouter>
  );
}


export default Spa;
