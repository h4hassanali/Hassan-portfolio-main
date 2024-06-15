import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  proficiency: number;
  img: string;
  bg?: boolean;
};

function Skill({ directionLeft, img, proficiency, bg }: Props) {
  return (
    <div className="group relative cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -20 : 20,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`flex md:hidden relative overflow-hidden rounded-full border border-gray-500 object-cober md:w-16 md:h-16 h-10 w-10 filter group group-hover::grayscale transition duration-300 ease-in-out object-contain  ${
          bg ? "bg-white" : "bg-transparent"
        }`}
      >
        <Image
          fill
          className="object-contain"
          alt={img}
          src={`/skills/${img}.webp`}
        />
      </motion.div>
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className={`hidden md:flex relative overflow-hidden rounded-full border border-gray-500 object-cober md:w-16 md:h-16 h-10 w-10 filter group group-hover::grayscale transition duration-300 ease-in-out object-contain  ${
          bg ? "bg-white" : "bg-transparent"
        }`}
      >
        <Image
          fill
          className="object-contain"
          alt={img}
          src={`/skills/${img}.webp`}
        />
      </motion.div>
      <div className=" absolute inset-0 rounded-full opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white md:w-16 md:h-16 h-10 w-10">
        <div className="flex items-center justify-center h-full">
          <p className="text-lg font-bold text-black opacity-100">
            {proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
