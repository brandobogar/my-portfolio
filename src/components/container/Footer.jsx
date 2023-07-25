import Social from "../elements/Socials";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-row justify-around p-10 footer text-my-text-light dark:text-my-text-dark">
        <div>
          <span className="footer-title">Services</span>

          <a className="link link-hover">Design</a>

          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Social</span>

          <Social />
        </div>
      </footer>
    </>
  );
}
