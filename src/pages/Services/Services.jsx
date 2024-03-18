import ServiceCard from "../../components/Services/ServiceCard";
import image_1 from "../../../public/code.svg";
import image_2 from "../../../public/data.svg";
import image_3 from "../../../public/machine.svg";
import Marquee from "react-fast-marquee";
import {
  django,
  python,
  java,
  postman,
  docker,
  git,
  jira,
  excel,
  devops,
  agile,
} from "../../../public/marque/index.js";

function Services() {
  return (
    <div className="service-container flex flex-col justify-center items-center">
      {/* First Row */}
      <div className="services  text-center">
        <h1 className="text-4xl mb-8 font-bold">
          <button className="smky-btn3 relative text-2xl hover:text-black py-2 px-6 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-[#abd373] after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-[#d3c3b9]">
            SERVICES
          </button>
        </h1>
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <ServiceCard title="Data Science" image={image_2} />
          <ServiceCard title="Machine Learning" image={image_3} />
          <ServiceCard title="Web Development" image={image_1} />
        </div>
      </div>
      {/* Second Row */}
      <div className="tech-carousel pt-10 md:pt-16 lg:pt-44">
        <Marquee>
          <img
            src={python}
            alt="python"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={java}
            alt="java"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={django}
            alt="django"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={postman}
            alt="postman"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={docker}
            alt="docker"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={git}
            alt="git"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={jira}
            alt="jira"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={excel}
            alt="excel"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={devops}
            alt="devops"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
          <img
            src={agile}
            alt="agile"
            className="tech-icon mr-4 md:mr-8 lg:mr-16"
          />
        </Marquee>
        {/* Content for tech carousel */}
      </div>
    </div>
  );
}

export default Services;
