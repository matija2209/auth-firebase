import React, { useRef, useState } from "react"
import { useAuth } from "./contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { forgotPassword,currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await forgotPassword(emailRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to log in")
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
                <button disabled={loading}type="submit">reset password</button>
                <p>Don't have an account yet? <Link to="/signup">Signup here</Link></p>
                <p>Forgot password? Reset <Link to="/forgotten-password">here</Link></p>
            </form>
        </div>
    )
}
