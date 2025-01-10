import React from "react";
import { useForm } from "react-hook-form";
import { IResponse } from "../../../helpers/types";
import { METHODS, useHttpMutation } from "../../../helpers/useHttp";

interface ILogin {
  password: string;
  login: string;
}

export const UpdateLogin = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ILogin>();
  const [updateLogin, error] = useHttpMutation<IResponse, ILogin>(reset);

  const onSubmit = (data: ILogin) => {
    updateLogin("/update/login", METHODS.PATCH, data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Update Your Login
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Current Login */}
        <div>
          <label
            htmlFor="login"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Current Login
          </label>
          <input
            id="login"
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.login ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your current login"
            {...register("login", { required: "Current login is required" })}
          />
          {errors.login && (
            <small className="text-red-500">{errors.login.message}</small>
          )}
        </div>

        {/* New Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            New Password
          </label>
          <input
            id="password"
            type="password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your new password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

    
