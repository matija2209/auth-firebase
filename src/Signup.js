import React,{useRef,useState} from 'react'
import {useAuth} from '../src/contexts/AuthContext'
import { Link,useHistory } from 'react-router-dom'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    const {signup,currentUser} = useAuth()

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
    async function handleSubmit(e) {
        e.preventDefault()
        
        if (passwordRef.current.value !== password2Ref.current.value) {
            console.log("passwords don't match");
            return setError("passwords don't match")
        } 
        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push("/login")

        } catch {
            setError("failed to create account")
        }
        setLoading(false)
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="name">name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="">  
                    <label htmlFor="email">email address</label>
                    <input type="email" name="email" id="email" ref={emailRef}/>
                </div>
                <div className="">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" ref={passwordRef}/>
                </div>
                <div className="">
                    <label htmlFor="password2">confirm password</label>
                    <input type="password" name="password2" id="password2" ref={password2Ref}/>
                </div>
                <button disabled={loading}type="submit">register</button>
            </form>
            <p>Already have an account? Login <Link to="/login">here</Link></p>

        </div>
    )
}
