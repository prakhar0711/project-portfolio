import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <>
      <div className="p-10 md:p-20 text-left font-mono">
        <div>
          <h1 className="mb-8 items-center justify-center flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3c3b9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-activity"
            >
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          </h1>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#161618",
              color: "rgb(211, 195, 185)",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(211, 195, 185)",
            }}
            date="August 2021 - present"
            iconStyle={{ background: "rgb(211, 195, 185)" }}
          >
            <h1 className=" vertical-timeline-element-title text-[#b58863] text-3xl">
              IBM Pvt Ltd
            </h1>
            <h3 className=" text-[#b58863] text-xl vertical-timeline-element-subtitle">
              Software Developer <br /> Bangalore , India
            </h3>
            <p>
              <ul className="list-disc text-white">
                <li>
                  Migrated RPA containers to CI/CD using selenium and python
                  which resulted in automating Ariba logins and password update
                  functionalities.
                </li>
                <li>
                  Implemented bigram text classification approach using Word2Vec
                  based on unique keywords for multi-class classification.
                </li>
                <li>
                  Applied SMOTE technique on a very unbalanced dataset and
                  trained that dataset on Watson NLU model to classify mail as
                  PO or Non-PO based on the subject of the Email body which
                  resulted in increasing accuracy from 79% to 93%.
                </li>
                <li>
                  Orchestrated the complete implementation of CI/CD data
                  pipeline, using Cirrus, Git and Docker to automate software
                  delivery process by following agile methodologies for 6 AI
                  applications.
                </li>
                <li>
                  Combined 3 different chatbots with different dialogue flows in
                  a single Master Chatbot using an ensemble approach that fused
                  a Sentence Embedding model, Watson Natural Language
                  Understanding model, and rule-based logic to accurately
                  predict the conversational flow of the user.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#161618",
              color: "rgb(211, 195, 185)",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(211, 195, 185)",
            }}
            date="April 2020 - October 2020"
            iconStyle={{ background: "rgb(211, 195, 185)" }}
          >
            <h1 className=" vertical-timeline-element-title text-[#b58863] text-3xl">
              HighRadius Pvt Ltd
            </h1>
            <h3 className=" text-[#b58863] text-xl vertical-timeline-element-subtitle">
              Data Scientist <br /> Remote , India
            </h3>
            <p>
              <ul className="list-disc text-white">
                <li>
                  Forecasted Account Receivables (AR) and Account Payable (AP)
                  by using Time Series Forecasting.
                </li>
                <li>
                  Developed 8+ Heuristic models for sparse datasets by
                  Statistical analysis in Excel that led to an increase in
                  weekly and monthly forecasting accuracy by approximately
                  40-50%.
                </li>
                <li>
                  Collaborated with Data Analysis team to deliver valuable
                  insights by performing exploratory data analysis (EDA) on Bank
                  datasets and ERP data, contributing to informed
                  decision-making processes.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#161618",
              color: "rgb(211, 195, 185)",
              padding: "2rem",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(211, 195, 185)",
            }}
            date="June 2017 - May 2021"
            iconStyle={{ background: "rgb(211, 195, 185)" }}
          >
            <h1 className=" vertical-timeline-element-title text-[#b58863] text-3xl">
              Kalinga Institute of Industrial Technology
            </h1>
            <h3 className=" text-[#b58863] text-xl vertical-timeline-element-subtitle">
              B.Tech CSE
              <br />
              CGPA: 8.4
            </h3>
            <p></p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Experience;
