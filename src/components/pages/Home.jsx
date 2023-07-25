import Navbar from "../elements/Navbar";
import { Helmet } from 'react-helmet'
import Hero from "../container/Hero";
import About from "../container/About";
import Project from "../container/Projects";
import Techs from "../container/Techs";
import Footer from "../container/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Homepage</title>
        <meta
          name="description"
          content="This is the homepage of our website."
        />
        <meta name="keywords" content="My portfolio website" />
        <meta name="author" content="Brando Bogar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Navbar />

      <div className="divide-y-[1px] divide-opacity-50 divide-slate-50 dark:bg-my-bg-dark dark:text-my-dark bg-my-bg-light text-my-text-light dark:divide-my-text-200">
        <Hero />

        <About />
        <Project />
        <Techs />
        <Footer />
      </div>
    </>
  );
}

export default Home;
