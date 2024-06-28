import React, { useState } from "react";
// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  image,
  sourceCodeLink,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        glareColor="#aaa6c3"
      > */}
        <div className="bg-tertiary w-full rounded-2xl p-5 sm:w-[360px]  flex flex-col h-full">
          <div className="relative h-[230px] w-full">
            <img
              src={image}
              alt={name}
              className="h-full w-full rounded-2xl object-cover "
            />
            <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
              <div
                onClick={() => window.open(sourceCodeLink, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 flex-grow">
            <h3 className="text-[18px] font-bold text-white">{name}</h3>
            <p className="text-secondary mt-2 text-[14px] leading-[20px] overflow-hidden" style={{ maxHeight: expanded ? "none" : "60px", textAlign: "justify" }}>
              {description}
            </p>
            {description.length > 60 && (
              <button onClick={toggleExpand} className="text-white mt-2">
                {expanded ? "Read less" : "Read more"}
              </button>
            )}
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <p key={tag.name} className={`text-[12px] ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      {/* </Tilt> */}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w text-[17px] leading-[30px]"
          style={{ textAlign: 'justify' }}
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
