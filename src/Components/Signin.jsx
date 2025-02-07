import { useState } from "react";

function Signin(){
    const[isSignup, setIsSignup] = useState(false);
    const[name,setName] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail] = useState('');
    const[error,setError] = useState('')

    const handleToggle = () => {
        setIsSignup(!isSignup)
        setError('');
    }

    return(
        <div className="app-container">
            <form className="form">
                <h1>{isSignup ? 'SignUp' : 'SignIn'}</h1>
                <input type="text"  placeholder="Username"/>
                <input type="password" value={password} placeholder="Password"/>
                {isSignup && (
                    <input type="email" placeholder="Email" />
                )}
                <button type="submit">Submit</button>
            </form>
            <p>
                {isSignup ? "Already have an account?" : "Dont't have an account?"}
                <span className="toggle" onClick={handleToggle}>
                    {isSignup ? 'SignIn' : 'SignUp'}
                </span>
            </p>
        </div>
    )
}

export default Signin;