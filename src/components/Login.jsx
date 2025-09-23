import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setToggle, usersData, setExistingUser }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleLoginForm = (data) => {
    let existingUser = usersData.filter(
      (elem) => elem.email === data.email && elem.password === data.password
    );

    if (existingUser.length === 0) {
      alert("user not found");
      return;
    }
    setExistingUser((prev) => [...prev, existingUser[0]]);

    alert("user loggedin");
    reset();
  };

  return (
    <div className="w-[40%] bg-white p-6 rounded flex flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-600 font-bold">Login here</h1>
      <form
        onSubmit={handleSubmit(handleLoginForm)}
        className="flex flex-col gap-5 "
      >
        <input
          {...register("email", { required: true })}
          className="border p-2 rounded"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("password", { required: true })}
          className="border p-2 rounded"
          type="text"
          placeholder="Password"
        />
        <input
          className=" p-2 rounded bg-blue-600 text-white"
          type="submit"
          value="Lets check"
        />
      </form>
      <div>
        <p>
          Don't have an account ?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
