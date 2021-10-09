import './App.css';
import Login from './components/Login/Login'
import Form from './components/Form/Form';
import SignUp from './components/SignUp/SingUp';
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuth from "../src/firebase/firebase.init";
import User from './components/User/User';
function App() {
  const [change, setChange] = useState('login');
  const [data, setData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  initializeAuth();
  const auth = getAuth();
  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setData(user);
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

  }
  const handleClick = e => {
    setChange(e);
  }

  // google 
  const google = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, google)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setData(user);
        // ...
      }).catch((error) => {
        // Handle Errors here. 
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  // github
  const github = new GithubAuthProvider();
  const handleGithub = () => {
    signInWithPopup(auth, github)
      .then(result => {
        const user = result.user;
        setData(user);

      }).catch((error) => {
        // Handle Errors here. 
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used. 
        // ...
      });
  }
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setData({});
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      {
        data.email ?
          <Form><User handleSignOut={handleSignOut} data={data}></User> </Form> :
          <Form>
            {change === 'login' ? <Login setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}></Login> : <SignUp handleGoogle={handleGoogle} handleGithub={handleGithub} setData={setData} handleSubmit={handleSubmit}></SignUp>}
            {
              change === 'login' ?
                <div>
                  <p className="forget">Forget password?<button onClick={() => handleClick('forget')}>Click here</button></p>
                  <p className="forget">Don't have a accounts?<button onClick={() => handleClick("newAccount")}>Sign up</button></p>
                </div>
                :
                <div>
                  <p className="forget">Login form?<button onClick={() => handleClick('login')}>Click here</button></p>
                </div>
            }
          </Form>
      }
    </div>
  );
}

export default App;
