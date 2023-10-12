import React, { useState, useEffect, useContext  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


const EditUser = () => {
    const {allUsers,setAllUsers} = useContext (UserContext)

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedUser, setSelectedUser] = useState({
        id: null,
        title: '',
        body: ''
    })

       useEffect(() => {
        const editUser  = allUsers.find((currentUser) => currentUser.id === parseInt(id,0));
        setSelectedUser(editUser )
    }, [id,allUsers])

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedUsers = allUsers.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    );
        setAllUsers(updatedUsers)
        navigate('/');
    }

    return (
        <div className='w-full max-w-xs'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        id
                    </label>
                    <input value={selectedUser.id} onChange={e => setSelectedUser({ ...selectedUser, id: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="number" placeholder="id" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        body
                    </label>
                    <input value={selectedUser.body} onChange={e => setSelectedUser({ ...selectedUser, body: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" type="text" placeholder="body" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        title
                    </label>
                    <input value={selectedUser.title} onChange={e => setSelectedUser({ ...selectedUser, title: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="title" />
                </div>
            </form>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleUpdate}>
                Update
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => { navigate('/') }}>
                Back
            </button>
        </div>
    )
}

export default EditUser