import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">
        <h1>About Me 🌷</h1>

        <p className="about-text">
          I am Meghana Mattapally, a Computer Science
          student specializing in Artificial Intelligence
          and Machine Learning.

          I am passionate about developing intelligent
          systems, solving real-world problems, and
          building modern web applications.
        </p>

        <div className="about-cards">

          <div className="card">
            <h2>🎯 Career Goal</h2>
            <p>
              Become an AI Engineer and Full Stack
              Developer creating impactful solutions.
            </p>
          </div>

          <div className="card">
            <h2>💡 Interests</h2>
            <p>
              Artificial Intelligence,
              Machine Learning,
              Web Development,
              Data Engineering
            </p>
          </div>

          <div className="card">
            <h2>🚀 Strengths</h2>
            <p>
              Problem Solving,
              Critical Thinking,
              Communication,
              Teamwork
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default About;