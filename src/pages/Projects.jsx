import Navbar from "../components/Navbar";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="projects">

        <h1>Projects 🌹</h1>

        <div className="projects-container">

          <div className="project-card">
            <h2>🌱 Dry Bean Classification</h2>

            <p>
              Developed a Machine Learning model
              using image processing and predictive
              analytics for bean classification.
            </p>

 
          </div>

          <div className="project-card">
            <h2>☀ Solar Radiation Prediction</h2>

            <p>
              Hybrid XGBoost + ANN model
              for accurate solar radiation prediction.
            </p>


          </div>

          <div className="project-card">
            <h2>💬 Mental Health Chatbot</h2>

            <p>
              AI-powered chatbot providing
              mental wellness guidance and support.
            </p>


          </div>

        </div>
      </section>
    </>
  );
}

export default Projects;