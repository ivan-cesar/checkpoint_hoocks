import React from 'react'

const UsersList = ({users, setUsers, setEditUser}) => {
    const handleDelete = (id) =>{
        let index;
        let newstate = [...users]
        index = newstate.findIndex((user)=>user.id === id);
        newstate.splice(index,1);
        setUsers(newstate);
    };
    const handleEdit = (id) =>{
        const findUser = users.find((user) => user.id === id);
        setEditUser(findUser);
    };
    return(
        <div>
            {users && users.map((user) => {
             return (
                <li className='list-item' key={user.id}>
                    <img src={user.image} alt="" className='prof'/>
                       <input 
                       type="text"
                       value={user.nom}
                       className="list"
                       onChange={(event)=> event.preventDefault()}
                        />
                        <div>
                    <button className='button-delete task-button name' onClick={()=>handleDelete(user.id)}>
                        <i className='fa fa-trash'></i>
                    </button>
                    <button className='button-edit task-button' onClick={()=>handleEdit(user.id)}>
                        <i className='fa fa-edit'></i>
                    </button>
                    </div>
                </li>
             )
                
                
            })}
        </div>
    );

};

export default UsersList;