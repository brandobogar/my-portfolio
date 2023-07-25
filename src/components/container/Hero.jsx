import Color from "../elements/Color";
import Social from "../elements/Socials";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div className="text-4xl text-center font-open before:opacity-0 after:opacity-50 dark:text-my-text-dark">
          <h1>Hi there!!</h1>
          <p>
            I&apos;m Brando
            <br />
            Front-end Developer
          </p>
        </div>
        <Social />
        <Color/>
      </div>
    </>
  );
}
