import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(s => s.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const initials = user?.name?.split(" ").map(n => n[0]).join("") || "U";

  return (
    <div className="card max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-semibold text-xl">
            {initials}
          </div>
          <div>
            <div className="text-lg font-bold">{user?.name}</div>
            <div className="text-sm text-gray-500">{user?.email}</div>
          </div>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="mt-6 text-gray-600">
        <p>Welcome to your dashboard. This demo uses Redux Toolkit + redux-persist to keep your login across refresh.</p>

        {/* Add small cards or quick links if you like */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700">Profile info</div>
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700">Settings</div>
          <div className="p-4 bg-gray-50 rounded-lg text-sm text-gray-700">Activity</div>
        </div>
      </div>
    </div>
  );
}
