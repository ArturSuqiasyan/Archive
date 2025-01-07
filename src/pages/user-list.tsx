import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserList = () => {
    const [users, setUsers] = useState([]); // Initialize as an empty array

    useEffect(() => {
        axios
            .get("http://localhost:4000/users")
            .then(response => {
                setUsers(response.data);
            })
          
    }, []); 

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User List</h1>
            <div className="space-y-4">
                {users.map(user => (
                    <div key={user.id} className="border p-4 rounded-lg shadow-sm">
                        <p className="text-lg font-semibold">{user.name} {user.surname}</p>
                        <p>Age: {user.age}</p>
                        <p>Salary: {user.salary}</p>
                        <Link 
                            to={`/users/${user.id}`}
                            className="text-blue-500 hover:underline"
                        >
                            Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}    
