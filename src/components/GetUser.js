import React, { useContext } from 'react';
import {Link } from 'react-router-dom'
import UserContext from '../context/UserContext';

const GetUser = () => {
    const {allUsers, setAllUsers} = useContext(UserContext)

    const handleDelete = (uId) =>{
        const confirm= window.confirm('Would you like to delete?');
        if(confirm){
            const removeUser = allUsers.filter((item)=> item.id !== uId)
            setAllUsers(removeUser)
        }
    }

    return (
        <div className='container mx-auto md:container md:mx-auto'>

            <table className='table-auto md:table-fixed'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                        <th>title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        // eslint-disable-next-line array-callback-return
                        allUsers.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.body}</td>
                                    <td>{item.title}</td>
                                    <td><Link to={`/edit/${item.id}`}><button className="rounded-full py-2 px-4 bg-[#2a2438] text-white">Edit</button></Link></td>
                                    <td><button className="rounded-full py-2 px-4 bg-white text-[#2a2438]" onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
                                </tr>
                            )

                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default GetUser