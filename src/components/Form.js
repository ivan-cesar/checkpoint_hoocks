import React from 'react';
import {v4 as uuidv4} from 'uuid';

const Form = ({input,setInput,users,setUsers}) => {
    const onInputChange = (event) =>{
        setInput(event.target.value);

    };
    const onFormSubmit = (event) =>{
        event.preventDefault();
        setUsers([...users,{id: uuidv4(), nom: input, image:"https://www.facebook.com/TechCabal/photos/a.188414161305597/603601679786841"}]);
        setInput('');
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