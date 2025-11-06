import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearError } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHandshake } from "react-icons/fa6";

const schema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email required"),
  password: yup.string().min(6, "At least 6 characters").required("Password required"),
}).required();

export default function Login(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(s => s.auth);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (isAuthenticated) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    }
  }, [error, isAuthenticated, dispatch, navigate]);

  const onSubmit = (data) => dispatch(loginUser(data));

  const fillDemo = () => {
    reset({ email: "demo@brainybeam.com", password: "demo123" });
    toast.info("Demo creds filled. Click Sign in.");
  };

  return (
    <div className="card max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-linear-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
            BB
          </div>
          <div>
            <h1 className="text-lg font-semibold">BrainyBeam - Task 1</h1>
            <p className="text-sm text-gray-500">Redux auth & routing </p>
          </div>
        </div>
        <div><FaHandshake/></div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div>
          <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="demo@brainybeam.com"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="password" className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            id="password"
            type="password"
            {...register("password")}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            placeholder="demo123"
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby={errors.password ? "password-error" : undefined}
          />
          {errors.password && <p id="password-error" className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="btn bg-linear-to-r from-indigo-600 to-purple-600 text-white disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <button
            type="button"
            onClick={fillDemo}
            className="btn border border-gray-200 text-sm"
          >
            Demo creds
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          Use <strong>demo@brainybeam.com</strong> / <strong>demo123</strong>
        </p>
      </form>
    </div>
  );
}
