<<<<<<< HEAD
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'

function App() {
  return (
    <>
      <Header />
      <MainContent />
      
      {/* UserProfile Components with different props */}
=======
import UserProfile from './components/UserProfile';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import WelcomeMessage from './components/WelcomeMessage';

// App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WelcomeMessage />
      <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Header />
      <MainContent />
      <Footer />
>>>>>>> 5f2c443d4558b153df0e22199b1b6e5281275037
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
<<<<<<< HEAD
      
      <UserProfile 
        name="Bob" 
        age="30" 
        bio="Software developer and coffee enthusiast" 
      />
      
      <UserProfile 
        name="Charlie" 
        age="28" 
        bio="Travel blogger and foodie" 
      />
      
      <Footer />
      <WelcomeMessage />
=======
>>>>>>> 5f2c443d4558b153df0e22199b1b6e5281275037
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> 5f2c443d4558b153df0e22199b1b6e5281275037
