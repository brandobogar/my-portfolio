import { useState, useEffect } from "react";
import Switcher from "./Switcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`fixed h-16 top-0 navbar bg-my-bg-light bg-opacity-30 backdrop-filter backdrop-blur-lg z-[100] dark:text-my-text-dark dark:bg-my-bg-dark dark:bg-opacity-30 dark:hover:text-my-text-dark font-open ${
          isScrolled ? "animate-opennav" : "shadow-none"
        }`}
      >
        <div className="flex-1">
          <a className="text-lg font-normal normal-case btn-sm btn btn-ghost hover:scale-110 dark:hover:text-my-text-dark">
            Brando Bogar
          </a>
        </div>
        <div className="flex-none">
          <ul className="flex flex-row items-center gap-6 pr-4 text-xl menu menu-horizontal">
            <li>
              <a
                href="#about"
                className="pt-0 text-lg font-normal normal-case btn btn-sm btn-ghost hover:scale-110 dark:hover:text-my-text-dark"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#project"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark"
              >
                Techs
              </a>
            </li>
            <li>
              <details>
                <summary className="pt-0 text-lg font-normal normal-case btn btn-sm hover:scale-110 btn-ghost dark:hover:text-my-text-dark">
                  Features
                </summary>
                <ul className="divide-y-2 bg-base-100 divide-slate-100 dark:text-myBlack">
                  <li>
                    <a
                      href="/features/sentiment"
                      className="pt-0 text-lg font-normal normal-case btn btn-ghost btn-sm hover:scale-110"
                    >
                      Sentiment
                    </a>
                  </li>
                  <li>
                    <a
                      href="/features/todo"
                      className="pt-0 text-lg font-normal normal-case btn btn-ghost btn-sm hover:scale-110"
                    >
                      Todo
                    </a>
                  </li>
                  <li>
                    <a
                      href="/features/lyrics"
                      className="pt-0 text-lg font-normal normal-case btn btn-ghost btn-sm hover:scale-110"
                    >
                      Lyrics
                    </a>
                  </li>
                  <li>
                    <a
                      href="/features/gallery"
                      className="pt-0 text-lg font-normal normal-case btn btn-ghost btn-sm hover:scale-110"
                    >
                      Gallery
                    </a>
                  </li>
                </ul>
              </details>
            </li>
            <div>
              <Switcher />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
