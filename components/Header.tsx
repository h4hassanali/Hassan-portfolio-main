import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        {/* Social icons */}
        <SocialIcon
          url={"https://www.linkedin.com/in/hassan-ali-8658541b2"}
          fgColor={"gray"}
          bgColor={"transparent"}
        />
        <SocialIcon
          url={"https://github.com/h4hassanali"}
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer justify-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <Link
          href="#home"
          className="text-xl sm:text-2xl flex items-center text-gray-400 tracking-[-6px] uppercase font-bold"
        >
          <span className="text-[#F7AB0A]">H</span>A
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
