import React from 'react';
import './SignUp.css'
const SingUp = props => {
    return (
        <div>
            <h2>Sign Up</h2>
            <button onClick={props.handleGoogle}>Google</button>
            <button onClick={props.handleGithub}>Github</button>
        </div>
    );
};

export default SingUp;