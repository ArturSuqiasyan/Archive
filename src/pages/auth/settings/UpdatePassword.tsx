
import React from "react";
import { useForm } from "react-hook-form";
import { METHODS, useHttpMutation } from "../../../helpers/useHttp";
import { IResponse } from "../../../helpers/types";

interface IForm {
  old: string;
  newpwd: string;
}

export const UpdatePassword = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IForm>();
  const [updatePassword, error] = useHttpMutation<IResponse, IForm>(reset);

  const onSubmit = (data: IForm) => {
    updatePassword("/update/password", METHODS.PATCH, data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h3 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Update Your Password
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Error Message */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Current Password */}
        <div>
          <label
            htmlFor="old"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Current Password
          </label>
          <input
            id="old"
            type="password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.old ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your current password"
            {...register("old", { required: "Current password is required" })}
          />
          {errors.old && (
            <small className="text-red-500">{errors.old.message}</small>
          )}
        </div>

        {/* New Password */}
        <div>
          <label
            htmlFor="newpwd"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            New Password
          </label>
          <input
            id="newpwd"
            type="password"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.newpwd ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter your new password"
            {...register("newpwd", { required: "New password is required" })}
          />
          {errors.newpwd && (
            <small className="text-red-500">{errors.newpwd.message}</small>
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