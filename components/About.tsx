import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

interface Props {
  about: {
    summary: string;
    img: string;
  };
}

function About({ about }: Props) {
  return (
    <SectionWrapper
      heading={"About"}
      className="flex flex-col md:flex-row  text-center md:text-left  pt-16 sm:pt-24  max-w-7xl px-5 sm:px-10 justify-evenly mx-auto items-center"
    >
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="relative md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px] z-0 overflow-hidden"
      >
        <Image alt="AK" className="object-cover" fill src={about.img} />
      </motion.div>
      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        className="space-y-1 sm:space-y-10 px-0 md:px-10"
      >
        <h4 className="relative z-20 text-xl sm:text-4xl lg:text-5xl font-semibold text-center">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="text-xs sm:text-sm text-center lg:text-lg">
          {about.summary}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}

export default About;
