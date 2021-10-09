import React from 'react';

const Login = props => {
    const handleEmail = e => {
        props.setEmail(e.target.value);
    }
    const handlePass = e => {
        props.setPassword(e.target.value);
    }
    return (
        <div>
            <h2>Login From</h2>
            <form onSubmit={props.handleSubmit}>
                <div className="input-box">
                    <input onBlur={handleEmail} type="email" placeholder="Username" />
                </div>
                <div className="input-box">
                    <input onBlur={handlePass} type="password" placeholder="password" />
                </div>
                <div className="input-box">
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    );
};

export default Login;