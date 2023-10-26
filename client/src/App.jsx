import { useState } from 'react'
import './App.css'
import Navbar from './components/nav/Navbar';
import Card from './components/card/Card';
import {posts} from './data';

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  console.log(user);

  return (
    <>
      <div className='container'>
        {user ? (
        <>
          <Navbar />
          {
            posts.map((post) => (
              <Card key={post.id} post={post} />
            ))
          }
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
