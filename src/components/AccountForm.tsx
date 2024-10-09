import { FormEvent, useState } from "react";
import "./AccountForm.css";

const AccountForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDOB] = useState("");

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
  };

  return (
    <div className="AccountForm">
      <h2>Create New Account</h2>
      <h3>Already Registered? Login</h3>
      <form className="new-account-form" onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
          required
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountForm;
