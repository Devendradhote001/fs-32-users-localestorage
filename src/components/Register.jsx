import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ setToggle, setUsersData, usersData }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleRegisterForm = (data) => {
    let updatedArr = [...usersData, data];
    setUsersData(updatedArr);
    localStorage.setItem("usersData", JSON.stringify(updatedArr));
    alert("user registered");
    reset();
  };

  return (
    <div className="w-[40%] bg-white p-6 rounded flex flex-col gap-5 text-center">
      <h1 className="text-2xl text-blue-600 font-bold">Register here</h1>
      <form
        onSubmit={handleSubmit(handleRegisterForm)}
        className="flex flex-col gap-5 "
        action=""
      >
        <input
          {...register("username", { required: true })}
          className="border p-2 rounded"
          type="text"
          placeholder="Username"
        />
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
          value="Register"
        />
      </form>
      <div>
        <p>
          Already have an account ?{" "}
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="text-blue-600 cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
