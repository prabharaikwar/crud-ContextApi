import { useState } from 'react';
import UserContext from './UserContext'
import axios from 'axios';

const UserState =(props)=>{
    // const initialState ={
    //     allUsers:[]
    // }
    const [allUsers, setAllUsers] = useState();
    
      const getUsers =()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
           setAllUsers(res.data)
          console.log(allUsers, 'value')
        })
        .catch((err)=>{console.log(err,'Error while fetching api')})
      }

 
    return(
        <UserContext.Provider value={{allUsers,getUsers}}>
          {props.children}
        </UserContext.Provider>
       
    )
}


export default UserState;