import { motion } from "framer-motion";
import Image from "next/image";
interface Props {
  experience: ExperienceT;
}
interface ExperienceT {
  img: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  techStack: string[];
  summary: string[];
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-2 md:space-y-7 flex-shrink-0 w-[80vw] sm:w-[400px] md:w-[500px] xl:w-[600px] opacity-100 md:opacity-40 hover:opacity-100 snap-center bg-[#292929] p-5 transition-opacity duration-200 overflow-hidden overflow-y-auto">
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20   bg-white rounded-full flex justify-center items-center overflow-hidden"
      >
        <Image
          className={`object-contain `}
          src={`/experience/${experience.img}`}
          alt={experience.companyName}
          fill
        />
      </motion.div>
      <div className="px-3 md:px-5">
        <h4 className="text-xl sm:text-2xl md:text-3xl font-light">
          {experience.role}
        </h4>
        <p className="font-bold text-base sm:text-lg md:text-xl mt-1">
          {experience.companyName}
        </p>
        <div className="flex space-x-2 my-2">
          {experience.techStack.map((tech, index) => (
            <div
              key={index}
              className={`relative overflow-hidden h-4 w-4 md:h-6  md:w-6 rounded-full ${
                tech === "nextjs" ||
                tech === "styled-components" ||
                tech === "frammer-motion"
                  ? "bg-white"
                  : "bg-transparent"
              }`}
            >
              <Image
                fill
                className="object-contain"
                alt={tech}
                src={`/skills/${tech}.webp`}
                key={index}
              />
            </div>
          ))}
        </div>
        <p className="uppercase py-2 md:py-5 text-xs text-gray-300">
          {experience.startDate} - {experience.endDate}
        </p>
        <ul className="list-disc space-y-2 md:space-y-5 text-xs md:text-base">
          {experience.summary.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
