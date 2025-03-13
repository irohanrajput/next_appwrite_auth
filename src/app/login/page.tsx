"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/users/login", user);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <div className="bg-red-500 m-4 p-4 rounded-md">
        <div className="flex-col bg-amber-900 p-4 rounded-2xl">
          <h1 className="text-3xl font-bold">Login Here</h1>
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
            <label htmlFor="username">Password: </label>
            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-white text-black rounded-2xl px-2 py-1"
              type="text"
            />
          </div>
          <button
            onClick={onLogin}
            className="bg-green-700 p-2 rounded-xl text-white hover:bg-green-600 hover:cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
      <Link href="/signup">
        <button className="bg-green-700 p-2 rounded-xl text-white hover:bg-green-600 hover:cursor-pointer">
          or Sign Up
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;
