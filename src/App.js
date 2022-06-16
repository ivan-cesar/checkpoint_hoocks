import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import UsersList from './components/UsersList';
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
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
           setUsers={setUsers}/>
        </div>
        <hr className='hr'/>
        <div>
          <UsersList users={users} setUsers={setUsers}/>
        </div>
      </div>
    </div>
  );
}

export default App;
