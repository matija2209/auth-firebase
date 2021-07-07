import React,{useRef,useState} from 'react'
import {useAuth} from '../src/contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'


export default function Login() {
    
    const history = useHistory()
    
    const emailRef = useRef()
    const passwordRef = useRef()
    const password2Ref = useRef()
    const {login,currentUser} = useAuth()

    const [error,setError] = useState("")
    const [loading,setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            console.log("PUSING TO ")
            history.push("/")
        } catch (err) {
            console.log(err)
            setError("failed to login")
        }
        setLoading(false)
    }

    return (
        <div>
            {error && <h2>{error}</h2>}
            {currentUser?.email}
            <form onSubmit={handleSubmit}>
                <div className="">  
                    <label htmlFor="email">email address</label>
                    <input type="email" name="email" id="email" ref={emailRef}/>
                </div>
                <div className="">
                    <label htmlFor="password">password</label>
                    <input type="password" name="password" id="password" ref={passwordRef}/>
                </div>
               
                <button disabled={loading}type="submit">login</button>
                <p>Don't have an account yet? <Link to="/signup">Signup here</Link></p>
            </form>
        </div>
    )
}
