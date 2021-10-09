import React from 'react';

const User = props => {
    const { displayName, email, photoURL } = props.data;
    console.log("hi", props);
    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
                <img src={photoURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{displayName}</h5>
                    <p className="card-text">{email}</p>
                    <button className='btn btn-warning' onClick={props.handleSignOut}>Sign Out</button>
                </div>
            </div>
        </div>
    );
};

export default User;