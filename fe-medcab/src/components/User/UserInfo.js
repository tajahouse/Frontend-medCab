import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import Axios from 'axios';


const initialCredentials ={
    username: "",
};

const UserInfo = () =>{
    const [editing, setEditing] = useState(false);
    const [adding, setAdding] = useState(false);

    const editUser = userCredentials => {
        setEditing(true);
    }

    const saveEdit = e =>{
        e.preventDefault();
        
    }

    return(
        <>
        </>
    )
}

export default UserInfo;