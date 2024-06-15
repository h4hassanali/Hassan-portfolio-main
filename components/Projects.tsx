import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";

interface ProjectT {
  Name: string;
  Summary: string;
  img: string;
  link: string;
}

interface Props {
  projects: ProjectT[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-[80vh] sm:h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-xl sm:text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 sm:p-20 md:p-44 h-screen"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative md:w-[600px] md:h-[300px] w-96 h-40  "
            >
              <Image
                src={`/projects/${project.img}`}
                className="object-contain"
                alt={project.Name}
                fill
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center flex justify-center gap-2 items-center">
                <span className="underline decoration-[#F7Ab0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                {project.Name + " "}
                <Link href={project.link} target="_blank d">
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 sm:w-7 sm:h-7  text-[#F7Ab0A] " />
                </Link>
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-center md:text-left">
                {project.Summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
