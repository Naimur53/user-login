import React from 'react';
import "./Form.css"
const Login = props => {
    return (
        <div>
            <section>
                <div className="color"></div>
                <div className="color"></div>
                <div className="color"></div>
                <div className="box">
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="square"></div>
                    <div className="container">
                        <div className="form">
                            {props.children[0]}
                            {props.children[1]}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;