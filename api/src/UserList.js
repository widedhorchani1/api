import React from 'react'
import UserItem from './component/UserItem'
import axios from 'axios'
import { useEffect,useState } from 'react';

function UserList() {
    const [users,setUsers]=useState()
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data))
        .catch((error) => console.dir(error));
    }, []);
  return (
    <div className='userContainer'>
        {users && users.map((user)=>{
          return <UserItem 
                   name={user.name} 
                   email={user.email}  
                   phone={user.phone}
                 />; })}
        
    </div>
  )
}

export default UserList
