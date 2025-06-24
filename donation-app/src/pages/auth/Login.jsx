import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <h1>Login Page</h1>
            <p>Don't have an account? <Link to='/auth/signup'>signup</Link></p>
        </>
    )
}

export default Login