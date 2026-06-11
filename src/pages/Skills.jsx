import Navbar from "../components/Navbar";

function Skills() {
  return (
    <>
      <Navbar />

      <section className="skills">

        <h1>My Skills 🌺</h1>

        <div className="skills-container">

          <div className="skill-card">
            <h2>💻 Programming</h2>

            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h2>🎨 Frontend</h2>

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React JS</li>
            </ul>
          </div>

          <div className="skill-card">
            <h2>⚙ Backend</h2>

            <ul>
              <li>Node JS</li>
              <li>Express JS</li>
            </ul>
          </div>

          <div className="skill-card">
            <h2>🗄 Database</h2>

            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h2>🤖 AI & ML</h2>

            <ul>
              <li>Machine Learning</li>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
            </ul>
          </div>

          <div className="skill-card">
            <h2>🌸 Soft Skills</h2>

            <ul>
              <li>Communication</li>
              <li>Leadership</li>
              <li>Teamwork</li>
              <li>Time Management</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;