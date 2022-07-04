import React,{useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input,setInput,users,setUsers,editUser,setEditUser}) => {
    const updateUser = (nom, id) =>{
        const newUser = users.map((user)=>
            user.id === id ? { nom, id } : user
        );
        setUsers(newUser);
        setEditUser('');
    }
    const onInputChange = (event) =>{
        setInput(event.target.value);
    };
    useEffect(()=>{
        if (editUser) {
            setInput(editUser.nom)
        } else {
            setInput("")
        }
    },[setInput,editUser]);
    const onFormSubmit = (event) =>{
        event.preventDefault();
        if (!editUser) {
            setUsers([...users,{id: new Date(), nom: input, image:"https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"}]);
            setInput('');
        } else {
            updateUser(input,editUser.id)
            
        }
    };
    return(
        <form onSubmit={onFormSubmit}>
           <input type="text" 
           placeholder='Entrez votre nom...' 
           className='task-input'
           value={input}
           required
           onChange={onInputChange}/>
           <button className='button-add' type='submit'>
           <i className="fa-solid fa fa-plus"></i>
           </button>
        </form>
    )
}

export default Form;