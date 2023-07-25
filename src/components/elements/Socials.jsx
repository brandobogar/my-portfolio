import socials from "../../assets/data/socials.json";
export default function Social() {
  return (
    <>
      <div className="z-0 flex flex-col items-center justify-center mt-5 text-center">
        <ul className="flex flex-row gap-10">
          <li
            className={
              "w-12 h-12 border-solid  border-[2px]  border-black flex items-center justify-center rounded-full hover:bg-base-100 hover:scale-110"
            }
          >
            <a href={socials[0].link} target="blank">
              <img
                src={socials[0].img}
                alt={socials[0].name}
                className="w-7 h-7 "
              />
            </a>
          </li>
          <li
            className={
              "w-12 h-12 border-solid  border-[2px] border-black flex items-center justify-center rounded-full hover:bg-twitter  hover:scale-110"
            }
          >
            <a href={socials[1].link} target="blank">
              <img
                src={socials[1].img}
                alt={socials[1].name}
                className="w-7 h-7"
              />
            </a>
          </li>
          <li
            className={
              "w-12 h-12 border-solid  border-[2px] border-black flex items-center justify-center rounded-full hover:bg-gradient-to-bl  hover:scale-110 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"
            }
          >
            <a href={socials[2].link} target="blank">
              <img
                src={socials[2].img}
                alt={socials[2].name}
                className="w-7 h-7"
              />
            </a>
          </li>
          <li
            className={
              "w-12 h-12 border-solid  border-[2px] border-black flex items-center justify-center rounded-full hover:bg-linkedin  hover:scale-110"
            }
          >
            <a href={socials[3].link} target="blank">
              <img
                src={socials[3].img}
                alt={socials[3].name}
                className="w-7 h-7"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
