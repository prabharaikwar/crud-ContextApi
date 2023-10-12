/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
// import React  ,{createContext} from 'react';
import React  ,{useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import GetUser from './components/GetUser';
import './components/Style.css'
import axios from 'axios';
import UserContext from './context/UserContext'


function App() {   
  const [allUsers, setAllUsers] = useState([])
 
  const getUsers=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>{
      setAllUsers(res.data)
      console.log(allUsers, 'value')
    })
    .catch((err)=>{console.log(err,'Error while fetching api')})
  }

  useEffect(()=>{
    getUsers()   
  },[])  

   
  // why this empty array showing warning after passing empty array

  return (
    <UserContext.Provider value={{allUsers,setAllUsers}}>
    <BrowserRouter>
     <Header/>

        <Routes>
          <Route path='/' element={<GetUser/>}/>
          <Route path='/edit/:id' element={<EditUser/>}/>
          <Route path='/addUser' element={<AddUser/>}/>         
        </Routes>   
    
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
