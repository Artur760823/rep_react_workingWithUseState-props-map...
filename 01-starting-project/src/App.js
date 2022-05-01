import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


const App = () => {

  const [userList, setUserList]= useState([]);

  const addUserHandler = (username, userAge)=>{
    setUserList(prevuserList =>{
      return [...prevuserList, {name: username, age: userAge, id: Math.random().toString()}]
    })
  }


  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
