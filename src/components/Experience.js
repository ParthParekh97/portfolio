import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="UI UX Intern"
              company="Breathing.ai"
              companyLink="https://breathing.ai/"
              time="2023 Feb-Present"
              address="New York City, NY"
              work="● Addressed needs of over 5 thousand customers by proposing key features for a Customer Dashboard Portal deriving strong
              rationale from site analytics, and complex user data to design high-quality interface prototypes in Figma
              ● Developed creative & delightful design solutions while partnering with the marketing team of 7 communicating design intent
              with designers, product managers, engineering team, developers, content writers & stakeholders in a lean agile environment
              ● Collaborated with a multidisciplinary team to define a visual design system & design accessible assets
              ● Resolved a critical customer problem by designing an end-to-end process flow of a site-based chatbot from problem definition to
              concept ideation to implementation"
            />

            <Details
              position="UI UX Intern"
              company="Vivpro Corporation"
              companyLink="https://www.vivpro.ai/"
              time="May 2022 - July 2022"
              address="Pennsylvania(Remote), US"
              work="● Formed a frontend UI in ReactJS functional component by converting UI mockups, increased user experience
              by 28% ● Technologies: ReactJS, ExpressJS, Redux, MongoDB, CSS and Bootstrap"
            />

            <Details
              position="Frontend Developer"
              company="SERC"
              companyLink="https://sercuarc.org/"
              time="Jan 2022 - May 2022"
              address="Stevens Institute of Technology,Hoboken, NJ"
              work=" ● Built a full-stack scalable backend for an SERC Department website by employing Java, Spring Boot, JPA which
              enchanted daily active users by 15% ● Designed and developed UI (User Interface) for a responsive website using ReactJS, Wordpress and MySQL resulting in
              a 42% rise in new users in 5 months"
            />

            <Details
              position="Software Engineer"
              company="Navitus Education Pvt Ltd"
              companyLink="https://www.navitus.tech/"
              time="Dec 2020 - Aug 2021"
              address="Mumbai, Maharashtra, India"
              work="● Constructed Life Cycle for 100k customers utilizing latest mobile app technologies and tools
              ● Implemented RESTful APIs to serve data to front-end based on dynamically chosen inputs using Angular
              ● Designed product features based on client feedback and competitive intelligence"
            />

            <Details
              position="Software Engineer"
              company="Capgemini India Pvt Ltd"
              companyLink="https://www.capgemini.com/"
              time="Fall 2018"
              address="Mumbai, Maharashtra, India"
              work="● Boosted user engagement from 50k to 160k users and achieved a 4.5-star rating by translating product
              requirements & user feedback to impactful drive redesign of an Android Mobile App
              ● Devised UI for mobile applications and dynamic web apps for ongoing clients using Android Studio
              ● Built Java fundamentals for all screens to show in flow & validates for each user-editable field"
            />
        
        </ul>
      </div>
    </div>
  );
};

export default Experience;
