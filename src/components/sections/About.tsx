import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="green-pink-gradient shadow-card w-full rounded-[20px] p-[1px]"
      >
        <div className="bg-tertiary flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt="web-development"
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
        <Header useMotion={true} {...config.sections.about} />

<div className="flex flex-wrap items-center mt-10">
  <motion.div
    variants={fadeIn("", "", 0.1, 1)}
    className="text-secondary max-w text-[17px] leading-[30px] flex-1"
  >
    <h2 className="text-[24px] font-bold"></h2>
    <p className="mt-4" style={{ textAlign: "justify" }}>I am a  senior full stack developer with more than 6 years of work experience in designing and crafting web and desktop applications using multiple languages. I have played a role from software developer to senior software developer, team lead, developer operations, and integrations.</p>
    <p className="mt-4" style={{ textAlign: "justify" }}>I have vast working experience in Microsoft Technologies, including C# ASP.NET Core, .NET Framework, Web Forms, WinForms, Microsoft Azure, and AWS. As a full-stack developer, I have worked on JavaScript frameworks like Node.js, Express.js, Chart.js, Angular.js, Vue.js, and Next.js. Moreover, for frontend technologies, I have worked on HTML, CSS, Bootstrap, Material UI, Angular, React, jQuery, AJAX, and Blazor.</p>
    <p className="mt-4" style={{ textAlign: "justify" }}>I have proven experience working in multiple .NET frameworks like MVC, ORM (Entity Framework, Dapper), LINQ, RabbitMQ, SignalR, Identity Framework, MVVM, WCF, WPF Desktop applications, Kafka, Web API development, Razor, MAUI, Web API, Elasticsearch, layered architecture, microservices, and domain-driven architecture. Also, I have a diverse hands-on working record in utilizing multiple databases, including Microsoft SQL, T-SQL, MongoDB, PostgreSQL, Azure CosmosDB, and MySQL.</p>
    <p className="mt-4" style={{ textAlign: "justify" }}>I have worked on Public API Integrations, including Google Maps, Paypal, Stripe, eBay, and Authorize.net, Facebook. Furthermore, I have worked on multiple code merging tools like SVN, GitHub, GitLab, Git, and Azure DevOps.</p>
    {/* <p className="mt-4" style={{ textAlign: "justify" }}>
      
{config.sections.about.content}
</p> */}

  </motion.div>
</div>

<div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
  {services.map((service, index) => (
    <ServiceCard key={service.title} index={index} {...service} />
  ))}
</div>
      
    </>
  );
};

export default SectionWrapper(About, "about");
