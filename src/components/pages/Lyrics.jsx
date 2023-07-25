import { useState } from "react";
import lyrics from "../../assets/data/lyrics.json";
import { useEffect } from "react";
import Navbar from "../elements/features/Navbar";
import { Helmet } from "react-helmet";

const Head = () => {
  return (
    <Helmet>
      <title>Lyrics</title>
      <meta name="description" content="today's lyric generator " />
      <meta name="keywords" content="today, lyrics, generator" />
      <meta name="author" content="Brando Bogar" />
    </Helmet>
  );
};
export default function Lyrics() {
  const [quote, setQuote] = useState("");
  const [name, setName] = useState("");
  const [card, setCard] = useState(false);
  const [index, setIndex] = useState(0);

  const getRandom = () => {
    card ? setCard(true) : setCard(true);
    const res = Math.random() * lyrics.length;
    const choice = Math.floor(res);
    // setShowCard(!showCard)
    setIndex(choice);
  };

  useEffect(() => {
    if (index !== 0) {
      setName(lyrics[index].name);
      setQuote(lyrics[index].quote);
    }
  }, [index]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-my-bg-light dark:text-myWhite dark:bg-myBlack">
      <Head />
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-20">
        <div>
          <button className="btn btn-md  bg-my-accent-100 " onClick={getRandom}>
            Click Me
          </button>
        </div>
        <div className="h-3/4 ">
          {card ? (
            <div className="h-3/4 ">
              <div className="w-full text-black bg-blue-100 card h-fit">
                <div className="pt-8 pb-10 pl-10 pr-10 card-body">
                  <div className="justify-end card-actions">
                    <button
                      className="btn btn-square btn-ghost btn-sm"
                      onClick={() => {
                        setCard(false);
                      }}
                    >
                      X
                    </button>
                  </div>
                  <p>{quote}</p>
                  <div className="justify-end card-actions">
                    <div>
                      <p>{name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
