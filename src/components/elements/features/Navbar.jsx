import { useState, useEffect } from "react";
import Switcher from "../Switcher";

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
        className={`fixed font-open h-16 top-0 navbar bg-my-bg-light bg-opacity-30 backdrop-filter backdrop-blur-lg z-[100] dark:bg-my-bg-dark dark:text-my-text-dark hover:bg-opacity-30 ${
          isScrolled ? "animate-opennav" : "shadow-none"
        }`}
      >
        <div className="flex-1">
          <a
            className="text-lg font-normal normal-case btn btn-sm btn-ghost hover:scale-110 "
            href="/"
          >
            Brando Bogar
          </a>
        </div>
        <div className="flex-none">
          <ul className="flex flex-row items-center gap-6 pr-4 ">
            <li>
              <a
                href="/features/lyrics"
                className="text-lg font-normal text-center normal-case btn-ghost btn btn-sm hover:scale-110"
              >
                Lyrics
              </a>
            </li>
            <li>
              <a
                href="/features/sentiment"
                className="text-lg font-normal normal-case btn-ghost btn btn-sm hover:scale-110"
              >
                Sentiment
              </a>
            </li>
            <li>
              <a
                href="/features/todo"
                className="text-lg font-normal normal-case btn-ghost btn btn-sm hover:scale-110"
              >
                Todo
              </a>
            </li>
            <li>
              <a
                href="/features/gallery"
                className="text-lg font-normal normal-case btn-ghost btn btn-sm hover:scale-110"
              >
                Gallery
              </a>
            </li>
            <li>
              <Switcher />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
