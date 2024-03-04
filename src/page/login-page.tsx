import React from 'react';

function Login() {
    return (
        <div className="login-wrapper">
            <h2>로그인 페이지</h2>
            <form>
                <input type="text" name="userName" placeholder="email"></input><br></br>
                <input type="password" name="userPassword" placeholder="Password"></input><br></br>
                <input type="submit" value="Login"></input>
            </form>
        </div>
    )
}
export default Login;