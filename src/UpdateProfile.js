import React,{useRef,useState} from 'react'
import {useAuth} from '../src/contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom'

export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    const {currentUser} = useAuth()
    console.log(currentUser)
    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== password2Ref.current.value) {
            console.log("passwords don't match");
            return setError("passwords don't match")
        } 
        // try {
        //     setError("")
        //     setLoading(true)
        //     await signup(emailRef.current.value,passwordRef.current.value)
        //     history.push("/login")

        // } catch {
        //     setError("failed to create account")
        // }
        setLoading(false)
    }

    return (
        <div>
            <h2>Update profile</h2>
            {error && <h2>{error}</h2>}
            <p>{currentUser.email}</p>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" defaultValue={currentUser.name} />
                </div>
                <div className="">  
                    <label htmlFor="email">email address</label>
                    <input type="email" name="email" id="email" ref={emailRef} defaultValue={currentUser.email}/>
                </div>
                <div className="">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" ref={passwordRef} placeholder="leave blank to keep the same"/>
                </div>
                <div className="">
                    <label htmlFor="password2">confirm password</label>
                    <input type="password" name="password2" id="password2" ref={password2Ref} placeholder="leave blank to keep the same"/>
                </div>
                <button disabled={loading}type="submit">update</button>
            </form>
            <p>cancel <Link to="/">here</Link></p>

        </div>
    )
}
