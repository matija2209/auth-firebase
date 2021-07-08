import React,{useState} from 'react'
import {useAuth} from '../src/contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom'


export default function Dashboard() {
    const {logout,currentUser} = useAuth()
    const [error,setError] = useState("")
    const history = useHistory()

    async function handleLogout () {
        setError("")
        try {
            await logout()
            history.push("/login")
        } catch {
            setError("failed to logout...")
        }
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <hr />
            {currentUser.email}
            {error && <p>{error}</p>}
            <button onClick={handleLogout}>logout</button>
        </div>
    )
}
