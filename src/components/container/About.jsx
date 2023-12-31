
export default function About() {
    return (
      <>
        <div
          id="about"
          className="flex flex-col items-center w-full h-screen justify-evenly text-my-text-light dark:text-my-text-dark "
        >
          <h1 className="text-3xl underline font-open ">ABOUT</h1>
          <div className="flex flex-row px-32">
            <img
              src="/profil.jpg"
              alt="profil"
              className="rounded-full w-[150px]"
            />
            <p className="w-3/4 ml-5 text-xl text-justify font-open ">
              {" "}
              An informatics engineering graduate with experience in graphic
              design and mastering various software such as Adobe Photoshop and
              Adobe Illustrator. Experienced in making posters and flyers for
              marketing needs. A highly dedicated, conscientious and motivated
              person to make attractive innovation to the company and have
              interested in graphics design as Front-End Developer and data
              science.{" "}
              <span>
                <a
                  href="https://drive.google.com/file/d/1hOB7UAJ49ECmnN3a87UQTjb22YX4yXWv/view?usp=sharing"
                  target="blank"
                  className="text-blue-400 hover:underline "
                >
                  Read more ...
                </a>{" "}
              </span>
            </p>
          </div>
        
        </div>
      </>
    );
  }
  