import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import UsersList from './components/UsersList';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);


  


  useEffect(() =>{

    //console.log('tableau user modifié' + users);
  }, [users])
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
           input={input}
           setInput={setInput}
           users={users}
           setUsers={setUsers}
           editUser={editUser}
           setEditUser={setEditUser}/>
        </div>
        <hr className='hr'/>
        <div>
          <UsersList users={users} setUsers={setUsers} setEditUser={setEditUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
