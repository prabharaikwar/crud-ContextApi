import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

const AddUser = () => {
    const { allUsers, setAllUsers } = useContext(UserContext)

    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        id: allUsers.length + 1,
        title: '',
        body: ''
    })

    const handleAdd = () => {
        setAllUsers(newUser)
        navigate('/')
    }

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
                        Id
                    </label>
                    <input value={newUser.id} onChange={e => setNewUser({ ...newUser, id: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="number" placeholder="Only digit" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="body">
                        Body
                    </label>
                    <input value={newUser.body} onChange={e => setNewUser({ ...newUser, body: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body" type="text" placeholder="Enter text" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input value={newUser.title} onChange={e => setNewUser({ ...newUser, title: e.target.value })}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Enter text" />
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleAdd}>
                        Add User
                    </button>

                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
    )
}

export default AddUser