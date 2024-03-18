import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (

    <div className="text-justify about-container flex flex-col items-center ">
      <div className="about-title flex justify-center items-center w-full relative">
        <h1
          id="above"
          className="text-opacity-20 text-[#363535] text-7xl about-title-above"
        >
          About
        </h1>
        <h1
          id="below"
          className="text-[#d3c3b9] text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4"
        >
          About Me
        </h1>
      </div>

      <div className="about-content max-w-[1000px] mx-auto bg-[#121212] shadow-lg rounded-lg overflow-hidden my-8 flex flex-col md:flex-row h-full ">
        <div className="about-info px-4 py-6 ">
          <h2 className="text-xl font-bold text-[#8ea6d4] mb-2">Summary</h2>
          <p className="text-gray-300 about-text">
            I&apos;m a tech enthusiast specializing in data science, machine
            learning, and DevOps. Currently a Software Developer at IBM Pvt Ltd,
            I&apos;ve led projects such as migrating RPA containers to CI/CD,
            implementing advanced classification techniques like bigram text
            classification, and orchestrating CI/CD data pipelines for AI
            applications. Previously, as a Data Scientist at HighRadius Pvt Ltd,
            I focused on forecasting Account Receivables and Payables,
            developing heuristic models, and conducting exploratory data
            analysis on bank datasets. Armed with a B.Tech in Computer Science
            from Kalinga Institute of Industrial Technology, my diverse skill
            set includes Python, SQL, Java, NLP, and more. My passion lies in
            leveraging technology to drive innovation and tackle complex
            challenges in the tech industry.
          </p>
        </div>
        <div className="about-contact px-4 py-6 bg-[#121212] flex-grow">
          <h3 className="text-lg font-bold text-[#8ea6d4] mb-2">
            Contact Information
          </h3>
          <div className="text-gray-300 about-text flex flex-wrap">
            <p className="flex items-center">
              <span className="badge badge-accent badge-outline mr-2">
                Name
              </span>
              Chetan Anand
            </p>
            <p className="flex items-center">
              <span className="badge badge-accent badge-outline mr-2">
                Email
              </span>
              <Link to="mailto:chetan.anand710@gmail.com" target="_blank">
                chetan.anand710@gmail.com
              </Link>
            </p>
            <p className="flex items-center">
              <span className="badge badge-accent badge-outline mr-2">
                LinkedIn
              </span>
              <Link
                to="https://www.linkedin.com/in/chetan-anand-791681185/"
                target="_blank"
              >
                chetan-anand
              </Link>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
