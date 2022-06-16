import React from 'react'

const UsersList = ({users, setUsers}) => {
    const handleDelete = ({id}) =>{
        setUsers(users.fiter((user)=>user.id != id));
    }
    return(
        <div>
            {users.map((user) => {
                <li className='list-item' key={user.id}>
                    <img src={user.image}/>
                    <input
                    type='text'
                    value={user.nom}
                    className='list'
                    onChange={(event)=>event.preventDefault()}/>
                    <button className='button-delete task-button' onClick={()=>handleDelete(user)}>
                        <i className='fa fa-trash'></i>
                    </button>

                </li>
                
            })}
        </div>
    );

};

export default UsersList;