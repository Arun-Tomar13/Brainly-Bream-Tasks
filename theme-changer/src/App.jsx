import React, { memo } from "react";
import { useTheme } from "./Theme";

const TogglePill = memo(function TogglePill({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle theme"
      className="relative inline-flex items-center h-9 w-16 rounded-full p-1 transition-all ring-1 ring-slate-200 dark:ring-slate-700 bg-white dark:bg-slate-800"
    >
      <span
        className={`absolute left-1 top-1 h-7 w-7 rounded-full shadow-md transform transition-transform duration-200 ${
          theme === "dark" ? "translate-x-7" : "translate-x-0"
        } bg-yellow-400 dark:bg-sky-400 flex items-center justify-center text-xs`}
      >
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="sr-only">Theme</span>
    </button>
  );
});

const cardClass =
  "bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-lg p-4 shadow-sm hover:shadow transition";

const skills = ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Node.js", "MongoDB", "Express.js"];
const projects = [
  { title: "Talkify — Socialization App", desc: "Real-time chat & video for people with shared interests." },
  { title: "MedBot — AI Healthcare Assistant", desc: "AI assistant providing preliminary medical guidance." },
  { title: "StockMate — Market Insights", desc: "Predictive visualizations and dashboards for stock trends." },
  { title: "Expense Tracker", desc: "Polished finance tracker with charts and CSV export." },
];
const tiles = [
  {
    title: "State & API",
    body: "Read theme via useTheme(): { theme, toggle, setTheme }.",
  },
  {
    title: "Persistence",
    body: "Saved as cookie `theme` (365d); falls back to localStorage if cookies are blocked.",
  },
  {
    title: "No flicker",
    body: "We use useLayoutEffect to set the class on <html> before paint.",
  },
  {
    title: "Tailwind",
    body: "Use dark: variants. Ensure darkMode: 'class' in tailwind.config.js.",
  },
];

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Arun"
              alt="Arun"
              className="w-16 h-16 rounded-full border-2 border-indigo-500/60 dark:border-indigo-400/70 shadow-sm"
            />
            <div>
              <h1 className="text-lg md:text-xl font-semibold">Hey — I’m <span className="text-indigo-500 dark:text-indigo-400">Arun Tomar</span></h1>
              <p className="text-sm text-slate-500 dark:text-slate-300">MERN Stack Developer • Frontend enthusiast</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sm font-medium text-slate-800 dark:text-slate-100">Arun Tomar</span>
              <a href="mailto:aruntomar1330@gmail.com" className="text-xs text-slate-500 dark:text-slate-300 hover:underline">
                aruntomar1330@gmail.com
              </a>
            </div>
            <div className="flex flex-col justify-center">
              <TogglePill theme={theme} onToggle={toggle} />
              <div>click header</div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="grid gap-6 md:grid-cols-3">
          {/* About */}
          <aside className="md:col-span-1 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-sm font-semibold mb-2">About me</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
              I build frontend-first experiences using React and Tailwind — clean UI, good performance, maintainable code.
            </p>

            <div className="text-sm mb-3">
              <div className="font-medium">Primary stack</div>
              <div className="text-xs text-slate-500 dark:text-slate-300">React • Tailwind • Node • Express • MongoDB</div>
            </div>

            <div className="text-sm">
              <div className="font-medium">Contact</div>
              <div className="flex flex-col gap-1 mt-2 text-xs">
                <a href="mailto:aruntomar1330@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">Email</a>
                <a href="https://github.com/Arun-Tomar13" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">GitHub</a>
                <a href="https://www.linkedin.com/in/aruntomar-" target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">LinkedIn</a>
              </div>
            </div>
          </aside>

          {/* Theme explainer */}
          <section className="md:col-span-2 p-5 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
            <h2 className="text-lg font-semibold mb-2">Theme Changer — quick walkthrough</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
              Switches Light/Dark for the whole app by toggling <code className="rounded px-1 py-0.5 bg-slate-100 dark:bg-slate-900 text-xs">&lt;html&gt;.dark</code>.
              Preference is persisted as a cookie (365 days) with localStorage fallback. useTheme() exposes {`{ theme, toggle, setTheme }`}.
            </p>

            <div className="grid gap-3 md:grid-cols-2 mb-4">
              {tiles.map((t) => (
                <div key={t.title} className="p-3 rounded-md bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700 text-xs">
                  <div className="font-medium text-slate-800 dark:text-slate-100 mb-1">{t.title}</div>
                  <div className="text-slate-600 dark:text-slate-300">{t.body}</div>
                </div>
              ))}
            </div>

            <hr className="my-4 border-slate-100 dark:border-slate-700" />

            <h3 className="text-sm font-medium mb-2">Why this approach</h3>
            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
              <li>Cheap DOM change — toggling class on <code>&lt;html&gt;</code>.</li>
              <li>Set before paint with <code>useLayoutEffect</code> to avoid flash.</li>
              <li>Works offline (localStorage fallback) and is easy to sync server-side if needed.</li>
            </ul>

            <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              Tip: after toggling try <code className="rounded px-1 py-0.5 bg-white dark:bg-slate-800 text-xs">document.cookie</code> in console to confirm persistence.
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">Skills & Projects</h4>
              <div className="flex flex-wrap gap-2 mb-3">
                {skills.map((s) => (
                  <span key={s} className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-700">
                    {s}
                  </span>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                {projects.map((p) => (
                  <article key={p.title} className={cardClass}>
                    <h4 className="font-medium mb-1">{p.title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-6 text-xs text-slate-500 dark:text-slate-400">
          Want this exported as a snippet or single-file package? I can prepare that — or add server-sync so your preference follows you across devices.
          <br />
          © {new Date().getFullYear()} Arun Tomar
        </footer>
      </div>
    </div>
  );
}
