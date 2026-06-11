import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Hi, I'm Meghana 🌸</h1>

        <p>Computer Science (AIML) Student</p>

        <h3>
          Passionate about Artificial Intelligence,
          Machine Learning, Full Stack Development,
          and building impactful software solutions.
        </h3>

        <div className="buttons">

          <a
            href="https://github.com/meghanamattapllay"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>

          <a
            href="https://www.linkedin.com/in/meghana-mattapally/"
            target="_blank"
            rel="noreferrer"
          >
            <button>LinkedIn</button>
          </a>

        </div>
      </section>
    </>
  );
}

export default Home;