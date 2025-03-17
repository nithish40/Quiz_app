import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import Loginform from './components/loginform';
import Signup from './components/signup';
import Userpage from './components/userpage';
import Courses from './components/topics';
import Quiz from './components/quiz';
import Quizz from './components/Quizz';
function App() {  

  return (
    
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Home/>} ></Route> */}
          <Route path="/" element={<Quiz/>}/>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Loginform/>}></Route>
          <Route path='/user/:username' element={<Userpage/>}></Route>
          <Route path='/user/:username/practise' element={<Courses/>}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
