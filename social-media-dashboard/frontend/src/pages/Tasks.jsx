import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Tasks() {
  // ✅ Replace this data with your actual completed tasks
  const myTasks = [
    {
      id: 0,
      title: "Redux Auth App",
      desc: "Created the login app for authorize the user using React Context and Tailwind CSS.",
      status: "Completed",
      link: "https://github.com/Arun-Tomar13/Brainly-Bream-Tasks/tree/main/redux-auth-app"
    },
    {
      id: 1,
      title: "Theme Changer",
      desc: "Developed a dynamic light/dark theme toggle using React Context and Tailwind CSS.",
      status: "Completed",
      link: "https://github.com/Arun-Tomar13/Brainly-Bream-Tasks/tree/main/theme-changer  "
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      desc: "Created a responsive dashboard showing followers, posts, and engagement metrics with Recharts.",
      status: "Completed",
      link: "http://localhost:3000" // or your live/demo link
    },
    {
      id: 3,
      title: "Shopping Cart",
      desc: "Implemented add/remove/update functionality using React useState hooks.",
      status: "In Progress",
      link: ""
    },
    {
      id: 4,
      title: "Chess Board",
      desc: "Planned interactive chessboard logic using React grid and state toggles.",
      status: "Not Started",
      link: ""
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "In Progress":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">My Task Progress</h1>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {myTasks.map((task) => (
                <div key={task.id} className="card p-5 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-lg text-gray-800">{task.title}</h2>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{task.desc}</p>

                  {task.link ? (
                    <a
                      href={task.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-indigo-600 font-medium hover:underline"
                    >
                      View Project ↗
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">No link yet</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-sm text-gray-500 text-center">
              Showing tasks you’ve completed and upcoming tasks. Keep building 🚀
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
