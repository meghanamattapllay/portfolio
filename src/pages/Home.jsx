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
          <a href="/portfolio/Meghana_Resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;