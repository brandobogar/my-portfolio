import icons from "../../assets/data/icons.json";

export default function Techs() {
  const skills = [
    "react",
    "photoshop",
    "tailwind",
    "illustrator",
    "flask",
    "tensorflow",
    "flutter",
    "python",
  ];

  function getIcon(tech) {
    const matchedIcon = icons.find((icon) => icon.name === tech);
    return matchedIcon ? matchedIcon.src : null;
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-start w-full h-screen pt-10"
        id="skills"
      >
        <h1 className="text-3xl underline text-my-text-light dark:text-my-text-dark">
          TECHS
        </h1>
        <div className="flex items-center justify-center w-full h-full">
          <ul className="grid grid-flow-col grid-rows-2 gap-x-24 gap-y-24">
            {skills.map((skill) => (
              <li key={skill} className="h-24 hover:scale-110">
                <img
                  src={getIcon(skill)}
                  alt="skill"
                  className="h-full bg-transparent cursor-default animate-float drop-shadow-3xl btn btn-ghost hover:bg-transparent"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
