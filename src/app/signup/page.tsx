"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignupPage = () => {
    const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
        const response  = await axios.post("/api/users/signup", user)
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center flex  flex-col items-center justify-center h-screen">
      <div className="bg-red-500 m-4 p-4 rounded-md">
        <h1 className="text-3xl font-bold mb-2">hellohello.com</h1>
        <div className="flex-col bg-amber-900 p-4 rounded-2xl">
          <h1 className="text-3xl font-bold">Signup Here</h1>
          <div className="m-2 p-2 flex justify-between items-center">
            <label htmlFor="username">Email: </label>
            <input
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="bg-white text-black rounded-2xl px-2 py-1"
              type="text"
            />
          </div>

          <div className="m-2 p-2 flex justify-between items-center">
            <label htmlFor="username">Username: </label>
            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="bg-white text-black rounded-2xl px-2 py-1"
              type="text"
            />
          </div>

          <div className="m-2 p-2 flex justify-between items-center">
            <label htmlFor="username">Password: </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-white text-black rounded-2xl px-2 py-1"
              type="text"
            />
          </div>
          <button onClick={onSignup} className="bg-green-700 p-2 rounded-xl text-white hover:bg-green-600 hover:cursor-pointer">Submit</button>
        </div>
      </div>
      <Link href="/login">
          <button className="bg-green-700 p-2 rounded-xl text-white hover:bg-green-600 hover:cursor-pointer">
            or Login
          </button>
        </Link>
    </div>
  );
};

export default SignupPage;
