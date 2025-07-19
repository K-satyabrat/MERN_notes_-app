import { Link } from "react-router";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const themes = ["forest","dark", "light", "sunset"];

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "forest");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tightest">
            MyNote
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-3" />
              <span>New Note</span>
            </Link>
            <select
              className="select select-bordered ml-4 bg-primary"
              
              value={theme}
              onChange={e => setTheme(e.target.value)}
            >
              {themes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
