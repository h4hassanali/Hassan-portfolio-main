import { motion } from "framer-motion";
import Skill from "./Skill";
import SectionWrapper from "./SectionWrapper";

interface SkillT {
  title: string;
  set: (
    | {
        name: string;
        proficiency: number;
        bg: boolean;
      }
    | {
        name: string;
        proficiency: number;
        bg?: undefined;
      }
  )[];
}
[];

interface Props {
  skills: SkillT[];
}

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row mx-auto max-w-[2000px] xl:px-10 justify-center xl:space-y-0 items-center"
    >
      <SectionWrapper
        heading="Skills"
        tagline="Hover over a skill for current profiency"
      >
        <div>
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="top-36 uppercase tracking-[3px] text-white text-sm mb-3 mt-5 text-center">
                {skill.title}
              </h3>
              <div className="grid grid-cols-5 gap-5 ">
                {skill.set.map((skillSet, index) => (
                  <Skill
                    bg={skillSet.bg}
                    img={skillSet.name}
                    proficiency={skillSet.proficiency}
                    key={index}
                    directionLeft={
                      index + 1 <= 5 ? true : index + 1 <= 10 ? false : true
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </motion.div>
  );
}

export default Skills;
