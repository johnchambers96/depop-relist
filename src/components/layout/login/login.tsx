import React, { FC } from "react";

export const Login: FC = () => {
  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} noValidate={false}>
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          title="Invalid email address"
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          minLength={6}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
