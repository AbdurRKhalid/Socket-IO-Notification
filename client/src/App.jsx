import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar';
import Card from './components/card/Card';

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <>
      <div className='container'>
        {user ? (
        <>
          <Navbar />
          <Card />
          <span className="username">{username}</span>
        </>) 
        : (
          <div className='login'>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <button onClick={(() => setUser(username))}>Login</button>
          </div>
          )
        }
      </div>
    </>
  )
}

export default App
