import Navbar from "../components/Navbar";

function Education() {
  return (
    <>
      <Navbar />

      <section className="education">

        <h1>Education 🌻</h1>

        <div className="edu-card">
          <h2>🎓 SR University</h2>

          <p>B.Tech CSE (AIML)</p>

          <p>2023 - 2027</p>

          <p>CGPA: 9.51</p>
        </div>

        <div className="edu-card">
          <h2>🎓 SR Dhruva Junior College</h2>

          <p>Intermediate</p>

          <p>2021 - 2023</p>

          <p>97.1%</p>
        </div>

      </section>
    </>
  );
}

export default Education;