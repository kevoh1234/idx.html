// Register.js
import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';



const Register = ({setUser}) => {
  const [isSignUp, setisSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const history = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    if (isSignUp) {
      history("/recipe")
    }

    const userData = {
      name: username,
      password,
      email 
    }

    axios.post('http://localhost:8000/user', userData).then(res => {
      localStorage.setItem("user", JSON.stringify(res.data))
      setUser(res.data.result);
      history("/register") 
      console.log("axios", res.data)
    }).catch((error) => {
      console.log("seems the email is already used", error)
      history("/register")
    })
    

  };

  return (
    <div className="min-h-screen flex items-center justify-center register">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>

          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          
        </div>
        <div className="flex items-center justify-between">
          <Link style={{textDecoration:"none"}} to="/">
            <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          </Link>
          
        </div>
      </form>
    </div>
  );
};

export default Register;