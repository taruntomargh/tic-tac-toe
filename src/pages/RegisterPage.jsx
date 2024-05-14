import axios from "axios";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegisterForm(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        data: {
          username: username,
          email: email,
          password: password,
        }
      });

      console.log(response.data);
      // console.log(response);
      // console.log(response.status);

      if(response.status === 200){
        alert("Registration Successfull.")
      }
    } catch (error) {
      console.log("handleRegisterForm ERROR: ", error);
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form action="" onSubmit={handleRegisterForm}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
